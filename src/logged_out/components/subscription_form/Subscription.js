import React, { useEffect } from "react";
import { FormStepper } from "./Stepper";
import { useForm, FormProvider } from "react-hook-form";
import './subsForm.css';

export default function App() {
  const methods = useForm({ mode: "onBlur" });
  const { watch, errors } = methods;

  useEffect(() => {
    console.log("FORM CONTEXT", watch(), errors);
  }, [watch, errors]);

  return (
    <FormProvider {...methods}>
      <FormStepper />
    </FormProvider>
  );
}
