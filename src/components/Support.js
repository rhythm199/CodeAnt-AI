import React, { } from "react";
import { CardContent, Typography, IconButton, Box, Link } from "@mui/material";
import { GitHub, LinkedIn, Email, } from "@mui/icons-material";

const ContactPage = () => {

    return (
        <CardContent>
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
                Reach out to me...
            </Typography>

            {/* Name */}
            <Typography variant="h6">Name: Rhythm Shukla</Typography>

            {/* Gmail */}
            <Typography variant="body1" color="textSecondary">Email: <Link href="mailto:rhythmshukla678@gmail.com">rhythmshukla678@gmail.com</Link></Typography>

            {/* GitHub */}
            <Typography variant="body1" color="textSecondary">
                GitHub: <Link href="https://github.com/rhythm199" target="_blank">https://github.com/rhythm199</Link>
            </Typography>

            {/* LinkedIn */}
            <Typography variant="body1" color="textSecondary">
                LinkedIn: <Link href="https://www.linkedin.com/in/rhythm-shukla-938090174/" target="_blank">linkedin.com/in/rhythm-shukla-938090174/</Link>
            </Typography>

            {/* Copyright */}
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                &copy; 2024 Rhythm Shukla. All rights reserved.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton color="primary" href="https://github.com/rhythm199" target="_blank">
                    <GitHub />
                </IconButton>
                <IconButton color="primary" href="https://www.linkedin.com/in/rhythm-shukla-938090174/" target="_blank">
                    <LinkedIn />
                </IconButton>
                <IconButton color="primary" href="mailto:rhythmshukla678@gmail.com">
                    <Email />
                </IconButton>
            </Box>
        </CardContent>
    );
};

export default ContactPage;
