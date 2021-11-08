import React from "react";
import Box from "@mui/material/Box";
import ScheduledAppointments from "./components/ScheduledAppointments";
import NavBar from "./components/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewAppointment from "./components/NewAppointment";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import UserContext from "./UserContext";

const users = [
  {
    id: 1,
    name: "John Newman",
    gender: "male",
    email: "john@email.com",
    phone: "9234234234",
    address: "Kathmandu",
    message: "Lorem Ipsum Lorem",
    time: "9:00 am-9:30 am",
  },
  {
    id: 2,
    name: "Jane Doe",
    gender: "female",
    email: "jane@email.com",
    phone: "9234234234",
    address: "Kathmandu",
    message: "Lorem Ipsum Lorem",
    time: "9:00 am-9:30 am",
  },
  {
    id: 3,
    name: "Jimmy Sparks",
    gender: "male",
    email: "jimmy@email.com",
    phone: "9234234234",
    address: "Pokhara",
    message: "Loan Request of Nrs 5,000",
    time: "9:00 am-9:30 am",
  },
  {
    id: 4,
    name: "Mc'Lovin",
    gender: "male",
    email: "john@email.com",
    phone: "9234234234",
    address: "Kathmandu",
    message: "Loan Request of NRS 10,0000",
    time: "9:00 am-9:30 am",
  },
  {
    id: 5,
    name: "Cheesecake",
    gender: "male",
    email: "john@email.com",
    phone: "9234234234",
    address: "Kathmandu",
    message: "Loan Request of NRS 10,0000",
    time: "10:00 am-10:30 am",
  },
];

function App() {
  const [user, setUser] = React.useState(users);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={theme}>
          <Router>
            <NavBar />
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route exact path="/" element={<ScheduledAppointments />} />
                <Route
                  exact
                  path="/new-appointment"
                  element={<NewAppointment />}
                />
              </Routes>
            </Box>
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
