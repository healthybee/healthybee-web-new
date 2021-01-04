import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
  },
});

function Testimonial(props) {
  var items = [
    {
      name: "Random Name #1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Random Name #2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Random Name #4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Random Name #5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Random Name #1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
