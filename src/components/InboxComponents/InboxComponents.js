import React, { useState } from "react";
import "./inboxComponents.css";
import classnames from "classnames";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    FormGroup,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";
import InboxIcon from '@mui/icons-material/Inbox';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
function InboxComponents() {
    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState("1");

    // Toggle active state for Tab
    const toggle = (tab) => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    };
    return (
        <div>
            <Card className="cardInbox">
                <CardBody>
                    <div
                        style={{
                            display: "block",
                            position: "relative",
                            left: 26,
                        }}
                    >
                        <Row>
                            <Nav tabs>
                                <NavItem className="navsItems">
                                    <NavLink
                                        style={{ textAlign: "center" }}
                                        className={classnames({
                                            active: currentActiveTab === "1",
                                        })}
                                        onClick={() => {
                                            toggle("1");
                                        }}
                                    >
                                        <InboxIcon className="iconFont16" />  Primary
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navsItems">
                                    <NavLink
                                        style={{ textAlign: "center" }}
                                        className={classnames({
                                            active: currentActiveTab === "2",
                                        })}
                                        onClick={() => {
                                            toggle("2");
                                        }}
                                    >
                                        <GroupsOutlinedIcon className="iconFont16" /> Social
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navsItems">
                                    <NavLink
                                        style={{ textAlign: "center" }}
                                        className={classnames({
                                            active: currentActiveTab === "3",
                                        })}
                                        onClick={() => {
                                            toggle("3");
                                        }}
                                    >
                                        <LocalOfferOutlinedIcon className="iconFont16" /> Promotion
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <TabContent activeTab={currentActiveTab}>
                            <TabPane tabId="1">
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Peter, me (3)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <a>
                                                Hello Trip home from Colombo has been arranged, then
                                                Jenna will come get me from Stockholm.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Susanna (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="warning">
                                                <span className="badgeSpan">Freelance</span>
                                            </Badge>

                                            <a>
                                                Since you asked... and i'm inconceivably bored at the
                                                train station-Alright thanks. I'll have to re-book that
                                                somehow, i'll get back to you.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Web Support Dennis</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Re: New mail settings-
                                            <a>Will you answer him asap?</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 7</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (2)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="primary">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Off on Thursday -</a>
                                            Eff that place, you might as well stay here with us
                                            instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 4</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Medium</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>This Week's Top Stories-</a>
                                            Our top pick for you on Medium this week The Man Who
                                            Destroyed America's Ego
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Death to Stock</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Montly High-Res Photos-
                                            <a>
                                                To create this month's pack, we hosted a party with
                                                local musician Jared Mahone here in Columbus, Ohio.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>

                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Randy, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Family</span>
                                            </Badge>
                                            <a>Last pic over my village- </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Andrew Zimmer</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Mochila Beta: Subscription Confirmed-
                                            <a>
                                                You've been confirmed! Welcome to the ruling class of
                                                the inbox. For your records, here is a copy of the
                                                information you submitted to us...{" "}
                                            </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Infinity HR</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Sveriges Hetaste sommarjobb-
                                            <a>
                                                Hej Nicklas Sandell! Vi vill bjuda in dig till "First
                                                tour 2014", ett rekryteringsevent som erbjuder jobb på
                                                16 semesterorter iSverige.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Revibe</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="danger">
                                                <span className="badgeSpan">Friends</span>
                                            </Badge>
                                            <a>Weekend on Revibe-.</a>
                                            Today's Friday and we thought maybe you want some music
                                            inspiration for the weekend. Here are some trending tracks
                                            and playlists we think you should give a listen!{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 27</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Erik, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Regarding our meeting-
                                            <a>That's great, see you on Thursday!</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>KanbanFlow</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>Task assigned: Clone ARP's website-.</a>
                                            You have been assigned a task by Alex@Work on the board
                                            Web.{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Tobias Berggren</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Let's go fishing!-
                                            <a>
                                                Hey, You wanna join me and Fred at the lake tomorrow?
                                                It'll be awesome.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Charukaw, me (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Hey man-
                                            <a>Nah man sorry i don't. Should i get it?.</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge className="bg_support">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Home again!-</a>
                                            That's just perfect! See you tomorrow.
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 21</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Stack Exchange</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            1 new items in your Stackexchange inbox-
                                            <a>
                                                The following items were added to your Stack Exchange
                                                global inbox since you last checked it.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01 am</div>
                                    </Col>
                                </Row>
                            </TabPane>

                            <TabPane tabId="2">
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Andrew Zimmer</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Mochila Beta: Subscription Confirmed-
                                            <a>
                                                You've been confirmed! Welcome to the ruling class of
                                                the inbox. For your records, here is a copy of the
                                                information you submitted to us...{" "}
                                            </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Peter, me (3)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <a>
                                                Hello Trip home from Colombo has been arranged, then
                                                Jenna will come get me from Stockholm.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Web Support Dennis</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Re: New mail settings-
                                            <a>Will you answer him asap?</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 7</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (2)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="primary">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Off on Thursday -</a>
                                            Eff that place, you might as well stay here with us
                                            instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 4</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Medium</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>This Week's Top Stories-</a>
                                            Our top pick for you on Medium this week The Man Who
                                            Destroyed America's Ego
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Susanna (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="warning">
                                                <span className="badgeSpan">Freelance</span>
                                            </Badge>

                                            <a>
                                                Since you asked... and i'm inconceivably bored at the
                                                train station-Alright thanks. I'll have to re-book that
                                                somehow, i'll get back to you.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Infinity HR</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Sveriges Hetaste sommarjobb-
                                            <a>
                                                Hej Nicklas Sandell! Vi vill bjuda in dig till "First
                                                tour 2014", ett rekryteringsevent som erbjuder jobb på
                                                16 semesterorter iSverige.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Death to Stock</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Montly High-Res Photos-
                                            <a>
                                                To create this month's pack, we hosted a party with
                                                local musician Jared Mahone here in Columbus, Ohio.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Death to Stock</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Montly High-Res Photos-
                                            <a>
                                                To create this month's pack, we hosted a party with
                                                local musician Jared Mahone here in Columbus, Ohio.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Randy, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Family</span>
                                            </Badge>
                                            <a>Last pic over my village- </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Erik, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Regarding our meeting-
                                            <a>That's great, see you on Thursday!</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>KanbanFlow</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>Task assigned: Clone ARP's website-.</a>
                                            You have been assigned a task by Alex@Work on the board
                                            Web.{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Tobias Berggren</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Let's go fishing!-
                                            <a>
                                                Hey, You wanna join me and Fred at the lake tomorrow?
                                                It'll be awesome.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Charukaw, me (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Hey man-
                                            <a>Nah man sorry i don't. Should i get it?.</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge className="bg_support">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Home again!-</a>
                                            That's just perfect! See you tomorrow.
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 21</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Revibe</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="danger">
                                                <span className="badgeSpan">Friends</span>
                                            </Badge>
                                            <a>Weekend on Revibe-.</a>
                                            Today's Friday and we thought maybe you want some music
                                            inspiration for the weekend. Here are some trending tracks
                                            and playlists we think you should give a listen!{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 27</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Stack Exchange</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            1 new items in your Stackexchange inbox-
                                            <a>
                                                The following items were added to your Stack Exchange
                                                global inbox since you last checked it.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01 am</div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Peter, me (3)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <a>
                                                Hello Trip home from Colombo has been arranged, then
                                                Jenna will come get me from Stockholm.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Susanna (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="warning">
                                                <span className="badgeSpan">Freelance</span>
                                            </Badge>

                                            <a>
                                                Since you asked... and i'm inconceivably bored at the
                                                train station-Alright thanks. I'll have to re-book that
                                                somehow, i'll get back to you.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 6</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Medium</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>This Week's Top Stories-</a>
                                            Our top pick for you on Medium this week The Man Who
                                            Destroyed America's Ego
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Web Support Dennis</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Re: New mail settings-
                                            <a>Will you answer him asap?</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 7</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (2)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="primary">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Off on Thursday -</a>
                                            Eff that place, you might as well stay here with us
                                            instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 4</div>
                                    </Col>
                                </Row>

                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Death to Stock</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Montly High-Res Photos-
                                            <a>
                                                To create this month's pack, we hosted a party with
                                                local musician Jared Mahone here in Columbus, Ohio.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 28</div>
                                    </Col>
                                </Row>

                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Randy, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Family</span>
                                            </Badge>
                                            <a>Last pic over my village- </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Andrew Zimmer</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Mochila Beta: Subscription Confirmed-
                                            <a>
                                                You've been confirmed! Welcome to the ruling class of
                                                the inbox. For your records, here is a copy of the
                                                information you submitted to us...{" "}
                                            </a>
                                            Yeah i'd like that! Do you remember the video you showed
                                            me of your train ride between Colombo and Kandy? The one
                                            with the mountain view? I would love to see that one
                                            again!
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Infinity HR</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Sveriges Hetaste sommarjobb-
                                            <a>
                                                Hej Nicklas Sandell! Vi vill bjuda in dig till "First
                                                tour 2014", ett rekryteringsevent som erbjuder jobb på
                                                16 semesterorter iSverige.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Mar 8</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Revibe</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="danger">
                                                <span className="badgeSpan">Friends</span>
                                            </Badge>
                                            <a>Weekend on Revibe-.</a>
                                            Today's Friday and we thought maybe you want some music
                                            inspiration for the weekend. Here are some trending tracks
                                            and playlists we think you should give a listen!{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 27</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Erik, me (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Regarding our meeting-
                                            <a>That's great, see you on Thursday!</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>KanbanFlow</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge color="success">
                                                <span className="badgeSpan">Social</span>
                                            </Badge>
                                            <a>Task assigned: Clone ARP's website-.</a>
                                            You have been assigned a task by Alex@Work on the board
                                            Web.{" "}
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 24</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Tobias Berggren</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Let's go fishing!-
                                            <a>
                                                Hey, You wanna join me and Fred at the lake tomorrow?
                                                It'll be awesome.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Charukaw, me (7)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            Hey man-
                                            <a>Nah man sorry i don't. Should i get it?.</a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 23</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>me, Peter (5)</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            <Badge className="bg_support">
                                                <span className="badgeSpan">Support</span>
                                            </Badge>
                                            <a>Home again!-</a>
                                            That's just perfect! See you tomorrow.
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>Feb 21</div>
                                    </Col>
                                </Row>
                                <Row className="mailPadding">
                                    <Col sm="1">
                                        <span className="">
                                            <span>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                </FormGroup>
                                            </span>
                                        </span>
                                    </Col>
                                    <Col sm="3">
                                        <span>Stack Exchange</span>
                                    </Col>

                                    <Col sm="6" className="span_overflow">
                                        <span>
                                            1 new items in your Stackexchange inbox-
                                            <a>
                                                The following items were added to your Stack Exchange
                                                global inbox since you last checked it.
                                            </a>
                                        </span>
                                    </Col>
                                    <Col sm="2">
                                        <div>5:01 am</div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default InboxComponents;
