import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'

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




const WeightSelectionInput = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        weight: props.weight,
        age: props.age,
        growth: props.growth,
    });

    const sendData = () => {
      props.dispatch({
        type: 'WEIGHT',
        payload: values.weight,
      })
    }

    const changeWeight = e => {
      setValues({weight: e.target.value})
    }

    useEffect(() => {
      sendData();
    }, [values]);

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <Input
            id="adornment-weight"
            value={values.weight}
            type='number'
            onChange={changeWeight}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="weight-helper-text"
            inputProps={{
                'aria-label': 'weight',
            }}
            />
            <FormHelperText id="weight-helper-text">Waga</FormHelperText>
        </FormControl>
    )
}

const mapStateToProps = (values) => {
  return {
    weight: values.weight,
  }
}

export default connect(mapStateToProps)(WeightSelectionInput)