import React from "react";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";

const NewAppointment = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#F3F3F3",
          marginTop: "5px",
        }}
      >
        <Container style={{ display: "flex", justifyContent: "space-around" }}>
          <h3>New Appointment</h3>

          <Button
            variant="contained"
            style={{
              borderRadius: 20,
              width: "20%",
              height: "90%",
              marginTop: 20,
              backgroundColor: "#E2641D",
            }}
            size="small"
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </Container>
        <AppointmentForm />
      </Box>
    </div>
  );
};

export default NewAppointment;
