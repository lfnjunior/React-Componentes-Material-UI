import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Divider from "@material-ui/core/Divider";
import GridSyle from "./grid.style";

export default function GridComponent() {
  const classes = GridSyle();

  const [spacing, setSpacing] = React.useState(10);

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      <h1 className={classes.textCenter}>Espaçamento</h1>
      <div className={classes.section2}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.control}>
              <Grid container>
                <Grid item>
                  <FormLabel>spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={spacing.toString()}
                    onChange={handleChange}
                    row
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
