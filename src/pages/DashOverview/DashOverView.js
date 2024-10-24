import React from "react";
import ReactApexChart from "react-apexcharts";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
} from "reactstrap";
import "./dashOverView.css";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
export default function DashOverView() {
    const chartState = {
        series: [{
            name: 'Expenses',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'Maintenance',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Profit',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false,
                toolbar: {
                    show: false,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                    },
                }
            },

            stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '15%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    // stops: [0, 100, 100, 100]
                }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        },

    }
    return (
        <div className="Dash_Overview">
            <Card className="cardDash">
                <CardBody>
                    <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                            <CardTitle>Overview</CardTitle>
                        </div>
                        <div className="flex-shrink-0">
                            <div>
                                <Button
                                    type="button"
                                    className="btnOverview btn-soft-secondary btn-sm-overview me-1"
                                >
                                    ALL
                                </Button>
                                <Button
                                    type="button"
                                    className="btnOverview btn-soft-primary btn-sm-overview me-1"
                                >
                                    1M
                                </Button>
                                <Button
                                    type="button"
                                    className="btnOverview btn-soft-secondary btn-sm-overview me-1"
                                >
                                    6M
                                </Button>
                                <Button
                                    type="button"
                                    className="btnOverview btn-soft-secondary btn-sm-overview me-1 active"
                                >
                                    1Y
                                </Button>
                            </div>
                        </div>
                    </div>

                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="line"
                        height={350}
                    />

                </CardBody>
                <div className="border-top card-body">
                    <div className="text-muted text-center">
                        <div className="row">
                            <div className="border-end col-md-4">
                                <div>
                                    <p className="mb-2">
                                        {/* <i className="mdi mdi-circle font-size-12 me-1 text-primary" />{" "} */}
                                        <CircleOutlinedIcon className="cicularIcon" />
                                        Expenses
                                    </p>
                                    <h5 className="font-size-16 mb-0">
                                        $ 8,524{" "}
                                        <span className="text-success font-size-12">
                                            <i className="mdi mdi-menu-up font-size-14 me-1" />
                                            1.2 %
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <div className="border-end col-md-4">
                                <div>
                                    <p className="mb-2">
                                        {/* <i className="mdi mdi-circle font-size-12 me-1 text-light" />{" "} */}
                                        <CircleOutlinedIcon className="cicularIcon" />
                                        Maintenance
                                    </p>
                                    <h5 className="font-size-16 mb-0">
                                        $ 8,524{" "}
                                        <span className="text-success font-size-12">
                                            <i className="mdi mdi-menu-up font-size-14 me-1" />
                                            2.0 %
                                        </span>
                                    </h5>
                                </div>
                            </div>
                            <div className="border-end col-md-4">
                                <div>
                                    <p className="mb-2">
                                        {/* <i className="mdi mdi-circle font-size-12 me-1 text-danger" />{" "} */}
                                        <CircleOutlinedIcon className="cicularIcon" />
                                        Profit
                                    </p>
                                    <h5 className="font-size-16 mb-0">
                                        $ 8,524{" "}
                                        <span className="text-success font-size-12">
                                            <i className="mdi mdi-menu-up font-size-14 me-1" />
                                            0.4 %
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
}
