import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


export default class Widget5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //paramètres du graphe camembert
            series: [25, 15, 44, 55, 41],
            options: {
                chart: {
                    width: '100%',
                    type: 'pie',
                },
                labels: ["Voltaire", "Hugo", "Camus", "Musso", "J.K Rowling"],
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5
                        }
                    }
                },
                title: {
                    text: "Author Trend"
                },
                //affichage en pourcentage
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + '%']
                    }
                },
                legend: {
                    show: false
                }
            },


        };
    }



    render() {
        return (


            <div className="Widget5" id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
            </div>


        );
    }
}

