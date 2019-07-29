import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static" color={props.bottomMenuValue ? 'secondary' : 'primary'}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              {props.bottomMenuValue}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Kalmat
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default connect()(ButtonAppBar)