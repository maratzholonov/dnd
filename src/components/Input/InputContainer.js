import React, { useState } from "react";
import { Collapse, fade, makeStyles, Paper, Typography } from "@material-ui/core";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => {
   return {
      root: {
         width: "300px",
         marginTop: theme.spacing(1),
      },
      addCard: {
         width: "280px",
         height: "40px",
         padding: theme.spacing(1, 1, 1, 1),
         margin: theme.spacing(0, 1, 1, 1),
         background: "#fff",
         boxShadow: "0 1px 2px 0 #000",
         "&:hover": {
            background: fade("#f2f2f2", 0.75),
         },
      },
      typography: {
         textAlign: "center",
         display: "block",
         paddingTop: "4px",
      },
   };
});

export default function InputContainer({ listId, type }) {
   const classes = useStyle();
   const [open, setOpen] = useState(false);
   return (
      <div className={classes.root}>
         <Collapse in={open}>
            <InputCard setOpen={setOpen} listId={listId} type={type} />
         </Collapse>
         <Collapse in={!open}>
            <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
               <Typography className={classes.typography}>{type === "card" ? "" : "+ Add a list..."}</Typography>
            </Paper>
         </Collapse>
      </div>
   );
}
