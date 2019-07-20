import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import GenderSelection from './GenderSelection';
import styled from 'styled-components'
import AgeSelection from './AgeSelectionInput';

const startSteps = [
  {
    startComponent: <GenderSelection />
  },
  {
    startComponent: <AgeSelection />
  },
  {
    startComponent: <GenderSelection />
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    //flexGrow: 1,
    height: '90%',
  },
  img: {
    height: '100%',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

const StepperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = startSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <StepperWrapper className={classes.root}>
        {startSteps[activeStep].startComponent}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Dalej
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Wstecz
          </Button>
        }
      />
    </StepperWrapper>
  );
}
