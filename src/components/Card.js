import React, { useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => {
   return {
      card: {
         padding: theme.spacing(1, 3, 1, 2),
         margin: theme.spacing(1),
         background: "#b3ffe0",
         boxShadow: "0 2px 2px 0 #000",
         height: "40px",
         display: "flex",
         justifyContent: "space-between",
      },
      done: {
         textDecoration: "line-through",
         background: "#ccc",
         padding: theme.spacing(1, 3, 1, 2),
         margin: theme.spacing(1),
         boxShadow: "0 2px 2px 0 #000",
         height: "40px",
         display: "flex",
         justifyContent: "space-between",
      },
   };
});

export default function Card({ card, index }) {
   const [done, setDone] = useState(false);
   const classes = useStyle();
   return (
      <Draggable draggableId={card.id} index={index}>
         {(provided) => (
            <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
               <Paper className={!done ? classes.card : classes.done} onClick={() => setDone(!done)}>
                  {card.title}
                  <i class="fa fa-check" aria-hidden="true"></i>
               </Paper>
            </div>
         )}
      </Draggable>
   );
}
