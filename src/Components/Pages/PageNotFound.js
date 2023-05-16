import { Button, ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "../CSS/PageNotFound.css";

const theme = createTheme({
  palette: {
    hehe: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});

const PageNotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <p className="not-found-message">404 | Page Not Found!</p>
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="hehe" component={Link} to="/">
            Go Home
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
};

export default PageNotFound;
