import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "./composemail.css";
function Composemail() {
    return (
        <div className="cardDiv">
            <Card className="cardCompose " >
                <CardBody>
                    <Button className="btn_compose">
                        <AddIcon className="compose_Icon" />
                        Compose
                    </Button>

                    <div className="mail-list mt-4">
                        <a className="active" href="/compose-email">
                            <InboxIcon className="compose_Icon2" />
                            Inbox <span className="ms-1 float-end">(18)</span>
                        </a>
                        <a href="/compose-email">
                            <StarBorderOutlinedIcon className="compose_Icon3" />
                            Starred
                        </a>
                        <a href="/compose-email">
                            <DiamondIcon className="compose_Icon3" />
                            Important
                        </a>
                        <a href="/compose-email">
                            <InsertDriveFileOutlinedIcon className="compose_Icon3" />
                            Draft
                        </a>
                        <a href="/compose-email">
                            <SendOutlinedIcon className="compose_Icon3" />
                            Sent Mail
                        </a>
                        <a href="/compose-email">
                            <DeleteOutlineOutlinedIcon className="compose_Icon3" />
                            Trash
                        </a>
                    </div>

                    <div className="mail-list mt-1">
                        <h6 className="mt-4">Labels</h6>
                        <div className="mail-list mt-1">
                            <a href="/compose-email">
                                <CircleOutlinedIcon className="compose_Icon3 mdi-circle-outline me-2" />
                                Theme Support
                            </a>
                            <a href="/compose-email">
                                <CircleOutlinedIcon className="compose_Icon3 mdi-circle-outline me-2" />
                                Freelance
                            </a>
                            <a href="/compose-email">
                                <CircleOutlinedIcon className="compose_Icon3 mdi-circle-outline me-2" />
                                Social
                            </a>
                            <a href="/compose-email">
                                <CircleOutlinedIcon className="compose_Icon3 mdi-circle-outline me-2" />
                                Friends
                            </a>
                            <a href="/compose-email">
                                <CircleOutlinedIcon className="compose_Icon3 mdi-circle-outline me-2" />
                                Family
                            </a>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Composemail;
