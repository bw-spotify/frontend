import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import './Chart.css'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        legend:{
                            display: false,
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;