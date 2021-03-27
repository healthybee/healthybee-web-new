import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Header from "./subscription_forms/Header";
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import {
  mealpref,
  fitnessoptions,
  dietpref,
  meals,
  mealduration,
  physicalactivity
} from "../../../constants/constants";
import {
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Grid
} from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import ButtonsResult from "./subscription_forms/ButtonResult";
import "./subscription.css";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiRadio: {
      root: {
        color: 'white',
      },
      colorSecondary: {
        '&$checked': {
          color: 'white',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 0
  }
}));

const defaultValues = {
  Name: "",
  Phoneno: "",
  Age: "",
  Weight: "",
  PhysicalActivity: { value: "", label: "" },
  MealPref: { value: "veg", label: "Veg" },
  FitnessOption: { value: "weightloss", label: "Weight Loss" },
  DietPref: { value: "keto", label: "Keto" },
  Meals: { value: "breakfast", label: "Breakfast" },
  MealDuration: { value: "15", label: "15" },
  RadioGroup: ""
};

function Subscription(props) {
  const { handleSubmit, register, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit((data) => setData(data))} className="form">
        <Header/>
        <Grid container xs={12} spacing={3} className={classes.container}>
          <Grid item xs={12} className="formsectionheading"><section><label>Fitness Goal:</label></section></Grid>
            <Grid item xs={6}>
            <section>
              <label>Fitness Goal</label>
              <Controller
                as={ReactSelect}
                options={fitnessoptions}
                name="FitnessOption"
                isClearable
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Diet Preference</label>
              <Controller
                as={ReactSelect}
                options={dietpref}
                name="DietPref"
                isClearable
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Meal Preference</label>
              <Controller
                as={ReactSelect}
                options={mealpref}
                name="MealPref"
                isClearable
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Meals</label>
              <Controller
                as={ReactSelect}
                options={meals}
                name="Meals"
                isClearable
                isMulti
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Meal Duration</label>
              <Controller
                as={ReactSelect}
                options={mealduration}
                name="MealDuration"
                isClearable
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Start Date</label>
              <Controller
                as={ReactDatePicker}
                control={control}
                valueName="selected" // DateSelect value's name is selected
                onChange={([selected]) => selected}
                name="ReactDatepicker"
                className="input"
                placeholderText="Select date"
              />
            </section>
            </Grid>

          <Grid item xs={12} className="formsectionheading"><section><label>Customer Details:</label></section></Grid>
            <Grid item xs={6}>
            <section>
              <label>Name:</label>
              <input name="Name" className="input" ref={register} />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Phone No.:</label>
              <input name="Phoneno" className="input" ref={register} />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Age:</label>
              <input name="Age" className="input" ref={register} />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Gender: </label>
              <Controller
                as={
                  <RadioGroup aria-label="gender">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                }
                name="RadioGroup"
                control={control}
              />
            </section>
            </Grid>
            <Grid item xs={6}>
          <section>
            <label>Weight:</label>
            <input name="Weight" className="input" ref={register} />
          </section>
          </Grid>
            <Grid item xs={6}>
          <section>
            <label>Physical Activity</label>
            <Controller
              as={ReactSelect}
              options={physicalactivity}
              name="PhysicalActivity"
              isClearable
              control={control}
            />
          </section>
          </Grid>
          
          <Grid item xs={12} className="formsectionheading"> <section><label>Address:</label></section> </Grid>
            <Grid item xs={6}>
          <section>
            <label>Building & Flat No.:</label>
            <input name="line0" className="input" ref={register} />
          </section>
          </Grid>
            <Grid item xs={6}>
            <section>
              <label>Line1:</label>
              <input name="line1" className="input" ref={register} />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Line2:</label>
              <input name="line2" className="input" ref={register} />
            </section>
            </Grid>
            <Grid item xs={6}>
            <section>
              <label>Pin Code:</label>
              <input name="pincode" className="input" ref={register} />
            </section>
            </Grid>
        </Grid>
        <ButtonsResult {...{ data, reset, defaultValues }} />
      </form>
    </ThemeProvider>
  );
}

export default (Subscription);
