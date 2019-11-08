import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const TeamBuilderItem = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

<<<<<<< HEAD
  const [currentMoves, setMove] = React.useState([]);

  const handleRemoveItem = move => {
    const moveIndex = currentMoves.indexOf(move);
    setMove(currentMoves.splice(moveIndex + 1, 1));
  };

  console.log(currentMoves);
=======
  const [currentMoves, setMove] = React.useState([])
  
  const handleRemoveItem = (move) => {
    const moveIndex = currentMoves.indexOf(move)
     setMove(currentMoves.splice(moveIndex, 1));
   };

  console.log(currentMoves)
>>>>>>> 717930d73842b91294e36405fb52a70ec601ebd3

  return (
    
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.pokemon.id}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => props.onPokemonDelete(props.pokemon)}
            aria-label="settings"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        }
        title={props.pokemon.name.toUpperCase()}
<<<<<<< HEAD
=======
       
>>>>>>> 717930d73842b91294e36405fb52a70ec601ebd3
      />
      <CardMedia
        className={classes.media}
        image={props.pokemon.sprites.front_default}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Current Moves
          <hr />
          {currentMoves.map(move => (
<<<<<<< HEAD
            <div onClick={() => handleRemoveItem(move)} className="move">
              <Typography name={move}>
                {move.toUpperCase().replace(/-/g, " ")}
              </Typography>
            </div>
          ))}
=======
<div onClick={() => handleRemoveItem(move)} className="move"><Typography name={move}>{move.toUpperCase()}</Typography></div>
                  ))}
>>>>>>> 717930d73842b91294e36405fb52a70ec601ebd3
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Moves:</Typography>
<<<<<<< HEAD
          <Typography>
            {props.pokemon.moves.map(move => (
              <Typography
                className="move"
                onClick={
                  currentMoves.length < 4
                    ? () => setMove(oldArray => [...oldArray, move.move.name])
                    : null
                }
              >
                {move.move.name.toUpperCase().replace(/-/g, " ")}
              </Typography>
            ))}
          </Typography>
=======
        <Typography>{props.pokemon.moves.map(move => (
                    <Typography className="move" onClick={currentMoves.length < 4 ? () => setMove(oldArray => [...oldArray, move.move.name]) : null}>{move.move.name}</Typography>
                  ))}</Typography>
>>>>>>> 717930d73842b91294e36405fb52a70ec601ebd3
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default TeamBuilderItem;
