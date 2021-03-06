import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Fit from '@material-ui/icons/DirectionsRun';
import Fastfood from '@material-ui/icons/Fastfood';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { sendBottomMenu } from '../../redux/actions/actionCreators'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const BottomNavigationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`

const BottomMenu = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const sendData = () => {
    props.dispatch({
      type: "BOTTOMMENU",
      payload: value
    })
  }

  useEffect(() => {
    props.sendBottomMenu(value)
    //sendData();
  },[value])

  return (
    <BottomNavigationWrapper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Główna" icon={<Home />} />
        <BottomNavigationAction label="Dieta" icon={<Fastfood/>} />
        <BottomNavigationAction label="Ćwiczenia" icon={<FitnessCenter />} />
      </BottomNavigation>
      {value === 1 ? <Redirect push to="/core/diet" /> : value === 2 ? <Redirect push to="/core/training" /> : <Redirect push to="/core" />}
    </BottomNavigationWrapper>
  );
}

const mapStateToProps = value => {
  return{
    bottomMenuValue: value.profileData.bottomMenuValue
  }
}

const mapDispatchToProps = {
  sendBottomMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu)