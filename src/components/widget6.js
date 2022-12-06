import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class Widget6 extends Component {
    constructor(props) {
        super(props);
        //paramètres du graphe histogramme
        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ["FNAC", "D'LIR", "L'encyclopédie", "Cultura"]
                }
            },
            series: [{
                name: 'Yesterday sales',
                data: [96, 40, 29, 52]
            }]
        }
    }
    render() {
        return (
            <div className="Widget6">
                <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
            </div>
        )
    }
}
