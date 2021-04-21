import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
//import Header from "./subscription_forms/Header";
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import {
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Grid
} from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import {
  mealpref,
  fitnessoptions,
  dietpref,
  meals,
  mealduration,
  physicalactivity,
  area
} from "../../../constants/constants";
//import "./subscription.css";

export const FormOne = ({ formContent }) => {
  const methods = useFormContext();
  const { reset, register, control } = methods;

  useEffect(() => {
    reset({ ...formContent.one }, { errors: true });
  }, []);

  return (
    <form>
      <Grid item xs={12} className="formsectionheading">
        <section>
          <label>Fitness Goal:</label>
        </section>
      </Grid>
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
            as={<ReactSelect placeholder="All" options={dietpref} />}
            name="DietPref"
            isClearable
            control={control}
            onChange={([selected]) => {
              return { value: selected };
            }}
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
                control={control}
                name="ReactDatepicker"
                render={(props) => (
                  <ReactDatePicker
                    className="input"
                    placeholderText="Select date"
                    onChange={(e) => props.onChange(e)}
                    selected={props.value}
                  />
                )}
              />
            </section>
          </Grid>
    </form>
  );
};

export const FormTwo = ({ formContent }) => {
  const methods = useFormContext();
  const { reset, register, control } = methods;

  useEffect(() => {
    reset({ ...formContent.two }, { errors: true });
  }, []);

  return (
    <form>
      <Grid item xs={12} className="formsectionheading">
        <section>
          <label>Customer Details:</label>
        </section>
      </Grid>
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
    </form>
  );
};

export const FormThree = ({ formContent }) => {
  const methods = useFormContext();
  const { reset, register, control } = methods;

  useEffect(() => {
    reset({ ...formContent.three }, { errors: true });
  }, []);

  return (
    <form>
      <Grid item xs={12} className="formsectionheading">
        <section>
          <label>Address</label>
        </section>
      </Grid>
      <Grid item xs={6}>
        <section>
          <label>Address:</label>
          <input name="Address" className="input" ref={register} />
        </section>
      </Grid>
      <Grid item xs={6}>
        <section>
          <label>Pin Code:</label>
          <input name="Pin" className="input" ref={register} />
        </section>
      </Grid>
      <Grid item xs={6}>
        <section>
          <label>Area</label>
          <Controller
            as={ReactSelect}
            options={area}
            name="area"
            isClearable
            control={control}
          />
        </section>
      </Grid>
    </form>
  );
};

export const FormFour = ({ formContent }) => {
  const methods = useFormContext();
  const { reset, register, control } = methods;

  useEffect(() => {
    reset({ ...formContent.four }, { errors: true });
  }, []);

  return (
    <form>
      <Grid item xs={12} className="formsectionheading">
        <section>
          <label>Summary</label>
        </section>
      </Grid>
      <Grid item xs={6}>
        <section>
          <label>Plan Summary:</label>
        </section>
      </Grid>
      <Grid item xs={6}>
        <section>
          <ul>
            <li>Goal</li>
            <li>No. of days</li>
            <li>Preference</li>
            <li>Price</li>
            <li>Price per meal</li>
            {register}
          </ul>
        </section>
      </Grid>
  </form>
  );
};
