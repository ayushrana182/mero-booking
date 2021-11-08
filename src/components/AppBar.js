import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, CardMedia } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <CardMedia
            component="img"
            style={{ maxWidth: 120 }}
            image="/static/images/Merobooking.png"
            alt="green iguana"
          />

          <Button variant="outlined" style={{ borderRadius: 20 }}>
            Get Help?
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
