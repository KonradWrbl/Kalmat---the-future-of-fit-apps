import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

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


const AgeSelectionInput = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
    });

    const changeAge = e => {
      setValues({age: e.target.value})
    }

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
            <Input
            id="adornment-age"
            value={values.age}
            type='number'
            onChange={changeAge}
            endAdornment={<InputAdornment position="end">lat</InputAdornment>}
            aria-describedby="age-helper-text"
            inputProps={{
                'aria-label': 'age',
            }}
            />
            <FormHelperText id="age-helper-text">Wiek</FormHelperText>
        </FormControl>
    )
}

export default AgeSelectionInput