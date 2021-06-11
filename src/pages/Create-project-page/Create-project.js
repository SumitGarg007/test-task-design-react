import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

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

  control: {
    padding: theme.spacing(2),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Createproject() {
  const [value, setValue] = React.useState(0);
  const [toggle, settoggle] = React.useState(0);

  const classes = useStyles();
  console.log(classes);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  console.log(open);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    setSpacing(Number(event.target.value));
    setAge(event.target.value);
  };

  const handleMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("gv");
    setAnchorEl(null);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange3 = (event) => {
    setSelectedValue(event.target.value);
  };

  const [spacing, setSpacing] = React.useState(2);

  const [age, setAge] = React.useState("");

  return (
    <>
      <div className="app-b">
        <AppBar position="static" id="head">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            {auth && (
              <div className="nav-bar">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    className="text-white"
                  >
                    App Selector
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    onChange={handleChange}
                    label="App Selector"
                    className="app-select"
                  >
                    <MenuItem className="app-option">
                      <AddCircleIcon /> Username
                    </MenuItem>
                    <MenuItem className="app-option">
                      <AddCircleIcon /> Username
                    </MenuItem>
                    <MenuItem className="app-option">
                      <AddCircleIcon /> Username
                    </MenuItem>
                    <MenuItem className="app-option">
                      <AddCircleIcon /> Create new project
                    </MenuItem>
                  </Select>
                </FormControl>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>

      <div className="create-pro">
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Typography variant="h4" gutterBottom>
              New Project
            </Typography>
            <Typography variant="h6" gutterBottom>
              Create a new blank prototype
            </Typography>
            {/* form start */}
            <form className="pro-name" noValidate autoComplete="off">
              <div className="pro-n">
                <TextField id="standard-basic" label="Project name" />
              </div>

              <div className="pro-type">
                <Typography variant="h6" gutterBottom>
                  Project Type
                </Typography>
                {/* <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      value="a"
                      control={<Radio color="primary" />}
                      label="Mobile"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="b"
                      control={<Radio color="primary" />}
                      label="Web"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </FormControl> */}
                <div className="radi mobile">
                  <input type="radio" name="radio" value="a" />
                  <span class="checkmark"></span>
                  <label className="mob-lab">Mobile</label>
                </div>
                <div className="radi web">
                  <input type="radio" name="radio" value="b" />
                  <label className="web-lab">Web</label>
                  <span class="checkmark"></span>
                </div>
              </div>
              <div className="pro-skin">
                <InputLabel htmlFor="select">Screen Size</InputLabel>
                <NativeSelect id="select">
                  <option value="10">iPhone 12 (390 X 844)</option>
                  <option value="20">iPhone 12 Max (428 X 926)</option>
                </NativeSelect>
              </div>
              <div className="pro-btn">
                <Button color="primary" className="pro-can">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" className="pro-cre">
                  Create
                </Button>
              </div>
            </form>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
}
