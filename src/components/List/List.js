import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Droppable } from "react-beautiful-dnd";

import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";

const useStyle = makeStyles((theme) => {
   return {
      root: {
         width: "300px",
         background: "#fff",
         marginLeft: theme.spacing(1),
      },
      cardContainer: {
         marginTop: theme.spacing(4),
      },
   };
});

export default function List({ list }) {
   const classes = useStyle();
   return (
      <div>
         <Paper className={classes.root}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />

            <Droppable droppableId={list.id}>
               {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
                     {list.cards.map((card, index) => (
                        <Card key={card.id} card={card} index={index} />
                     ))}
                     {provided.placeholder}
                  </div>
               )}
            </Droppable>

            <InputContainer listId={list.id} type="card" />
         </Paper>
      </div>
   );
}
