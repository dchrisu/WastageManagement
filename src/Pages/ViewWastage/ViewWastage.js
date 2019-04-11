import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';    
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
});

class ViewWastage extends React.Component {
    state = {
        date: "",
        zipcode: "",
        recycle: 12,
        waste: 1,
        data: [],
    };

    componentDidMount(){
        var today = new Date();
        this.state.data = today.getDate();
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    getWastage(){
        fetch('http://localhost:8081/getDetails', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify({
                date: this.state.date,
                zipcode: this.state.zipcode,
            })
        })
        .then(res => res.json())
        .then(result => this.setState({data: result.data, recycle: result.data.recycle, waste: result.data.waste}))
        .catch(err => console.log(err))
    };
    
    render (){
        const {classes} = this.props;
        return(
            <div class = "container">
                <h1 style = {{textAlign: 'center'}}>View Today's Wastage</h1>
                <div class = "container" style = {{padding: '20px',textAlign: 'center'}}>
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

                        <Button variant="contained" className={classes.button} onClick = {() => this.getWastage()}>
                            Update
                        </Button>
                    </Paper>
                        
                </div>
                <div className={"my-pretty-chart-container"} style = {{width: '70%', margin: '0 auto'}}>
                    <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Type', 'Weight (in kg)'],
                        ['Recycle (in kg)', this.state.recycle],
                        ['Waste (in kg)', this.state.waste],
                    ]}
                    options={{
                        title: 'Total Wastage',
                        is3D: true,
                        slices: {
                            0: { color: 'green' },
                            1: { color: 'grey' },
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </div>
        )
    }
}

ViewWastage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewWastage);
