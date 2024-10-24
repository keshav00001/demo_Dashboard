import React from "react";
import "./mailRow.css";
import {
    FaExclamationCircle,
    FaFolder,
    FaInbox,
    FaTag,
    FaTrashAlt,
} from "react-icons/fa";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";
import {
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    UncontrolledDropdown,
} from "reactstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
function MailRow() {
    return (
        <div className="d-flex flex-wrap justify-content-between">
            <ButtonToolbar className="btn_adj">
                <ButtonGroup className="btngrp me-2">
                    <Button className="btnMailRow">
                        <FaInbox />
                    </Button>
                    <Button className="btnMailRow">
                        <FaExclamationCircle />
                    </Button>
                    <Button className="btnMailRow">
                        <FaTrashAlt />
                    </Button>
                </ButtonGroup>

                <ButtonGroup lassName="btngrp me-2">
                    <UncontrolledDropdown className="dropDownMailRow" direction="down">
                        <DropdownToggle caret>
                            &nbsp;
                            <FaFolder />
                            &nbsp;&nbsp;
                        </DropdownToggle>
                        <DropdownMenu className="dropDown_app1">
                            <DropdownItem className="dropItem">Updates</DropdownItem>
                            <DropdownItem className="dropItem">Social</DropdownItem>
                            <DropdownItem className="dropItem">Team Manage</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
            </ButtonToolbar>

            <div className="dropLastDiv">
                <ButtonGroup lassName="btngrp me-2">
                    <UncontrolledDropdown className="dropDownMailRow" direction="down">
                        <DropdownToggle caret>
                            &nbsp;
                            <FaTag />
                            &nbsp;&nbsp;
                        </DropdownToggle>
                        <DropdownMenu className="dropDown_app1">
                            <DropdownItem className="dropItem">Updates</DropdownItem>
                            <DropdownItem className="dropItem">Social</DropdownItem>
                            <DropdownItem className="dropItem">Team Manage</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
                &nbsp;
                &nbsp;

                <ButtonGroup lassName="btngrp me-2">
                    <UncontrolledDropdown className="dropDownMailRow" direction="down">
                        <DropdownToggle>
                            <span className="span1">
                                &nbsp;
                                More
                                &nbsp;
                                <BiDotsVerticalRounded />
                            </span>
                        </DropdownToggle>
                        <DropdownMenu className="dropDown_app1">
                            <DropdownItem className="dropItem">Mark as Unread</DropdownItem>
                            <DropdownItem className="dropItem">Mark as Important</DropdownItem>
                            <DropdownItem className="dropItem">Add to Tasks</DropdownItem>
                            <DropdownItem className="dropItem">Add Star</DropdownItem>
                            <DropdownItem className="dropItem">Mute</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default MailRow;
