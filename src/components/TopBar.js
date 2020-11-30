import { AppBar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
   AppBar: {
      background: "none",
   },
}));

export default function TopBar() {
   const classes = useStyles();
   return (
      <div>
         <AppBar position="static" className={classes.AppBar} elevation={0}>
            <h1>Board</h1>
         </AppBar>
      </div>
   );
}
