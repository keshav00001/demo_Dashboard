import React from 'react';
import { RiCalendar2Line, RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import "./orderStats.css";
export default function OrderStats() {
    return (
        <div className='dash_orderStats'>
            <Card className="my-2 cardOrderStats">
                <CardBody>
                    <CardTitle className='cardTitle'>
                        Order Stats
                    </CardTitle>
                    <div>
                        <ul className="list-unstyled">
                            <li >
                                <div className="d-flex">
                                    <div className="avatar-xs align-self-center me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                            <RiCheckboxCircleLine />

                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-2">Completed</p>
                                        <div className="progress progress-sm animated-progess">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                aria-valuenow={70}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "70%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="d-flex">
                                    <div className="avatar-xs align-self-center me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                            <RiCalendar2Line />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-2">Pending</p>
                                        <div className="progress progress-sm animated-progess">
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                aria-valuenow={45}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "45%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="d-flex">
                                    <div className="avatar-xs align-self-center me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                            <RiCloseCircleLine />

                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-2">Cancel</p>
                                        <div className="progress progress-sm animated-progess">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                aria-valuenow={19}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: "19%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="text-center">
                        <div className="row">
                            <div className="col-4">
                                <div className="mt-2">
                                    <p className="text-muted mb-2">Completed</p>
                                    <h5 className="font-size-16 mb-0">70</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2">
                                    <p className="text-muted mb-2">Pending</p>
                                    <h5 className="font-size-16 mb-0">45</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="mt-2">
                                    <p className="text-muted mb-2">Cancel</p>
                                    <h5 className="font-size-16 mb-0">19</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
