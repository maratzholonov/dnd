import React, { useContext, useState } from "react";
import { Button, fade, IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => {
   return {
      card: {
         width: "280px",
         margin: theme.spacing(0, 1, 1, 1),
         boxShadow: "0 1px 2px 0 #000",
         border: "1px solid #ccc",
      },
      input: {
         margin: theme.spacing(1),
      },
      btnConfirm: {
         background: "#5aac44",
         color: "#fff",
         "&:hover": {
            background: fade("#5aac44", 0.75),
         },
      },
      confirm: {
         margin: theme.spacing(0, 1, 1, 1),
      },
   };
});

export default function InputCard({ setOpen, listId, type }) {
   const classes = useStyle();

   const { addMoreCard, addMoreList } = useContext(storeApi);

   const [title, setTitle] = useState("");

   const handleOnChange = (e) => {
      setTitle(e.target.value);
   };

   const handleBtnConfirm = () => {
      if (type === "card") {
         addMoreCard(title, listId);
         setTitle("");
         setOpen(false);
      } else {
         addMoreList(title);
         setTitle("");
         setOpen(false);
      }
   };

   return (
      <div>
         <div>
            <Paper className={classes.card}>
               <InputBase
                  onChange={handleOnChange}
                  fullWidth
                  inputProps={{ className: classes.input }}
                  placeholder={type === "card" ? "add a card" : "add a list"}
                  value={title}
                  onBlur={() => setOpen(false)}
               />
            </Paper>
         </div>
         <div className={classes.confirm}>
            <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
               {type === "card" ? "Add card " : "Add List"}
            </Button>
            <IconButton onClick={() => setOpen(false)}>
               <ClearIcon />
            </IconButton>
         </div>
      </div>
   );
}
