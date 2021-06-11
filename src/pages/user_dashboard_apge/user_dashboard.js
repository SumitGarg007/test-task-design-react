import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BrushIcon from "@material-ui/icons/Brush";
import LayersIcon from "@material-ui/icons/Layers";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SendIcon from "@material-ui/icons/Send";
import PollIcon from "@material-ui/icons/Poll";
import StorageIcon from "@material-ui/icons/Storage";
import PowerIcon from "@material-ui/icons/Power";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Popover from "@material-ui/core/Popover";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
    height: "500px",
    background: "#f3f3f3",
    margin: "16px",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
  },
  {
    id: "cato",
    name: "Little Cato",
  },
  {
    id: "kvn",
    name: "KVN",
  },
  {
    id: "mooncake",
    name: "Mooncake",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
  },
];

export default function UserDashboard() {
  const settings = {
    dots: false,
    arrow: true,
    slidesToShow: 3,
  };

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

  const [spacing, setSpacing] = React.useState(2);

  const [age, setAge] = React.useState("");

  const [anchorEp, setAnchorEp] = React.useState(null);
  const [anchorEp2, setAnchorEp2] = React.useState(null);
  const [anchorEp3, setAnchorEp3] = React.useState(null);
  const [anchorEp4, setAnchorEp4] = React.useState(null);
  const [anchorEp5, setAnchorEp5] = React.useState(null);
  const [anchorEp6, setAnchorEp6] = React.useState(null);
  const [anchorEp7, setAnchorEp7] = React.useState(null);

  const popOpen = (event) => {
    setAnchorEp(event.currentTarget);
  };

  const popClose = () => {
    setAnchorEp(null);
  };

  const popOpen2 = (event) => {
    setAnchorEp2(event.currentTarget);
  };

  const popClose2 = () => {
    setAnchorEp2(null);
  };

  const popOpen3 = (event) => {
    setAnchorEp3(event.currentTarget);
  };

  const popClose3 = () => {
    setAnchorEp3(null);
  };

  const popOpen4 = (event) => {
    setAnchorEp4(event.currentTarget);
  };

  const popClose4 = () => {
    setAnchorEp4(null);
  };

  const popOpen5 = (event) => {
    setAnchorEp5(event.currentTarget);
  };

  const popClose5 = () => {
    setAnchorEp5(null);
  };

  const popOpen6 = (event) => {
    setAnchorEp6(event.currentTarget);
  };

  const popClose6 = () => {
    setAnchorEp6(null);
  };

  const popOpen7 = (event) => {
    setAnchorEp7(event.currentTarget);
  };

  const popClose7 = () => {
    setAnchorEp7(null);
  };

  const open1 = Boolean(anchorEp);
  const id = open1 ? "simple-popover" : undefined;

  const open2 = Boolean(anchorEp2);
  const popUp2 = open2 ? "simple-popover2" : undefined;

  const open3 = Boolean(anchorEp3);
  const popUp3 = open3 ? "simple-popover3" : undefined;

  const open4 = Boolean(anchorEp4);
  const popUp4 = open4 ? "simple-popover4" : undefined;

  const open5 = Boolean(anchorEp5);
  const popUp5 = open5 ? "simple-popover5" : undefined;

  const open6 = Boolean(anchorEp6);
  const popUp6 = open6 ? "simple-popover6" : undefined;

  const open7 = Boolean(anchorEp7);
  const popUp7 = open7 ? "simple-popover7" : undefined;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}

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
                  <Link to="/createProject">
                    <MenuItem className="app-option">
                      <AddCircleIcon /> Create new project
                    </MenuItem>
                  </Link>
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
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <div id="top-bar">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          {/* Design Button */}
          <BottomNavigationAction
            aria-describedby="popUp"
            label="Design"
            icon={<BrushIcon />}
            onClick={popOpen}
          />
          {/* Design Button */}

          {/* Color fonts popup */}
          <Popover
            id="popUp"
            open={open1}
            anchorEl={anchorEp}
            onClose={popClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <BrushIcon /> Design
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Fonts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>
          {/* Color fonts popup */}
          {/* Layout  */}
          <BottomNavigationAction
            label="Layout"
            icon={<LayersIcon />}
            aria-describedby={popUp3}
            onClick={popOpen3}
          />

          <Popover
            id={popUp3}
            open={open3}
            anchorEl={anchorEp3}
            onClose={popClose3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <LayersIcon /> Layout
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    Components
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                      {(provided) => (
                        <ul
                          className="characters"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {characters.map(({ id, name, thumb }, index) => {
                            return (
                              <Draggable
                                key={id}
                                draggableId={id}
                                index={index}
                              >
                                {(provided) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <div className="characters-thumb">
                                      <img src={thumb} alt={`${name} Thumb`} />
                                    </div>
                                    <p>{name}</p>
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}
                          {/* {provided.placeholder} */}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>

          {/* Layout */}

          {/* Settings */}

          <BottomNavigationAction
            label="Setting"
            icon={<SettingsIcon />}
            aria-describedby={popUp4}
            onClick={popOpen4}
          />
          <Popover
            id={popUp4}
            open={open4}
            anchorEl={anchorEp4}
            onClose={popClose4}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <SettingsIcon /> Setting
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    App Settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Display Settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>

          {/* Settings */}

          <BottomNavigationAction label="Preview" icon={<VisibilityIcon />} />
          <BottomNavigationAction label="Publish" icon={<SendIcon />} />
        </BottomNavigation>
      </div>

      {/* screen section */}
      <Container fixed>
        <Grid container spacing={3}>
          <div className="container2">
            <Slider {...settings}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                      {(provided) => (
                        <ul
                          className="characters"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>xs</Paper>
              </Grid>
            </Slider>
          </div>
        </Grid>
      </Container>
      {/* screen section */}

      <div id="bottom-bar">
        <BottomNavigation
          value={toggle}
          onChange={(event, newValue) => {
            settoggle(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Anylitics"
            icon={<PollIcon />}
            aria-describedby={popUp2}
            onClick={popOpen2}
          />
          {/* Anylitics */}
          <Popover
            id={popUp2}
            open={open2}
            anchorEl={anchorEp2}
            onClose={popClose2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <PollIcon /> Anylitics
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    Active users
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Total Signup
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>
          {/* Anylitics */}
          {/* Data */}
          <BottomNavigationAction
            label="Data"
            icon={<StorageIcon />}
            aria-describedby={popUp5}
            onClick={popOpen5}
          />

          <Popover
            id={popUp5}
            open={open5}
            anchorEl={anchorEp5}
            onClose={popClose5}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <StorageIcon /> Data
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>

          {/* Data */}
          {/* Plugin */}
          <BottomNavigationAction
            label="Api's & plugin"
            icon={<PowerIcon />}
            aria-describedby={popUp6}
            onClick={popOpen6}
          />
          <Popover
            id={popUp6}
            open={open6}
            anchorEl={anchorEp6}
            onClose={popClose6}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <PowerIcon /> Api's & Plugin
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>
          {/* Plugin */}
          {/* Marketplace */}
          <BottomNavigationAction
            label="Marketplace"
            icon={<ShoppingBasketIcon />}
            aria-describedby={popUp7}
            onClick={popOpen7}
          />
          <Popover
            id={popUp7}
            open={open7}
            anchorEl={anchorEp7}
            onClose={popClose7}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="color-accord">
              <Typography variant="h5" gutterBottom>
                <ShoppingBasketIcon /> Marketplace
              </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange2("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange2("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Popover>

          {/* Marketplace */}
        </BottomNavigation>
      </div>
    </div>
  );
}
