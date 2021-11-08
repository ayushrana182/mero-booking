import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UserContext from "../UserContext";


const UserCards = () => {
 const {user, setUser} = React.useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const removeUser = (id) => {
    const newUser = [...user];
    newUser.splice(id, 1);
    setUser(newUser);
    setOpen(false);
    // user.splice(id, 1);
    // setOpen(false);
  };

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      {user.map((user) => (
        <div key={user.id}>
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card raised sx={{ mt: 1, mb: 1 }}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {user.message}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    color="text.secondary"
                  >
                    <Stack direction="row" spacing={2}>
                      <PersonIcon sx={{ mb: 2 }} /> <Typography> {user.name} </Typography> <HomeIcon />
                  <Typography>{user.address} </Typography>    
                    </Stack>
                  </Typography>

                  <Typography
                    variant="caption"
                    display="block"
                    color="text.secondary"
                  >
                    <Stack direction="row" spacing={2}>
                      <AccessTimeIcon /> <Typography>{user.time} </Typography> 
                    </Stack>
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary">
                    Reschedule
                  </Button>
                  {/* Dialog start */}
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle id="alert-dialog-title">
                      {"Cancel Apppointment?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        By Clicking on Confirm you will cancel the appointment.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={removeUser}
                        variant="contained"
                        color="warning"
                      >
                        Confirm
                      </Button>
                      <Button
                        onClick={handleClose}
                        variant="outlined"
                        autoFocus
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* Dialog ends */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
