import {
  Card,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Radio,
  Stack,
  Container,
  Button,
  Checkbox,
} from "@mui/material";
import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import UserContext from "../UserContext";
import { useForm, } from "react-hook-form";

const timeOptions = [
  "9:00 am-9:30 am",
  "9:30 am-10:00 am",
  "10:00 am-10:30 am",
  "10:30 am-11:00 am",
  "11:00 am-11:30 am",
  "11:30 am-12:00 am",
  "12:00 pm-12:30 pm",
  "12:30 pm-1:00 pm",
  "1:00 pm-1:30 pm",
  "1:30 pm-2:00 pm",
  "2:00 pm-2:30 pm",
  "2:30 pm-3:00 pm",
  "3:00 pm-3:30 pm",
  "3:30 pm-4:00 pm",
  "4:00 pm-4:30 pm",
  "4:30 pm-5 pm",
];

const locationOptions = [
  "Baneshwor",
  "Chabahil",
  "Thamel",
  "Pul Chowk",
  "Hal Chowk",
  "Indra Chowk ",
];

const AppointmentForm = () => {
  const { user, setUser } = React.useContext(UserContext);
  const [timeSelect, setTimeSelect] = React.useState({ timeOptions });
  const [checked, setChecked] = React.useState(true);
  const [locationSelect, setLocationSelect] = React.useState({
    locationOptions,
  });
  const handleTimeSelect = (e) => {
    setTimeSelect(e);
  };
  const handleLocationSelect = (e) => {
    setLocationSelect(e);
  };
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const addUser = (value) => {
    setUser([...user, value]);

    console.log(value);
  };

  // React Hooks Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "John",
      phone: "000-000-0000",
      email: "email@email.com",
      address: "123 Main St",
      message: "Drop your message here...",
      time: "",
    },
  });

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: 800, p: 2 }}>
          <form onSubmit={handleSubmit(addUser)}>
            <Stack spacing={2}>
              <TextField
                name="name"
                label="Name"
                type="text"
                fullWidth
                size="small"
                error={!!errors.name}
                {...register("name", { required: true })}
              />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
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
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <TextField
                name="email"
                label="Email Address"
                fullWidth
                size="small"
                error={!!errors.email}
                {...register("email", { required: true })}
              />
              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                size="small"
                error={!!errors.phone}
                {...register("phone", { pattern: /^\d\d\d-\d\d\d-\d\d\d\d$/ })}
              />
              <TextField
                name="address"
                label="Address"
                fullWidth
                size="small"
                error={!!errors.address}
                {...register("address", { required: true })}
              />
              <Dropdown
                options={timeOptions}
                onChange={handleTimeSelect}
                value={timeSelect.value}
                placeholder="Select a time slot"
              />
              <Dropdown
                placeholder="Select a Location"
                options={locationOptions}
                onChange={handleLocationSelect}
                value={locationSelect.value}
              />
              <TextField
                label="Message"
                placeholder="Enter your message"
                multiline
                error={!!errors.message}
                {...register("message", { required: true })}
              />

              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChecked} />
                }
                label="Please agree to our terms and conditions before confirming."
              />

              {!checked ? (
                true
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!!errors.phone}
                >
                  Book Appointment
                </Button>
              )}
            </Stack>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export default AppointmentForm;
