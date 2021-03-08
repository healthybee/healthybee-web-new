import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  paper: {
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
});

function Testimonial(props) {
  var items = [
    {
      name: "Vishwas Kumar",
      description:
        "Health bee is an amazing outlet for healthy meal.  In this restaurant verities of dishes and Facilities. Yesterday I had visited in this restaurant with my family for dinner. I am very thankful of his staff. Really good behaviour and mannerfull. His food are mouthwatering and very hygiene. I recommend too much.",
    },
    {
      name: "Aditya Mhatre",
      description:
        "HealthyBee is an outlet serving the best and tastiest healthy food items. The quality and taste is very well maintained and balanced.",
    },
    {
      name: "Shivam Varma",
      description:
        "It is one of the best outlet to hangout with friends. The ambience is decent and the staff is co operative.",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} classes={props.classes} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <h2>{props.item.name}</h2>
      <Typography variant="h6" color="textSecondary">
        {props.item.description}
      </Typography>
    </Paper>
  );
}

export default withStyles(styles, { withTheme: true })(Testimonial);
