import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    Chip,
    LinearProgress,
    Divider,
    Grid,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import styled from '@mui/system/styled';
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import { fetchGitHubRepositories } from "../context/userContext";

import { formatDistanceToNow } from 'date-fns';

const Repositories = ({ accessToken, userRepositories }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(userRepositories);
    const Item = styled('div')(({ theme }) => ({
        color: "black",
        padding: theme.spacing(3),
    }));

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
    const handleRefreshAll = async (accessToken) => {
        setIsLoading(true);
        try {
            const repositories = await fetchGitHubRepositories(accessToken);
            setResults(repositories);
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
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            margin: "20px",
        }}>
            <List sx={{ padding: "10px" }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        color: "text.primary",
                                        fontWeight: "bold",
                                        display: "inline",
                                    }}
                                >
                                    Repositories
                                </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    gutterBottom
                                    sx={{ color: "text.primary", display: "flex", mb: 2 }}
                                >
                                    {results?.length} total repositories
                                </Typography>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', border: "1px solid lightGrey", alignItems: 'center', width: 400, mb: "5px" }}
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
                            </React.Fragment>
                        }
                    />
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "10px",
                        }}
                    >
                        <Button
                            onClick={() => handleRefreshAll(accessToken)}
                            disabled={isLoading}
                            sx={{ textTransform: "none", borderRadius: "8px" }}
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
                </ListItem>

                <Divider component="li" />

                {isLoading ?
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box> : results && results.length > 0 ? (
                        results.map((repo) => (
                            <React.Fragment>
                                <ListItem button alignItems="flex-start" key={repo.name}>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography variant="h6" gutterBottom>
                                                    {repo.name}{" "}
                                                    <Chip label={repo.visibility} color="primary" variant="outlined" size="small" sx={{ ml: 1, backgroundColor: "#e1e9f2", }} />
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={3} fontSize="medium">
                                                        <Grid size={4}>
                                                            <Item>{repo.language} <FiberManualRecordIcon color="primary" fontSize="small" sx={{ paddingTop: "8px" }} /></Item>
                                                        </Grid>
                                                        <Grid size={4}>
                                                            <Item><StorageOutlinedIcon fontSize="small" sx={{ paddingTop: "8px" }} />{` ${repo.size} KB`}</Item>
                                                        </Grid>
                                                        <Grid size={4}>
                                                            <Item sx={{ paddingTop: "28px" }}>{`Updated ${formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })}`}</Item>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </React.Fragment>
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