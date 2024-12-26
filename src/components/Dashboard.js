import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
    Toolbar,
} from "@mui/material";

import { Phone, ExitToApp } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AICodeReview from "./AICodeReview";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HowtoUse from './HowtoUse';
import Repositories from './Repositories';
import Support from './Support';

const drawerWidth = 240;

const Dashboard = ({ handleLogout, user, userRepositories, accessToken }) => {
    const [showSection, setShowSection] = useState({
        showRepositories: true,
        showAICodeReview: false,
        showCloudSecurity: false,
        showHowtoUse: false,
        showSettings: false
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedProfile, setSelectedProfile] = useState(user);

    //onclick of sections
    const handleSectionClick = (section) => {
        setShowSection({
            showRepositories: false,
            showAICodeReview: false,
            showCloudSecurity: false,
            showHowtoUse: false,
            showSettings: false,
            showSupport: false,
            [section]: true, // Only the clicked section is set to true
        });
    };

    //mobile responsive

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (profile) => {
        if (profile) {
            setSelectedProfile(profile);
        }
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
            <CssBaseline />
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar>
                    <img
                        style={{ width: "2.5rem", paddingRight: "10px" }}
                        src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                        alt="codeAnt-logo"
                    />
                    <Typography variant="h5">CodeAnt AI</Typography>
                </Toolbar>

                <Button
                    onClick={handleMenuOpen}
                    variant="outlined"
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                        borderRadius: 2,
                        margin: "20px",
                        padding: "8px",
                        borderColor: "#d1d1d1", // Light color for the outline
                        color: "#000",
                        "&:hover": {
                            borderColor: "#b0b0b0", // Slightly darker outline on hover
                        },
                    }}
                >
                    {selectedProfile.length > 15
                        ? `${selectedProfile.slice(0, 15)}...`
                        : selectedProfile}
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleMenuClose()}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >

                    <MenuItem onClick={() => handleMenuClose(setSelectedProfile)}>
                        {selectedProfile}
                    </MenuItem>

                </Menu>

                <Box sx={{ overflow: "auto" }}>
                    <List sx={{
                        ml: "15px", mr: "15px"
                    }}>
                        {[
                            "Repositories",
                            "AI Code Review",
                            "Cloud Security",
                            "How to Use",
                            "Settings",
                        ].map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() =>
                                    handleSectionClick(
                                        `show${text.replace(/\s/g, '')}` // Converts "Code Review" to "showAICodeReview"
                                    )
                                }
                                sx={{
                                    borderRadius: 2, // Optional: Add a rounded border
                                    "&:hover": {
                                        backgroundColor: "#1976d2", // Light blue hover effect
                                        color: "#fff",           // Change text/icon color to blue on hover
                                        "& .MuiListItemIcon-root": {
                                            color: "#fff",       // Change icon color to blue on hover
                                        },
                                    },
                                }}>
                                <ListItemIcon sx={{
                                    color: "inherit", // Ensures color changes on hover
                                }}>
                                    {
                                        [
                                            <HomeOutlinedIcon />,
                                            <CodeOffOutlinedIcon />,
                                            <CloudOutlinedIcon />,
                                            <LibraryBooksOutlinedIcon />,
                                            <SettingsOutlinedIcon />,
                                        ][index]
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <List sx={{ position: "absolute", bottom: 0, width: "90%", ml: "15px" }}>
                        <ListItem
                            button
                            onClick={() =>
                                handleSectionClick('showSupport')
                            }
                            sx={{
                                borderRadius: 2, // Optional: Add a rounded border
                                "&:hover": {
                                    backgroundColor: "#1976d2", // Light blue hover effect
                                    color: "#fff",           // Change text/icon color to blue on hover
                                    "& .MuiListItemIcon-root": {
                                        color: "#fff",       // Change icon color to blue on hover
                                    },
                                },
                            }}>
                            <ListItemIcon
                                sx={{
                                    color: "inherit", // Ensures color changes on hover
                                }}
                            >
                                <Phone />
                            </ListItemIcon>
                            <ListItemText primary="Support" />
                        </ListItem>
                        <ListItem button
                            onClick={handleLogout}
                            sx={{
                                borderRadius: 2, // Optional: Add a rounded border
                                "&:hover": {
                                    backgroundColor: "#1976d2", // Light blue hover effect
                                    color: "#fff",           // Change text/icon color to blue on hover
                                    "& .MuiListItemIcon-root": {
                                        color: "#fff",       // Change icon color to blue on hover
                                    },
                                },
                            }}>
                            <ListItemIcon
                                sx={{
                                    color: "inherit", // Ensures color changes on hover
                                }}>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Repository Content */}
            {showSection.showRepositories && (
                <Repositories userRepositories={userRepositories} accessToken={accessToken} />
            )}

            {/* show code review */}
            {showSection.showAICodeReview && (
                <Card sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    padding: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    margin: "20px",
                }}>
                    <AICodeReview />
                </Card>
            )}

            {showSection.showHowtoUse && (
                <Card sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    padding: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    margin: "20px",
                }}>
                    <HowtoUse />
                </Card>
            )}

            {/* Support Content */}
            {showSection.showSupport && (
                <Card sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    margin: "20px",
                }}>
                    <Support />
                </Card>
            )}
        </Box>
    );
};

export default Dashboard;
