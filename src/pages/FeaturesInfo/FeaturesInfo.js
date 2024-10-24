import React from "react";
import ReactApexChart from "react-apexcharts";
import { Col, Row } from "react-bootstrap";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
} from "reactstrap";
import { RiArrowRightUpLine, RiGroupLine } from "react-icons/ri";

import "./featuresInfo.css";
export default function FeaturesInfo() {
    const stateCharts = {
        series: [72],
        colors: ["#20E647"],
        options: {
            chart: {
                height: 140,
                type: "radialBar",
            },
            colors: ["#0bb197"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "50%",
                    },
                    track: {
                        background: "#F4F4F4",
                        // background: '#1cbd00',
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: 0,
                            offsetX: 0,
                            show: true,
                        },
                        value: {
                            color: "#74788d",
                            fontSize: "14px",
                            offsetY: -10,
                            alignItem: "center",
                            show: true,
                        },
                    },
                },
            },
            labels: [" "],
        },
    };
    const stateCharts2 = {
        series: [45],
        colors: ["#20E647"],
        options: {
            chart: {
                height: 140,
                type: "radialBar",
            },
            colors: ["#0bb197"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "50%",
                    },
                    track: {
                        background: "#F4F4F4",
                        // background: '#1cbd00',
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: 0,
                            offsetX: 0,
                            show: true,
                        },
                        value: {
                            color: "#74788d",
                            fontSize: "14px",
                            offsetY: -10,
                            alignItem: "center",
                            show: true,
                        },
                    },
                },
            },
            labels: [" "],
        },
    };
    const stateCharts3 = {
        series: [54],
        colors: ["#20E647"],
        options: {
            chart: {
                height: 140,
                type: "radialBar",
            },
            colors: ["#0bb197"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "50%",
                    },
                    track: {
                        background: "#F4F4F4",
                        // background: '#1cbd00',
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: 0,
                            offsetX: 0,
                            show: true,
                        },
                        value: {
                            color: "#74788d",
                            fontSize: "14px",
                            offsetY: -10,
                            alignItem: "center",
                            show: true,
                        },
                    },
                },
            },
            labels: [" "],
        },
    };

    return (
        <div className="features">
            <Card
                className="my-2 cardFeatures"
                style={{
                    width: "16rem",
                }}
            >
                <CardBody>
                    <Row className="carBody_row">
                        <Col xs="4">
                            <div id="chart" className="radialCharts">
                                <ReactApexChart
                                    options={stateCharts.options}
                                    series={stateCharts.series}
                                    type="radialBar"
                                    height={120}
                                />
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="div1">
                                <p className="p1">Users</p>
                                <h5 className="p1h5 mb-3">2.2k</h5>
                                <p className="p2">
                                    <span>0.02%</span>
                                    <RiArrowRightUpLine className="nor_Icons" /> From previous
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card
                className="my-2 cardFeatures "
                style={{
                    width: "16rem",
                }}
            >
                <CardBody>
                    <Row className="carBody_row">
                        <Col xs="4">
                            <div id="chart" className="radialCharts">
                                <ReactApexChart
                                    options={stateCharts2.options}
                                    series={stateCharts2.series}
                                    type="radialBar"
                                    height={120}
                                />
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="div1">
                                <p className="p1">Views per minute</p>
                                <h5 className="p1h5 mb-3">50</h5>
                                <p className="p2">
                                    <span>1.7%</span>
                                    <RiArrowRightUpLine className="nor_Icons" /> From previous
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card
                className="my-2 cardFeatures"
                style={{
                    width: "16rem",
                }}
            >
                <CardBody>
                    <Row className="carBody_row">
                        <Col xs="4">
                            <div id="chart" className="radialCharts">
                                <ReactApexChart
                                    options={stateCharts3.options}
                                    series={stateCharts3.series}
                                    type="radialBar"
                                    height={120}
                                />
                            </div>
                        </Col>
                        <Col xs="7">
                            <div className="div1">
                                <p className="p1">Bounce Rate</p>
                                <h5 className="p1h5 mb-3">24.03 %</h5>
                                <p className="p2">
                                    <span style={{ color: "red" }}>0.01%</span>
                                    <RiArrowRightUpLine className="nor_Icon2" /> From previous
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card
                className="my-2 cardFeatures"
                style={{
                    width: "16rem",
                }}
            >
                <CardBody>
                    <Row className="carBody_row">
                        <Col xs="4">
                            <div>
                                <div
                                    className="rounded-circle border d-flex justify-content-center align-items-center"
                                    style={{
                                        width: "55px",
                                        height: "55px",
                                        position: "relative",
                                        top: 12,
                                        background: "#EFF2F7",
                                    }}
                                    alt="Avatar"
                                >
                                    <RiGroupLine className="Avtar_Icon" />
                                </div>
                            </div>
                        </Col>
                        <Col xs="8">
                            <div className="div1">
                                <p className="p1">New Visitors</p>
                                <h5 className="p1h5 mb-3">435</h5>
                                <p className="p2">
                                    <span>0.01%</span>{" "}
                                    <RiArrowRightUpLine className="Avtar_Icon" />
                                    From previous
                                </p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}
