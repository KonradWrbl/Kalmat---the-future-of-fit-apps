import React from 'react';
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


const HightSelectionInput = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        hight: '',
    });

    const sendData = () => {
      props.dispatch({
        type: 'HIGHT',
        payload: values.hight
      })
    }

    const changeHight = e => {
      setValues({hight: e.target.value})
      sendData();
    }

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <Input
            id="adornment-hight"
            value={values.hight}
            type='number'
            onChange={changeHight}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            aria-describedby="hight-helper-text"
            inputProps={{
                'aria-label': 'hight',
            }}
            />
            <FormHelperText id="hight-helper-text">Wzrost</FormHelperText>
        </FormControl>
    )
}

const mapStateToProps = (values) => {
  return {
    hight: values.hight,
  }
}

export default connect(mapStateToProps)(HightSelectionInput)