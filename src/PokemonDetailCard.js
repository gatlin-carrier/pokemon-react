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
import AddIcon from "@material-ui/icons/Add";

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

const PokedexDetail = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {props.pokemon && props.speciesDetails ? (
        <div>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="pokemon-name" className={classes.avatar}>
                  {props.pokemon.id}
                </Avatar>
              }
              title={props.pokemon.name}
              subheader={props.speciesDetails.data.genera[2].genus}
            />
            <CardMedia
              className={classes.media}
              image={props.pokemon.sprites.front_default}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.speciesDetails.data.flavor_text_entries[1].flavor_text}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                HP: {props.pokemon.stats[5].base_stat}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Attack : {props.pokemon.stats[4].base_stat}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Special Attack : {props.pokemon.stats[2].base_stat}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Defense : {props.pokemon.stats[3].base_stat}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Special Defense : {props.pokemon.stats[1].base_stat}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {" "}
                Speed : {props.pokemon.stats[0].base_stat}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() => props.addPokemonToTeam(props.pokemon)}
                aria-label="add to team"
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="moves"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {props.pokemon.moves.map(move => (
                    <Typography>{move.move.name}</Typography>
                  ))}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default PokedexDetail;
