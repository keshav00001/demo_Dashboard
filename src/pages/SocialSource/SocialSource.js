import React from "react";
import ReactApexChart from "react-apexcharts";
import { RiFacebookCircleFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { Card, CardBody } from "reactstrap";
import "./socialSource.css";
export default function SocialSource() {
    const chartState = {
        series: [44, 55, 67],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
            },
            colors: ['#2CA491', '#63AFFD', '#6E79D7'],
            plotOptions: {
                radialBar: {

                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 341;
                            },
                        },
                    },
                },
            },
            labels: ["Facebook", "Twitter", "Instagram"],
        },
    };
    return (
        <div className="dash_SocialSource">
            <Card className="cardSocial">
                <CardBody>
                    <div className="d-flex  align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="cardTitles">Social Source</h5>
                        </div>

                        <div className="flex-shrink-0">
                            <select className="form-select form-select-sm mb-0 my-n1">
                                <option value="May">May</option>
                                <option value="April">April</option>
                                <option value="March">March</option>
                                <option value="February">February</option>
                                <option value="January">January</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="radialBar"
                        height={350}
                    />

                    <div className="row">
                        <div className="col-4">
                            <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                    <span className="avatar-title rounded-circle font-size-18 bg-primary">
                                        <RiFacebookCircleFill />
                                    </span>
                                </div>
                                <h5 className="font15" >Facebook</h5>
                                <p className="text-muted mb-0">125 sales</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                    <span className="avatar-title rounded-circle font-size-18 bg-info">
                                        <RiTwitterFill />

                                    </span>
                                </div>
                                <h5 className="font15">Twitter</h5>
                                <p className="text-muted mb-0">112 sales</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="social-source text-center mt-3">
                                <div className="avatar-xs mx-auto mb-3">
                                    <span className="avatar-title rounded-circle font-size-18 bg-danger">
                                        <RiInstagramLine />

                                    </span>
                                </div>
                                <h5 className="font15">Instagram</h5>
                                <p className="text-muted mb-0">104 sales</p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
