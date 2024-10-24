import React from 'react';
import './register.css';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { Form } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Register() {
    return (
        <div className='registerAuth'>
            <div className='bg-overlay'>
            </div>

            <div className='contain'><div className='container'>
                <div className='justify-content-center row'>
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <Card
                        >

                            <CardBody className='p-4' >
                                <CardTitle tag="h5" className='text-center'>
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
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <h4 className="fontsize18 text-muted mt-2 text-center">Free Register !</h4>
                                    <p className="mb-5 text-center">Get your free Upzet account now.</p>

                                </CardSubtitle>

                                <FormGroup>
                                    <Label for="exampleUsername">
                                        Username
                                    </Label>
                                    <Input
                                        id="exampleUsername"
                                        name="username"
                                        placeholder="Enter username"
                                        type='text'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter email"
                                        type='email'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Enter password"
                                        type="password"
                                    />
                                </FormGroup>

                                <Row>
                                    <Col >
                                        <FormGroup check>
                                            <Input type="checkbox" />
                                            {' '}
                                            <Label check>
                                                I accept <a className="text-primary" href="/">
                                                    Terms and Conditions
                                                </a>

                                            </Label>
                                        </FormGroup>

                                    </Col>
                                    {/* <Col className='col-7'>
                                        <div className="text-md-end mt-3 mt-md-0">
                                            <a className="text-muted" href="/auth-recoverpw">
                                                <LockIcon className='lockicon' /> Forgot your password?
                                            </a>
                                        </div>
                                    </Col> */}
                                </Row>

                                <div className='d-grid mt-4'>

                                    <Button className='btnreg'>
                                        Register
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p className="text-white-50">
                                Don't have an account ?{" "}
                                <a className="fw-medium text-primary" href="/">
                                    {" "}
                                    Login{" "}
                                </a>{" "}
                            </p>
                            <p className="text-white-50">
                                © 2023 Upzet. Crafted with
                                <FavoriteIcon className="heartIcon" />

                                by
                                Themesdesign
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
