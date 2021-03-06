import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white'
  }
}));

const Navbar = () => {

  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          {/* <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Search For Books
          </Typography>
        <Button color="inherit"><Link to="/" className={classes.link}>Home</Link></Button>
        <Button color="inherit"><Link to="/saved" className={classes.link}>Saved</Link></Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar