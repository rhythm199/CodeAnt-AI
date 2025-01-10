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
    IconButton,
    useMediaQuery,
} from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ExitToApp, Phone } from "@mui/icons-material";
import AICodeReview from "./AICodeReview";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HowtoUse from './HowtoUse';
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Repositories from './Repositories';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Support from './Support';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Dashboard = ({ user, accessToken }) => {
    const navigate = useNavigate();
    const [showSection, setShowSection] = useState({
        showRepositories: true,
        showAICodeReview: false,
        showCloudSecurity: false,
        showHowtoUse: false,
        showSettings: false
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedProfile, setSelectedProfile] = useState(user);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const userRepositories = [
        { name: 'design-system', type: 'Public', size: '7320', language: 'React', updated: '1 day ago' },
        { name: 'codeant-ci-app', type: 'Private', size: '5871', language: 'Javascript', updated: '2 days ago' },
        { name: 'analytics-dashboard', type: 'Private', size: '4521', language: 'Python', updated: '5 days ago' },
        { name: 'mobile-app', type: 'Public', size: '3096', language: 'Swift', updated: '3 days ago' },
        { name: 'e-commerce-platform', type: 'Private', size: '6210', language: 'Java', updated: '6 days ago' },
        { name: 'blog-website', type: 'Public', size: '1876', language: 'HTML/CSS', updated: '4 days ago' },
        { name: 'social-network', type: 'Private', size: '5432', language: 'PHP', updated: '7 days ago' }
    ];

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

    const drawerContent = (
        <>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>

                <Typography variant="h5">
                    <img
                        style={{ width: "2.5rem", paddingRight: "10px" }}
                        src="./codeant_ai_logo.jpeg"
                        alt="codeAnt-logo"
                    />CodeAnt AI</Typography>
                <DrawerHeader>
                    <IconButton
                        sx={{

                            borderColor: isDarkMode ? "#1e293b" : "#d1d1d1", // Light color for the outline
                            color: isDarkMode ? "#fff" : "#000",
                            "&:hover": {
                                borderColor: "#b0b0b0",
                            },
                        }}
                        onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
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
                    borderColor: isDarkMode ? "#1e293b" : "#d1d1d1", // Light color for the outline
                    color: isDarkMode ? "#fff" : "#000",
                    "&:hover": {
                        borderColor: "#b0b0b0",
                    },
                }}
            >
                {selectedProfile}
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
                <List sx={{ ml: "15px", mr: "15px" }}>
                    {[
                        "Repositories",
                        "AI Code Review",
                        "Cloud Security",
                        "How to Use",
                        "Settings",
                        "Support",
                        "Logout",
                    ].map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() =>
                                handleSectionClick(
                                    `show${text.replace(/\s/g, "")}`
                                )
                            }
                            sx={{
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                    "& .MuiListItemIcon-root": {
                                        color: "#fff",
                                    },
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: "inherit",
                                }}
                            >
                                {
                                    [
                                        <HomeOutlinedIcon />,
                                        <CodeOffOutlinedIcon />,
                                        <CloudOutlinedIcon />,
                                        <LibraryBooksOutlinedIcon />,
                                        <SettingsOutlinedIcon />,
                                        <Phone />,
                                        <ExitToApp />,
                                    ][index]
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );

    return (
        <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%", backgroundColor: isDarkMode ? '#020817' : "#f5f5f5", color: isDarkMode ? '#fff' : '#000', }}>
            <CssBaseline />
            {/* Sidebar */}
            {isMobile ? (
                <>
                    <Toolbar sx={{
                        display: "flex", backgroundColor: isDarkMode ? "#030c20" : "#fff",
                        color: isDarkMode ? "#fff" : "#000", justifyContent: "space-between"
                    }}>
                        <Typography variant="h5"><img
                            style={{ width: "2.5rem", paddingRight: "10px" }}
                            src="./codeant_ai_logo.jpeg"
                            alt="codeAnt-logo"
                        />CodeAnt AI
                            <IconButton
                                color="inherit"
                                onClick={toggleTheme}
                                aria-label="theme togger"
                                edge="end"
                            >
                                {isDarkMode ? <WbSunnyOutlinedIcon /> : <WbSunnyIcon />}
                            </IconButton>
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Drawer
                        anchor="top"
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            "& .MuiDrawer-paper": {
                                width: "100%",
                                height: "auto",
                                boxSizing: "border-box",
                                backgroundColor: isDarkMode ? "#030c20" : "#fff",
                                color: isDarkMode ? "#fff" : "#000",
                            },
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            backgroundColor: isDarkMode ? "#030c20" : "#fff",
                            color: isDarkMode ? "#fff" : "#000",
                        },
                    }}
                >
                    <Toolbar>
                        <img
                            style={{ width: "2.5rem", paddingRight: "10px" }}
                            src="./codeant_ai_logo.jpeg"
                            alt="codeAnt-logo"
                        />
                        <Typography variant="h5">CodeAnt AI</Typography>
                        <IconButton
                            color="inherit"
                            onClick={toggleTheme}
                            aria-label="theme togger"
                            edge="end"
                        >
                            {isDarkMode ? <WbSunnyOutlinedIcon /> : <WbSunnyIcon />}
                        </IconButton>
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
                            borderColor: isDarkMode ? "#1e293b" : "#d1d1d1", // Light color for the outline
                            color: isDarkMode ? "#fff" : "#000",
                            "&:hover": {
                                borderColor: "#b0b0b0", // Slightly darker outline on hover
                            },
                        }}
                    >
                        {selectedProfile}
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
                                    onMouseEnter={(e) => {
                                        // Remove default hover effect from "Repositories"
                                        const repoItem = document.querySelector(
                                            '[data-default="true"]'
                                        );
                                        if (repoItem) {
                                            repoItem.style.backgroundColor = "inherit";
                                            repoItem.style.color = "inherit";
                                            const repoIcon = repoItem.querySelector(".MuiListItemIcon-root");
                                            if (repoIcon) repoIcon.style.color = "inherit";
                                        }

                                        // Apply hover effect to the current item
                                        e.currentTarget.style.backgroundColor = "#1976d2";
                                        e.currentTarget.style.color = "#fff";
                                        const icon = e.currentTarget.querySelector(".MuiListItemIcon-root");
                                        if (icon) icon.style.color = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        // Reset the hover effect to the default for "Repositories"
                                        if (text === "Repositories") {
                                            e.currentTarget.style.backgroundColor = "#1976d2";
                                            e.currentTarget.style.color = "#fff";
                                            const icon = e.currentTarget.querySelector(".MuiListItemIcon-root");
                                            if (icon) icon.style.color = "#fff";
                                        } else {
                                            e.currentTarget.style.backgroundColor = "inherit";
                                            e.currentTarget.style.color = "inherit";
                                            const icon = e.currentTarget.querySelector(".MuiListItemIcon-root");
                                            if (icon) icon.style.color = "inherit";
                                        }
                                    }}
                                    data-default={text === "Repositories"} // Identifies the default item
                                    sx={{
                                        borderRadius: 2, // Optional: Add a rounded border
                                        backgroundColor: text === "Repositories" ? "#1976d2" : "inherit", // Default hover effect for Repositories
                                        color: text === "Repositories" ? "#fff" : "inherit", // Text color for Repositories
                                        "& .MuiListItemIcon-root": {
                                            color: text === "Repositories" ? "#fff" : "inherit", // Icon color for Repositories
                                        },
                                    }}
                                >
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
                                onClick={() => navigate("/")}

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
            )}

            {/* Repository Content */}
            {showSection.showRepositories && (
                <Repositories userRepositories={userRepositories} />
            )}

            {/* show code review */}
            {showSection.showAICodeReview && (
                <Card sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    padding: "20px",
                    backgroundColor: isDarkMode ? '#020817' : '#fff',
                    color: isDarkMode ? '#fff' : '#000',
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
                    backgroundColor: isDarkMode ? '#020817' : '#fff',
                    color: isDarkMode ? '#fff' : '#000',
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
                    backgroundColor: isDarkMode ? '#020817' : '#fff',
                    color: isDarkMode ? '#fff' : '#000',
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

Dashboard.propTypes ={
    user: PropTypes.string,
    accessToken: PropTypes.string,
};

export default Dashboard;
