import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    Chip,
    LinearProgress,
    Divider,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    CardContent,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { useMediaQuery } from "@mui/material";
import { fetchGitHubRepositories } from "../context/userContext";

import { formatDistanceToNow } from 'date-fns';

const Repositories = ({ accessToken, userRepositories }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(userRepositories);

    useEffect(() => {
        setResults(userRepositories);
    }, [userRepositories]);

    const handleSearchTerm = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    }

    const handleSearch = () => {
        const searchResults = userRepositories?.filter((i) => i.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setResults(searchResults?.length === 0 ? [] : searchResults);
    }

    //refresh all
    const handleRefreshAll = async() => {
        setIsLoading(true);
        try {
            // const repositories = await fetchGitHubRepositories(accessToken);
            setResults(userRepositories);
        } catch (error) {
            console.error("Error refreshing repositories:", error.message);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    };

    return (
        <Card sx={{
            width: "100%",
            bgcolor: "background.paper",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: isMobile ? 0 : "0px 4px 10px rgba(0,0,0,0.1)",
            margin: isMobile ? 0 : "20px",
        }}>
            <CardContent >
                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: isMobile ? "flex-start" : "space-between",
                    }}
                >
                    <Typography
                        component="span"
                        variant="h5"
                        sx={{
                            color: "text.primary",
                            fontWeight: "bold",
                            display: "flex",
                        }}
                    >
                        Repositories
                    </Typography>

                    <Box sx={{
                        display: "flex", flexDirection: "row", gap: "10px" }} >
                        <Button
                            onClick={() => handleRefreshAll()}
                            disabled={isLoading}
                            sx={{ textTransform: "none", borderRadius: "8px", color: "black", borderColor: "lightGrey"}}
                            startIcon={<CachedIcon />}
                            variant="outlined"
                        >
                            {isLoading ? "Refreshing" : "Refresh All"}
                        </Button>
                        <Button
                            sx={{ textTransform: "none", borderRadius: "8px" }}
                            startIcon={<AddIcon />}
                            variant="contained"
                        >
                            Add Repository
                        </Button>
                    </Box>
                </Box>
                <Typography
                    component="span"
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "text.primary", display: "flex", mb: 1 }}
                >
                    {results?.length} total repositories
                </Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 2px', display: 'flex', border: "1px solid lightGrey", alignItems: 'center', borderRadius: "8px", width: isMobile ? "90%" : 400, mb: "5px" }}
                >
                    <IconButton onClick={handleSearch} type="button" aria-label="search">
                        <Search />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, }}
                        value={searchTerm}
                        onChange={handleSearchTerm}
                        placeholder="Search Repositories"
                        variant="outlined"
                    />
                </Paper>
            </CardContent>
            <Divider />
            <List sx={{ padding: "10px" }}>
                {isLoading ?
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box> : results && results.length > 0 ? (
                        results.map((repo) => (
                            <React.Fragment>
                                <ListItem button alignItems="flex-start" key={repo.name}>
                                    <ListItemText
                                        primary={
                                            <Typography component="h5" variant="h5" gutterBottom>
                                                {repo.name}{" "}
                                                <Chip label={repo.type} color="primary" variant="outlined" size="small" sx={{ ml: 1, backgroundColor: "#e1e9f2", }} />
                                            </Typography>
                                        }
                                        secondary={
                                            <Box sx={{ display: "flex", color: "text.primary", alignItems: "center", gap: "40px", mb: 1 }}>
                                                <Typography variant="subtitle1">
                                                    {repo.language} <FiberManualRecordIcon fontSize="small" sx={{ color: "#007bff", paddingTop: "10px" }} />
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    <StorageOutlinedIcon fontSize="small" sx={{ verticalAlign: "middle", marginRight: "4px" }} />
                                                    {`${repo.size} KB`}
                                                </Typography>
                                                <Typography variant="subtitle1">{`Updated ${repo.updated}`}</Typography>
                                            </Box>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li" />
                            </React.Fragment>
                        ))
                    ) : (
                        <ListItem alignItems="flex-start">
                            <ListItemText>
                                <Typography sx={{ p: "10px 10px", fontSize: "large" }}>No matching repository found.</Typography>
                            </ListItemText>
                        </ListItem>
                    )}
            </List>
        </Card>
    );
};

export default Repositories;