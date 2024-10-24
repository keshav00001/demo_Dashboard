import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Col, Label, Row } from "reactstrap";
import Header from "../../components/Header/Header";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FeaturesInfo from "../FeaturesInfo/FeaturesInfo";
import DashOverView from "../DashOverview/DashOverView";
import SocialSource from "../SocialSource/SocialSource";
import OrderStats from "../OrderStats/OrderStats";
import Notification from "../Notification/Notification";
import RevenueLocation from "../RevenueLocation/RevenueLocation";
import LatestTransction from "../LatestTransction/LatestTransction";

function Home(props) {
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            className="Breadcrumbs1"
        >
            Upzet
        </Link>,
        <Typography key="2" color="text.primary" className="Breadcrumbs1">
            Dashboard
        </Typography>,
    ];

    return (
        <div style={{ background: "#F3F3F4" }}>
            <div style={{ background: "#FFFFFF", }}>
                <Header />
            </div>

            <div className="layoutPading">


                <Row>
                    <Col>
                        <Label className="label1">Dashboard</Label>
                    </Col>
                    <Col>
                        <Stack spacing={3} className="BreadCrumbsStack">
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Col>
                </Row>

                <Row>
                    <FeaturesInfo />
                </Row>
                <br clear="all" />
                {/* <div>
                    <DashOverView />
                    <SocialSource />
                </div> */}

                <div>
                    <Row>
                        <Col xl="8">
                            <DashOverView />
                        </Col>
                        <Col xl="4">
                            <SocialSource />
                        </Col>
                    </Row>

                </div>

                <br clear="all" />

                <div>
                    <Row>
                        <Col xl="4">
                            <OrderStats />
                        </Col>
                        <Col xl="4">
                            <Notification />
                        </Col>
                        <Col xl="4">
                            <RevenueLocation />
                        </Col>
                    </Row>

                </div>

                <div>
                    <Row>
                        <Col xl="12">
                            <LatestTransction />
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    );
}
export default Home;
