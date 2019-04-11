import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import SubmitWastage from './Pages/SubmitWastage/SubmitWastage'
import ViewWastage from './Pages/ViewWastage/ViewWastage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Navbar/>
        <main className={classes.layout}>
          <Route exact path='/' component={Home} />
          <Route exact path='/submitwastage' component={SubmitWastage} />
          <Route exact path='/viewwastage' component={ViewWastage} />
        </main>
        <footer className={classNames(classes.footer, classes.layout)}>
          <Grid container spacing={32} justify="space-evenly">
            Change The World - Infosys Hackathon 2019
          </Grid>
        </footer>
      </Router>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);