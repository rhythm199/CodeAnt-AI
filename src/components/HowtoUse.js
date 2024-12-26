import React from "react";
import { Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

const HowtoUse = () => {
    return (
        <>
            <Typography variant="h5" align="left" sx={{ marginBottom: 1, fontWeight: "bold", color: "#1976d2" }}>
                README: Run This Project Locally
            </Typography>

            <Box>
                <Typography variant="h6" align="left" sx={{ fontWeight: "bold" }}>
                    Github Link of Assignment
                </Typography>
                <List sx={{ padding: 0 }}>
                    <ListItem sx={{ padding: "4px 0" }}>
                        <ListItemText primary="1. Open the provided link." />
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                        <ListItemText primary="2. Click the 'Sign in with GitHub' button to load your GitHub repositories." />
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                        <ListItemText
                            primary={
                                <>
                                    3. In the Repository section:
                                    <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                                        <li>Use the 'Refresh All' button to reload repositories.</li>
                                        <li>Utilize the Search feature to find specific repositories.</li>
                                    </ul>
                                </>
                            }
                        />
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                        <ListItemText primary="4. Explore each option in the Drawer menu to understand its functionality." />
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                        <ListItemText primary="5. When finished, click 'Logout' to sign out of the application." />
                    </ListItem>
                </List>
            </Box>

            <Divider sx={{ marginY: 1 }} />

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold" }}>
                Steps to Run the Project locally
            </Typography>
            <Typography variant="body1" align="left" color="textSecondary">
                Follow these steps to get the project up and running on your local machine:
            </Typography>
            <List>
                <ListItem sx={{ padding: "4px 0" }}>
                    <ListItemText primary="1. Clone the repository:" secondary="git clone https://github.com/your-repo/project.git" />
                </ListItem>
                <ListItem sx={{ padding: "4px 0" }}>
                    <ListItemText primary="2. Navigate to the project directory:" secondary="cd project" />
                </ListItem>
                <ListItem sx={{ padding: "4px 0" }}>
                    <ListItemText primary="3. Install dependencies:" secondary="npm install or yarn install" />
                </ListItem>
                <ListItem sx={{ padding: "4px 0" }}>
                    <ListItemText primary="4. Start the development server:" secondary="npm start or yarn start" />
                </ListItem>
                <ListItem sx={{ padding: "4px 0" }}>
                    <ListItemText primary="5. Open the application in your browser:" secondary="Visit http://localhost:3000" />
                </ListItem>
            </List>

            <Divider sx={{ marginY: 1 }} />

            <Box>
                <Typography variant="h5">
                    Additional Notes
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 1 }}>
                    Ensure all dependencies are installed correctly. If you encounter errors, check the logs for troubleshooting. Feel free to contribute by submitting a pull request or reporting issues in the repository.
                </Typography>
            </Box>

            <Divider sx={{ marginY: 1 }} />

            <Typography variant="body2" align="center" color="textSecondary">
                &copy; 2024 CodeAnt AI. All rights reserved.
            </Typography>
        </>
    );
};

export default HowtoUse;
