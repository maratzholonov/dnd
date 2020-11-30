import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Wrapper from "./components/Wrapper";
import TopBar from "./components/TopBar";

const useStyels = makeStyles((theme) => ({
   root: {
      background: "#e6f2ff",
   },
}));

export default function App() {
   const classes = useStyels();

   return (
      <div className={classes.root}>
         <TopBar />
         <Wrapper />
      </div>
   );
}
