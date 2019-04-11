import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#58c13f',
  },
  toolbarTitle: {
    flex: 1,
  },
});

class Navbar extends React.Component {
    render (){
        const {classes} = this.props; 
        return(
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Waste-Free
                    </Typography>
                    <a href="/submitwastage"><Link to ="/submitwastage"><Button>Submit Trash</Button></Link></a>
                    <a href="/viewwastage"><Link to ="/viewwastage"><Button>View Trash</Button></Link></a>
                    <a href="/login"><Link to ="/login"><Button color="primary" variant="outlined">
                        Login
                    </Button></Link></a>
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
