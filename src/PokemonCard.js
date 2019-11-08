import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  avatar: {
    margin: 1,
    backgroundColor: "white",
    color: "#e61d23"
  },
  card: {
    margin: 15,
    height: 300,
    width: 200,
    backgroundColor: "#e61d23",
    color: "white"
  },
  media: {
    height: 140,
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "#186799",
    color: "white"
  },
  name: {
    padding: 2
  }
});

const PokemonCard = props => {
  const classes = useStyles();
  return (
    <div>
      {props.name ? (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.name}
            />
          </CardActionArea>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Avatar className={classes.avatar}>{props.id}</Avatar>
<<<<<<< HEAD
                {props.name.toUpperCase()}
=======
                <div className={classes.name}>{props.name.toUpperCase()}</div>
>>>>>>> 717930d73842b91294e36405fb52a70ec601ebd3
              </Typography>
            </CardContent>

            <CardActions onClick={() => props.onPokemonSelect(props.pokemon)}>
              <Button
                variant="contained"
                className={classes.button}
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ) : null}
    </div>
  );
};

export default PokemonCard;
