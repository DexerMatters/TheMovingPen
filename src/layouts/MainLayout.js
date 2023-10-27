import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import { Book, LocalActivity, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { pageMap } from "../utils/map";
import { HideOnScroll } from "../utils/layout";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: "white",
      flexGrow: 1,
      display: "flex",
    },
  };
});

const theme = createTheme({
  typography: {
    cardButton: {
      color: "blue",
    },
  },
  palette: {
    primary: {
      main: brown[800],
      default: brown[800],
      contrastText: brown[50],
    },
    secondary: {
      main: brown[600],
    },
  },
});

export default function MainLayout({ children }) {
  const location = useLocation();
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const handleTabValue = (env, val) => setTabValue(val);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        {/*ActionBar */}
        <HideOnScroll>
          <AppBar color="primary">
            <Toolbar>
              <Grid container>
                <Grid item xs={11.5} mt={2}>
                  <Breadcrumbs color={theme.palette.primary}>
                    {location.pathname === "/" ? (
                      <Typography variant="h5" mb={3}>
                        The Moving Pen
                      </Typography>
                    ) : (
                      location.pathname.split("/").map((val, i, arr) => (
                        <Link
                          href={arr.slice(0, i).join("/")}
                          color={arr.length - 1 === i ? brown[50] : brown[200]}
                          variant="h5"
                          underline="hover"
                        >
                          {pageMap[val]}
                        </Link>
                      ))
                    )}
                  </Breadcrumbs>
                </Grid>
                <Grid item xs={"auto"}>
                  <IconButton>
                    <Menu sx={{ color: "white" }}></Menu>
                  </IconButton>
                </Grid>
                {location.pathname === "/profile" && (
                  <Grid item xs={12}>
                    <Tabs
                      value={tabValue}
                      onChange={handleTabValue}
                      textColor={theme.palette.primary.contrastText}
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: theme.palette.primary.contrastText,
                        },
                      }}
                    >
                      <Tab
                        label={"主页"}
                        icon={<Book />}
                        iconPosition="start"
                      />
                      <Tab
                        label={"动态"}
                        icon={<LocalActivity />}
                        iconPosition="start"
                      />
                      <Tab
                        label={"作品"}
                        icon={<LocalActivity />}
                        iconPosition="start"
                      />
                    </Tabs>
                  </Grid>
                )}
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />

        {/*Pages */}
        <div className={classes.root}>{children}</div>
      </Box>
    </ThemeProvider>
  );
}
