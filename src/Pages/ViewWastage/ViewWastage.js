import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
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
    state = {
        date: "",
        zipcode: "",
        recycle: 12,
        waste: 1,
        data: [{recycle: 4, waste: 2},{recycle: 4, waste: 2}],
    };

    componentDidMount(){
        var today = new Date();
        this.state.data = today.getDate();
        this.state.current = 1;
    }

    getWastage(){
        fetch('http://localhost:8081/')
        .then(res => res.json())
        .then(result => this.setState({data: result.data}))
        .catch(err => console.log(err))
    };
    
    render (){
        const {classes} = this.props;
        return(
            <div class = "container">
                <h1 style = {{textAlign: 'center'}}>View Today's Wastage</h1>
                        
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
