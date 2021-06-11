import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import placeholder from "../../img/placeholder-image.png";
import google from "../../img/google.svg";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <div className="app-b">
        <AppBar position="static" id="head">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="sections">
        <Container fixed>
          <Grid container spacing={3} direction="row">
            <Grid item md={8}>
              <div className="img-section">
                <img
                  src={placeholder}
                  className="img-fluid"
                  alt="illustrator"
                />
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="login-section">
                <Typography variant="h4" gutterBottom>
                  Welcome
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
                <form className="login-form" noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    type="email"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                  />
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                    className="for-got"
                  >
                    Forgot Password
                  </Link>
                  {/* testing */}
                  <RouteLink to="/userDashboard">
                    <Button
                      variant="contained"
                      color="primary"
                      className="login-btn"
                    >
                      Login
                    </Button>
                  </RouteLink>
                  {/* testing */}
                  <Button
                    variant="outlined"
                    color="primary"
                    className="sign-btn"
                  >
                    Create Account
                  </Button>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className="soci-text"
                  >
                    Or you can join with
                  </Typography>
                  <div className="social-icon">
                    <IconButton aria-label="delete" className="g-btn">
                      <img src={google} className="img-fluid" alt="icon" />
                    </IconButton>
                    <IconButton aria-label="delete" className="fb-btn">
                      <FacebookIcon />
                    </IconButton>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
