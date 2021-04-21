import React from "react";
import { useFormContext } from "react-hook-form";
import _ from "lodash";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FormOne, FormTwo, FormThree, FormFour } from "./Forms";

function getSteps() {
  return ["One", "Two", "Three", "Four"];
}

function getStepContent(step, formContent) {
  switch (step) {
    case 0:
      return <FormOne {...{ formContent }} />;
    case 1:
      return <FormTwo {...{ formContent }} />;
    case 2:
      return <FormThree {...{ formContent }} />;
    case 3:
      return <FormFour {...{ formContent }} />;
    default:
      return "Unknown step";
  }
}

export const FormStepper = () => {
  const { watch, errors } = useFormContext();
  const [activeStep, setActiveStep] = React.useState(0);
  const [compiledForm, setCompiledForm] = React.useState({});
  const steps = getSteps();
  const form = watch();

  const handleNext = () => {
    let canContinue = true;

    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: form });
        canContinue = true;
        break;
      case 1:
        setCompiledForm({ ...compiledForm, two: form });
        canContinue = true;
        break;
      case 2:
          setCompiledForm({ ...compiledForm, three: form });
          canContinue = true;
          break;
      case 3:
        setCompiledForm({ ...compiledForm, four: form });
        canContinue = handleSubmit({ ...compiledForm, four: form });
        break;
      default:
        return "not a valid step";
    }
    if (canContinue) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
      switch (activeStep) {
        case 1:
          setCompiledForm({ ...compiledForm, two: form });
          break;
        case 2:
          setCompiledForm({ ...compiledForm, three: form });
          break;
        case 3:
          setCompiledForm({ ...compiledForm, four: form });
          break;
        default:
          return "not a valid step";
      }
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompiledForm({});
  };

  const handleSubmit = form => {
    if (_.isEmpty(errors)) {
      console.log("submit", form);
    }
  };

  return (
    <Grid container spacing={3} xs={12} className="subscriptionFormArea">
      <Grid item xs={12} md={6} className="infoSection">
        {/* <Paper elevation={3}>     
        <img src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`} style={{width:'100%', height:'auto'}} />
        </Paper> */}
      </Grid>
      <Grid item xs={12} md={6}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      <Grid item xs={12}>
        {activeStep === steps.length ? (
          <div>
            <>
              <Typography>Completed</Typography>
              <Button onClick={handleReset}>Close</Button>
            </>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, compiledForm)}
            <div>
              <Button onClick={handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </Grid>
      </Grid>
    </Grid>
  );
};
