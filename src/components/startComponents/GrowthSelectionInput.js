import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'
import { sendGrowth } from '../../redux/actions/actionCreators'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',

    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis: 120,
    },
  }));


const GrowthSelectionInput = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        growth: props.growth,
    });

    // const sendData = () => {
    //   props.dispatch({
    //     type: 'GROWTH',
    //     payload: values.growth
    //   })
    // }

    const changegrowth = e => {
      setValues({growth: e.target.value})
    }

    useEffect(() => {
      //sendData();
      props.sendGrowth(values.growth)
    }, [values]);

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <Input
            id="adornment-growth"
            value={values.growth}
            type='number'
            onChange={changegrowth}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            aria-describedby="growth-helper-text"
            inputProps={{
                'aria-label': 'growth',
            }}
            />
            <FormHelperText id="growth-helper-text">Wzrost</FormHelperText>
        </FormControl>
    )
}

const mapStateToProps = (values) => {
  return {
    growth: values.profileData.growth,
  }
}

const mapDisptachToProps = {
  sendGrowth,
}

export default connect(mapStateToProps, mapDisptachToProps)(GrowthSelectionInput)