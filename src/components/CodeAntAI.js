import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Card,  CssBaseline, Grid, Typography } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import GitLabIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import side from '../assets/side.png';

const useStyles = makeStyles({
  root: {
    width: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  statsCard: {
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    minHeight: "70vh",
    width: "700px",
    margin: "auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    "@media (max-width:480px), (max-width:768px), (max-width:1024px), (max-width:1200px)": {
      width: "100% !important", // Overrides the default calc width
      margin: "100px 10px",
      flexBasis: "auto",
    },
  },
  tabs: {
    marginBottom: "30px",
  },
  tabPanel: {
    padding: "20px 0",
    minHeight: "25vh",
  },
  logo: {
    fontWeight: "bold",
    paddingBottom: "20px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "0px 60px 0px 60px",
    color: "#333",
    textTransform: "none",
  },
  footer: {
    textAlign: "center",
    padingTop: "100px",
    fontSize: "12px",
  },
  welcometexts: {
    padding: "10px 10px 32px 10px",
  },
});

const CodeAntAI = ({ handleLogin }) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const colors = ["primary", "primary"];
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
      <CssBaseline />
      <Grid container className={classes.root} columnSpacing={2} rowSpacing={3}>
        {!isMobile && (
          <Grid item className={classes.statsCard} xs={12} sm={6}>
            <img
              style={{
                width: "100%",
                maxHeight: "99vh",
              }}
              src={side}
              alt="side-icon"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <Typography variant="h5" className={classes.welcometexts}>
              <img
                style={{ width: "2.0rem" }}
                src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"
                alt="codeAnt-logo"
              />
              CodeAnt AI
            </Typography>
            <Typography variant="h5" className={classes.logo}>
              <b>Welcome to CodeAnt AI</b>
            </Typography>
            <Tabs
              size="lg"
              aria-label="Bottom Navigation"
              sx={(theme) => ({
                "--joy-shadowChannel": theme.vars.palette.primary[50],
                [`& .${tabClasses.root}`]: {
                  py: 1.5,
                  flex: 1,
                  transition: "0.3s",
                  fontWeight: "lg",
                  fontSize: "md",
                  color: "#fff",
                  [`&.${tabClasses.selected}`]: {
                    backgroundColor: theme.vars.palette.primary[400], // Use primary.p700
                    color: theme.vars.palette.primary.contrastText, // Ensure text is readable
                  },
                  [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                    color: "#000",
                    opacity: 0.7,
                    backgroundColor: "#f5f5f5",
                  },
                },
              })}
              value={index}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.tabs}
            >
              <TabList
                variant="plain"
                size="sm"
                disableUnderline
                sx={{ borderRadius: "sm", p: 0 }}
              >
                <Tab
                  disableIndicator
                  orientation="vertical"
                  {...(index === 0 && { color: colors[0] })}
                >
                  SAAS
                </Tab>
                <Tab
                  disableIndicator
                  orientation="vertical"
                  {...(index === 1 && { color: colors[1] })}
                >
                  Self Hosted
                </Tab>
              </TabList>
            </Tabs>
            <Divider />
            {index === 0 && (
              <div className={classes.tabPanel}>
                <div className={classes.buttons}>
                  <Button
                    onClick={handleLogin}
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "12px",
                    }}
                    variant="outlined"
                    startIcon={<GitLabIcon />}
                  >
                    Sign in with GitHub
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "10px",
                    }}
                    variant="outlined"
                  >
                    <img
                      style={{ width: "1.5rem" }}
                      src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png"
                      alt="bucket-logo"
                    />
                    Sign in with Bitbucket
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "10px",
                    }}
                    variant="outlined"
                  >
                    <img
                      style={{ width: "1.5rem" }}
                      src="https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3029870.png?f=webp&w=256"
                      alt="azure-icon"
                    />
                    Sign in with Azure DevOps
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "10px",
                    }}
                    variant="outlined"
                  >
                    <img
                      style={{ width: "1.5rem" }}
                      src="https://cdn.iconscout.com/icon/free/png-256/free-gitlab-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282507.png?f=webp&w=256"
                      alt="gitLab-icon"
                    />
                    Sign in with GitLab
                  </Button>
                </div>
              </div>
            )}
            {index === 1 && (
              <div className={classes.tabPanel}>
                <div className={classes.buttons}>
                  <Button
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "10px",
                    }}
                    variant="outlined"
                  >
                    <img
                      style={{ width: "1.5rem" }}
                      src="https://cdn.iconscout.com/icon/free/png-256/free-gitlab-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282507.png?f=webp&w=256"
                      alt="gitLab-icon"
                    />
                    Self Hosted GitLab
                  </Button>
                  <Button
                    style={{
                      border: "1px solid #d3d3d3", // Light grey border
                      color: "#333",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      gap: "8px",
                      textTransform: "none",
                      padding: "10px",
                    }}
                    variant="outlined"
                  >
                    <img
                      style={{ width: "1.5rem" }}
                      src="https://static.vecteezy.com/system/resources/thumbnails/002/205/969/small_2x/key-icon-free-vector.jpg"
                      alt="sso-icon"
                    />
                    Sign in with SSO
                  </Button>
                </div>
              </div>
            )}
          </Card>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: "16px",
              paddingBottom: "16px",
              fontSize: "16px",
            }}
          >
            By signing up you agree to the <b>Privacy Policy</b>.
          </Typography>
        </Grid>
      </Grid>
    </Box >
  );
};

export default CodeAntAI;
