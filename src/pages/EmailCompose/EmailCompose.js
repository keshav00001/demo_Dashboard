import React from 'react'
import Header from "../../components/Header/Header";
import { Breadcrumbs } from "@mui/material";
import { Col, Label, Row } from "reactstrap";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Composemail from "../Composemail/Composemail";
import MailRow from '../../components/MailRow/MailRow';
import EmailComposeComponents from '../../components/EmailComposeComponents/EmailComposeComponents';
export default function EmailCompose() {
    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            className="Breadcrumbs1"
        >
            Email
        </Link>,
        <Typography key="2" color="text.primary" className="Breadcrumbs1">
            Email Compose
        </Typography>,
    ];
    return (
        <div style={{ background: "#F3F3F4" }}>
            <div style={{ background: "#FFFFFF" }}>
                <Header />
            </div>
            <div className="inboxLayout">
                <Row>
                    <Col>
                        <Label className="label1">Email Compose</Label>
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
                    <Col className="mb-4 mb-xl-0 col-xl-3">
                        <Composemail />
                    </Col>
                    <Col className="col-xl-9">
                        <MailRow />
                        <EmailComposeComponents />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
