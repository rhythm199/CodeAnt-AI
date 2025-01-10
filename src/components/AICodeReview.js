import React from "react";
import { Typography, Box, Link, Divider } from "@mui/material";
import { useTheme } from '../context/ThemeContext';

const AICodeReview = () => {
    const { isDarkMode } = useTheme();
    return (
        <>
            <Typography variant="h5" align="left" sx={{ marginBottom: 1, fontWeight: "bold", color: "#1976d2" }}>
                CodeAnt AI Frontend Developer Intern Hiring Assignment
            </Typography>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Overview
            </Typography>
            <Typography variant="body1" align="left" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary", marginBottom: 1 }}>
                CodeAnt AI is a Y Combinator-backed startup revolutionizing the code quality and security industry. By leveraging AI-driven and deterministic fixes, we simplify coding, making it cleaner, safer, and more efficient. Trusted by leading unicorns and supported by top Silicon Valley investors, CodeAnt AI tackles complex problems and pushes the boundaries of innovation.
            </Typography>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Objective
            </Typography>
            <Typography variant="body1" align="left" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary", marginBottom: 1 }}>
                To evaluate candidates ability to code and deliver a functional frontend implementation based on a provided design.
            </Typography>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Deliverables
            </Typography>
            <Box sx={{ marginBottom: 1 }} align="left">
                <ul>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>A fully coded frontend implementation of the design provided in the Figma file</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>The implementation should use ReactJS, HTML, and CSS, adhering to best practices for clean, maintainable, and scalable code</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>A GitHub link to the repository containing the complete code</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Any supporting documentation or instructions for running the project locally.</Typography></li>
                </ul>
            </Box>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Figma Link:
            </Typography>
            <Link href="https://www.figma.com" align="left" target="_blank" sx={{ marginBottom: 1 }}>
                Frontend Developer – CodeAnt Figma Design
            </Link>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Deadline
            </Typography>
            <Typography variant="body1" align="left" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary", marginBottom: 1 }}>
                Candidates are required to submit their completed assignment by 26 December 2024, 11:59 PM.
            </Typography>

            <Typography variant="h6" align="left" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Evaluation Criteria
            </Typography>
            <Box sx={{ marginBottom: 1 }} align="left">
                <ul>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Code Quality: Clean, readable, and maintainable code</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Adherence to Design: Accuracy in implementing the Figma design</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Functionality: Ensuring the frontend components work seamlessly</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Performance: Optimized and responsive UI/UX</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Responsiveness: The design must be responsive across devices and screen sizes</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Creativity and Problem-Solving: Efficient solutions to potential challenges during implementation</Typography></li>
                    <li><Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary" }}>Timeliness: Submission within the stipulated deadline</Typography></li>
                </ul>
            </Box>

            <Divider sx={{ marginBottom: 1 }} />

            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Ready to build the future of code with us? Apply now!
            </Typography>

            <Typography variant="body1" sx={{ color: isDarkMode ? "textPrimary" : "textSecondary", marginBottom: 1 }}>
                If you encounter any issues, please contact us at:
            </Typography>

            <Link href="mailto:utkarsh.panwar@codeant.ai" sx={{ marginBottom: 1 }}>
                utkarsh.panwar@codeant.ai
            </Link>

            <Link href="https://forms.gle/ef1hT8qVL5YXi3ybA" target="_blank" sx={{ marginBottom: 1 }}>
                Apply Here
            </Link>
        </>
    );
};

export default AICodeReview;
