import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
});

class ViewWastage extends React.Component {
    render (){
        const {classes} = this.props;
        return(
            <div></div>
        )
    }
}

ViewWastage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewWastage);
