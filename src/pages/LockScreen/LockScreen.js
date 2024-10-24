import React from "react";
import "./lockScreen.css";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";
import { Form } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LockScreen() {
    return (
        <div className="loginAuth">
            <div className="bg-overlay"></div>

            <div className="containlock">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <Card>
                                <CardBody className="p-4">
                                    <CardTitle tag="h5" className="text-center">
                                        <a href="/">
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAYCAYAAADjwDPQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDMjRCQ0MyQUZGMTExRUJBRjU2QTM1MDM1M0U3NjFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDMjRCQ0MzQUZGMTExRUJBRjU2QTM1MDM1M0U3NjFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkMyNEJDQzBBRkYxMTFFQkFGNTZBMzUwMzUzRTc2MUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkMyNEJDQzFBRkYxMTFFQkFGNTZBMzUwMzUzRTc2MUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz54k7IIAAAFJklEQVR42uxaW2xURRg+p6VGpYkgauODUvSBiCRsIaA+uQvRRA269UXFh4ISMCqk6yVeEu2iqbegrlEBr8UnqUqwvGpSTDQmGkNNjD4YwzaRSxHlGKtUKXv8pn4Tf8Y5l9lDSoX9k6975sw/c6b/N/9lzq4fhqHXkKklviKldeeWJDXf88Jzm7zxuWHYdDj0m77HzXFTCbPNbK6NX1bzWw6B6j2491fSAkZvvKvBgiHT0hAHQhbgc2PNm7YM/IyivRHtp4XRoeNd4YV+7zG/ZSmu/wA2AJuU3bMssO3CJaeSvWcAOWAICNSNkf1f/EepKcVEC4E3gGX/NMNW/CkTZ1JnMXWW0oPOBp4FuoHWxt6fkEHgMD9zWTylA3gNWGTpewQ4AnwEvArMZ/td4EpgHvAkdStZPeYU8ZJUEucpioi3IwiRxAzSmxQhLwF3AiuBb6ijiFkPTD/NScllzSnaQ5ImOoufmpAy218Ca4HXgcuBXuYd5TG/O/4ziuDZvB4GtvK6HegSeu8AVcuYT3i/h2MCrnWXGGvOZRM5v9756jlX81rNOyDWp6XHMlcXxw1b9K3Vl9r1bzkwq5L6K8DjwJ9G31UkZj7bjwHPk8RU1RcSvfLEPJvKkAVe5+mlWgrC0HLMh7w2w4faIKWIuWwi589R3xaSVBLvFATGnTl2IdEXksJXB0OWCyEvRxCi5HNgDfCtCGX3iwJhMqTIXVw2vKNbEBewT6JqzBMIr5KEDBlzK9vtcMkhcaSoyd4EFqQce4QJvhxBiCRmrUHMfZNMTIEleqdh7C5h2ILAKsOoFerocKT7qmLugpg7x9Cmn10y1lOKuH8cKXMZ2xbW4SFjKfQ/pcd8x3YviTlvEgiRuz4wvCUfMabP8ISSkeM8ERoD0Zb54Sbx/CFLiLPdP46URx085BDwAnfHmINxPmNltpvtJ4A7TkIVVDUSvGdJzDKsrYohsZs5Q6NcT7UVRco8hzGKlG30FldRoexjXjejzlg0xcrWvGHYDVG7+USeS6JI2ekw5hJWUXPqeJ7yjJt5vRe138AUO9z1GaGpkjCmzFI/CplI2cLdn0bOAG5hTpnjSIh6Z3YpsJ9V2PYMRmyvc8fmjHwj80h7RNiS+kHMGnRp3cfQlomUnzjJNoexN5CYi1PorgaeA2aqd3A84fcnVG1R4WUl8aLDSTonrvNGwtXJuyjudxrG9yKSedEguUesMS5Hd1Evn1QSj7AiciVmUwIxq1ltzQIOAuuADxyeMWCpjPpijGaT3dzB8nyhT/ae5TQ/aCTwUJzMZZ6ZIebeYxQIpQiP1JtgMOrAah4edVjpdyRmM3CRpU+FgKeAC+iNykPed/SOrZZkG3A3p5EhIm8QUrAcENNIYJzutQe3G2eewHI2qfvd1z4So3bHrSnnuZ55ac1EAv83hyhCzgd+pof0ZzBCke+zfiVRgXjl4sVUSZpA23hpsKRqqWpZkw6H5wivjlpHhcVDUeh/7fJCUhn2ARJzW8xCh2nwDhKzmaf3axiy2lhC3wO8lyGpB7YXd5aw4Do+idC0XuhyRqrU4ymSmAdJzApL/y/Aw8BXwDMsdZeTiNn8VITdW0fIOq0l6UsuRcxDJOZ2Y+fpkvYoDd9CUpYI0u6mTuPXGSeQFCU/8jXMAeA63wtHQs9X37XsICG6QFAE/ID+a9H/G0tgFWOPnYT/q2Qk9f+VpPw1y4RM973aLAwYr/nNI3Zj+63N4dE29I+BmAOJhODMO7q88WsWU/4WYADMqXVP5c44KwAAAABJRU5ErkJggg=="
                                                alt=""
                                                height={24}
                                                className="auth-logo logo-dark mx-auto"
                                            />
                                            {/* <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAYCAYAAADjwDPQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5RjBGNUM5QUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5RjBGNUNBQUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlGMEY1QzdBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlGMEY1QzhBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Dq0DYAAAFCElEQVR42uxaW2xURRie06VGhUQQtSZGLfpARBK2EG9PbjWaqEG3vnjhoYAEjLd0NcZbtIsG490ab3gtPklFA8VHTVYSCAlGWROjD8awTbxQRTlGlCplj9/IN/HfceacPbtQ2rB/8vVc5p85s/P9tzmnQRRFqiWTS6bpPzM2r01QCwKlopPb1PjcKGrbGwVt3+DmuK2kgmhWpjp+XjVo3wOqd+He30kT2HftrS0WLGmrQ0cTsgDHoaqati0KMjtw/hBwXK2OukhFwYaDQftWEPI5rvs0360lrpGZQI7HpkhZCLwBXH7oMtILXSSOp84F1LmMHnQi8GSLmBopAXt5zCaGrxjpAl4DFjnaHgD2Ax8BLwPzef0ucDEwD3iMugM6UrW8pPnwpYl420OIJKZEb9KEvADcAiwFvqSOJuYuYPoxTko2VaKP8ZCkgU7g0RBS5PWnwCrgdeB8YA3zjvaYP1L+GE3w2TwfAdbxvBPoFXrvABVHny28388+Ief6iehrj+USOb6xfP2cS3muxx0W8zPS7xirl/1GHPqol1ASW9WXtvq3UjD7J/AS8Ajwl9V2CYmZz+uHgWdJYr3VV4nJUXEhu3meY5uRbrHQss8mT3LVBlLwjOUSOX6W+q6QVAZ6BIFxew75e7zhq4shKw0hL3oI0bIdWAl8JULZPaJAmAjJ04qLlnf0CeJCtklUrHFC4VWSkLI1tl67jWlySBwperA3gQV19t3PBF/0ECKJWWURc/cEE6OtcbVlwUqErDJ1DJZZizpAHROOTFtFjN0txs4ytJlnF6z5FDz3a0iZy9i2sAEPGatDfys95mteryExp0wAIdLqQ8tbcp4+g5YnFKwcp0RoDMW1zA/XieeXHSHOdb+GlAdTeMge4Dlax1iKxdnGymwnrx8Flh+FKqhiJXjlSMwyrC2LIbGPOcOg2Ei15SNlXoo+mpT19Ja0okPZxzzPoM5YNMnK1py1sKt91nw49yU+Ujan6HMOq6g5DTxPe8b1PP8etd/wJNvcDVqhaSChT5Glvg9NkbKW1l+P6HdeNzCnzElJyDPAucCPrMI+aGIROxu02KyVb2Qe6fSELakfxszBlNaDDG1NkfIzB1mfou81JOasOnRXAE8Bs4BR7vCHEqo2X3hZSjyfYiedFec5K+Ga5J0X93usxVeeZJ63SO4Xc4zL0b3UyyWVxKOsiNIS80oCMStYbc0GfgLuBN5P8YxhR2U0GLNoLtlJC5b7C7OzV47dfMlK4JHYmcs8M1OMvcsqEAoejzRGUPJtWO3NowkrQymJeRU409GmQ8DjwGn0Ru0hG1J6xzpHsg1pzfVImchZhHQ7Noj1SGjt7o0Hd1p7ntCxN2n43dcPJEZbx411jnM189LKfxP4fzlEE3Iq8As9ZKiJRcjzfdZvJCq0XlGUY/r3ePrLBUuqliqOOZlweJLwat88Blg85IX+Fy5F17svI2cATwM3xUx0hAvexWrjQ+7er1CHvqeczhL6duC9/z9dqX2Lj8iXR9/7sikhcd9TtMXfS4+52dH+K3A/8BnwBEvdxUAHLbKDhN3RQMg6piXpI5cm5j4Ss8RyX1PSHuDCt5OUCwVpt1Gn9d8Zh5EULd/xNcxu4KpARaORCvS3lo0kxBQImoBv0X4l2n9nCaxj7MGj8LsKVlKfUhKXU2yZHqjqbHQYrwaZUfdiBzMy0YEOtI+BmN2JhBy5nDKl5R8BBgCMdGfuVhfRjQAAAABJRU5ErkJggg=="
                                            alt=""
                                            height={24}
                                            className="auth-logo logo-light mx-auto"
                                        /> */}
                                        </a>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        <h4 className="font-size-18 text-muted mt-2 text-center">
                                            Locked Screen{" "}
                                        </h4>
                                        <p className="mb-5 text-center">
                                            Enter your password to unlock the screen !
                                        </p>
                                    </CardSubtitle>
                                    <div className="user-thumb text-center m-b-30">
                                        <img
                                            src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxMzUwQThFNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxMzUwQThGNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDEzNTBBOEM0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDEzNTBBOEQ0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
                                            className="rounded-circle avatar-lg img-thumbnail mx-auto d-block"
                                            alt="thumbnail"
                                        />
                                    </div>


                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Enter password"
                                            type="password"
                                        />
                                    </FormGroup>

                                    <div className="d-grid mt-4">
                                        <Button className="btnlock">Unlock</Button>
                                    </div>
                                </CardBody>
                            </Card>

                            <div className="mt-5 text-center">
                                <p className="text-white-50">
                                    Not you ? return{" "}
                                    <a className="fw-medium text-primary" href="/">
                                        {" "}
                                        Sign In{" "}
                                    </a>{" "}
                                </p>
                                <p className="text-white-50">
                                    © 2023 Upzet. Crafted with
                                    <FavoriteIcon className="heartIcon" />
                                    by Themesdesign
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
