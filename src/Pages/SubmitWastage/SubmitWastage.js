import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

//date class
//date, zipcode, recycle, waste

class SubmitWastage extends React.Component {
    state = {
        date: '',
        zipcode: '77572',
        recycle: 6.0,
        waste: 5.0,
        current: 1,
    };
    
    componentDidMount(){
        var today = new Date();
        this.state.data = today.getDate();
        this.state.current = 1;
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    postWastage(){
        fetch('http://localhost:8081/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
         },
        body: JSON.stringify({
            date: this.state.date,
            zipcode: this.state.zipcode,
            recycle: this.state.recycle,
            waste: this.state.waste,
        })
        })
        .then(res => res.json())
        .then(this.handleNext)
        .catch(err => console.log(err))
        .then(this.setState({current: this.state.current+1}))
    };

    render (){
        const {classes} = this.props;
        return(
            <React.Fragment>
                {this.state.current > 1 ? 
                (<h1 style = {{textAlign: 'center'}}>Done!</h1>) :
                (<form className={classes.container} noValidate autoComplete="off">
                <h1 style = {{textAlign: 'center'}}>Today's Waste</h1>
                <Paper>
                    <TextField
                    id="standard-name"
                    label="Date"
                    defaultValue={this.state.date}
                    value={this.state.date}
                    onChange={this.handleChange('date')}
                    className={classNames(classes.textField, classes.dense)}
                    margin="normal"
                    />

                    <TextField
                    id="standard-name"
                    label="ZIPcode"
                    value={this.state.ZIPcode}
                    onChange={this.handleChange('zipcode')}
                    className={classNames(classes.textField, classes.dense)}
                    margin="normal"
                    />

                    <TextField
                    id="standard-dense"
                    label="Recycle (in kg)"
                    onChange={this.handleChange('recycle')}
                    className={classNames(classes.textField, classes.dense)}
                    margin="normal"
                    />

                    <TextField
                    id="standard-dense"
                    label="Waste (in kg)"
                    onChange={this.handleChange('waste')}
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    />
                    <Button variant="contained" className={classes.button} onClick = {() => this.postWastage()}>
                        Submit
                    </Button>
                </Paper>
            </form>)}
            </React.Fragment>
        )
    }
}

SubmitWastage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitWastage);
