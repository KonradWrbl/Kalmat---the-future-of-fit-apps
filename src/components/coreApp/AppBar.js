import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import styled from 'styled-components'

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

const AppBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`

const ButtonAppBar = (props) => {
  const classes = useStyles();

  return (
    <AppBarWrapper className={classes.root}>
        <AppBar position="static" color={props.bottomMenuValue === 0 ? 'primary' : 'secondary'}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}> 
              Kalmat
            </Typography>
          </Toolbar>
        </AppBar> ++
    </AppBarWrapper>
  );
}

const mapStateToProps = state => {
  return{
    bottomMenuValue: state.bottomMenuValue
  }
}

export default connect(mapStateToProps)(ButtonAppBar)