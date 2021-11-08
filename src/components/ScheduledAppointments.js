import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import UserCards from "./Users";
import { useNavigate } from "react-router-dom";

const ScheduledAppointments = () => {
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
          <h3>Scheduled Appointments</h3>

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
            onClick={() => navigate("/new-appointment")}
          >
            Book an Appointment
          </Button>
        </Container>
        <UserCards />
      </Box>
    </div>
  );
};

export default ScheduledAppointments;
