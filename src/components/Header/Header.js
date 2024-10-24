import "./header.css";
import {
    RiApps2Line,
    RiFullscreenLine,
    RiLockUnlockLine,
    RiMenu2Line,
    RiNotification3Line,
    RiSearchLine,
    RiSettings2Line,
    RiShoppingCartLine,
    RiShutDownLine,
    RiUserLine,
    RiWallet2Line,
} from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { TbClockHour4 } from "react-icons/tb";

import {
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    UncontrolledDropdown,
} from "reactstrap";
import React, { useState, createContext, useContext } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./header.css";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { AppContext } from "../../context/AppContext";
export const UserContext = createContext();


export default function Header() {
    const [show, setShow] = useState(false);
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };
    const toggle = () => {
        toggleSidebar();
        if (toggled) {
            console.log(toggled);
            collapseSidebar();
        } else {
            console.log(toggled);
            collapseSidebar();
        }
    };

    const { sideWidth, setSideWidth } = useContext(AppContext)



    return (
        <UserContext.Provider value={toggled}>
            <div className="header">
                <div className="header__left">
                    <RiMenu2Line className="menuIcon" onClick={() => {
                        toggle();
                        setSideWidth(!sideWidth)
                    }} />
                    <div className="div_Input">
                        <RiSearchLine className="menuIcon" />
                        <Input
                            placeholder="Search..."
                            className="input_holder form-control-Search"
                        />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header_right_div">
                        <img
                            className="header_img"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                        />
                    </div>
                    <div className="header_right_div">
                        <UncontrolledDropdown className="me-2" direction="down">
                            <DropdownToggle>
                                <RiApps2Line className="nor_Icon" />
                            </DropdownToggle>
                            <DropdownMenu className="dropDown_app1">
                                <DropdownItem>
                                    <div className="g-0 row">
                                        <Row className="row1">
                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                                                />
                                                <br />
                                                <span className="label1">GitHub</span>
                                            </Col>
                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAMAAABopjdHAAAAwFBMVEVHcEwAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4Mri5Y4AAAAP3RSTlMAIwhydxy28hIWIc+je6u9P/b9BUziKJcMxKdZAjyMXjfXu8Hm1eou2t0z+rKRRq+A7my6Qp/M34PrU1YPiL7YsJ9AAAABbUlEQVQYGW3Bh3aiQAAF0EedoSMiYu+isdcka7Lv//9qYTib3eR4LwB9b9yilWBtefeN2NFR6h3WJOfeLIqizn3REiQXgdaEMSdb5uiaWTLXc+mOH5+XOSlGaJDJDN+NSJ7QILn0zcegcJ2SpWUvaZcleFROk44d+jf/MF1sWHlHl895OPI5GyM+10bML97US/iXiazB2jIo8uJtzlqSQptQWZ6hxzoMQaU1gGVTCfUsbPnaR0hllkG2WUkCmCQDmFRuEk2TlcSESdJAQCVoAj0q4YfWXrRduaXyC0BKRQRAARwFK5sxAGdL5X0YW/HniUrkomQNWVt11lQ2swFq4+GK/7RsA7XrzkKWGu3Q/h3Z4c7YQw5yVHpiYTpAX1quJZuATKO1hsqLR+H556smc6mNH0c74dZBxbFZEuv77DLtTARLZx2Vvs+f4j6UIX+yUCte+V03R60/PvA/ouvii7N/m742yESsLrtejsofWqVrkBSdwYAAAAAASUVORK5CYII="
                                                />
                                                <br />
                                                <span className="label1">Bitbucket</span>
                                            </Col>
                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA0lBMVEVHcEzEI2HDI2HDI2HEI2HDI2HDI2HEI2HDImHDI2HDI2HDImDDI2HEI2HDI2HDI2HDI2HEI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HEJGLDI2HDI2HDI2HqTInxU5C9HFq7GlnyVJHEI2HpS4jwUY/BIV/tTou3FlTCImDzVZK6GVfUNXPfP32+HVziQ4DaOnjrTYrFJWO/Hl3MLGrKKmjAH17uUI3cPXrXN3XSMnC1FFLoSYf1V5T4WpfPLm3mR4TIKGbQMG7wU5DqS4gW3fYwAAAAH3RSTlMAlnPA0mVNzNyLQuQo7zUfxPFVXWx6pPMCRX/1A3yvLDJKvgAAAk1JREFUGBllwIV2GmkUAOAbIUD8bCrp2v1dx10ZBmbf/5WW0DZtTz/44X518fzwef3pwyP87uZKiJhRSlns1iv41f2Vpk73bdumYVUwff0FfvKS07rUNJz4wrlJwpqJj/Dug2D5vNsHrPUS0Sx+rgqxhW/+EKxsuMpEoKWSiCj5rqTiTzh7EqzkSkof0WBPMkRpfORYIW7hzZrmjZKIGd8HrPUSCe8Cmx7pA5zcOpp4iYhSSRfkxvOxtDacUNeXALBmR45n0reUhSaMh7jlxnfsAeDJ0YRjZoxaiG8OsXBDsB95JtWs9S2s4spz1Rg5R+mxcrWu99Gi8ETt6RYu6qrr92WV18wOVuSFyHYZZojIU/YMVzkdBmstK0QVtpgUQTepE0KmhG5go8uwD8M0SkZD/LQrg7zrj8c+TJO0voMNjSa1ELIoY3jT9rlzwWCtHQZbizu4oinHN7LhyYENTNeHtG3bri+F28AFCwmeyKXpmaWHJAxytVsIX3YpfYZVcTAGUfLxYIND1ExzwVqOJ7ynW3hycUJQ8lnbuGu8yZrSlipDbEanvwCsWe8lH7XViTcSkXc2Hw1Kn7LPrwA3ukimLB/c6PGNSmIaEakyV/wDJ9e08v2gR49nBnPbEeP37K9XOLkX9UHTyP+HXy29LdWuY+4Gzl5EHKQTfsfTIDcp01v46vVSFOXsVYZnZK5FVegLeLcStAjnhpNlIZwkoo7dFn7yuNasLrs2itq0dE5sbuBXL2tHGY1jyqjeXP4Nv3m8/LS+u7v+9+MtvPsfo0R0DDqUOxMAAAAASUVORK5CYII="
                                                />
                                                <br />
                                                <span className="label1">Dribble</span>
                                            </Col>

                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAAAxlBMVEVHcEwAfuYAfuYAfuYAfuYAfecAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+UAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+YAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAgOcAfuYAfeYAf+YAfuYAfuZXV9ysAAAAQXRSTlMACxEy+QLr/PX+2xgHGh58vjZgQeTHDu1k6RWMKIbTudej4Jipy0cFcPPvL3MkTBNn0HfFVq5Q6LVrOh8GnFk8kkQ6JVUAAAGsSURBVBgZfcEHgppAAAXQjw4Mgi5iD/Yu9o6uW/Lvf6kgiowmm/cQq3y1G0g0hvMKXuTaksESMdei2LhQaWuTIbOQxZW+9xnyJys8NMqCEVHXAYybPiNyOMNNZW3wYWBjVZeMmVsPocVOMiE3bl4yITdpYFSlShyKXZ8qs4ZcmYrSKIvxd4+KzQXQ+oJ31X4OV5VmlXdyYCM0rklGrLSOG/0tz4jcZnGz7JEMnCwS2sQiWSroiHlDnlY6nngDGjMo3tseXun9dyi8jiyn8MzeyamLh31A0ndSSKQmPZJBLYuI7kheZaouYpcWI7KJK+9T8M7sL3CVq5uMHS5ArkOFudeB4pSK0gWjElXiMOoKqn6tgVReMpEZvuUzTMjWBSGt1mMs8zmrp+uCselcw01uJxkRzqXDanouGJFlGw/jQsCQUThaJIPC0WAoOKeg0k6SRnHpM+I0LMrWAs/m6a/urCl4I7ru6ewV8KxtLO0uE3m7OG3j2dmXFlWdKZt44bYEVZlOEX/RagYTxsTGv1S6Pm/MfAM/+CiWeWUds/jZh1Oi8VvDf+mLbVrHsz8x4n90MIcLhQAAAABJRU5ErkJggg=="
                                                />
                                                <br />
                                                <span className="label1">Dropbox</span>
                                            </Col>
                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAMAAADCMPhoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJAUExURUdwTGVPRGVPRHVeUGVPRGVPRGRPRWVPRGVPRGVPRGRQRWVPRWVPRGVPRGVPRGRPRWVPRGVPRGVPRGVPRGVPRGBVUmVPRGVPRGtUR2VPRGVPRGVPRGVPRGVPRGVPRGVPRF9LQ3NZSZ6IdmVPRGNVT3poX2VPRGVPRHlhRl9gZIFnR2VPRJBpTP3rzvTSqxIgNEme1yyDwhUiNY5oTGZQRGlSRfzoyf3qzffbuPXixZpzVfTVsGBMQ/PQqXpbSIRiSnFWRvjlyP///39fSW1URrKUeIhkSkM8Pe/Np4tmSyx8tvrgvv37+ZRtT5ZwUuPDn1VHQ595WnNYR5FqTVKCo2NOQ/vlxdrBpCEpN9y7mPXUrj1IWZV7ZzWKxqqTfunIo/PRq7mafsm/ubipoP338LispLyrmKWNeFtlcPzy55yBa/PNo9e2lCcsOO3AkO7Gm1lZXhUpQi6CvsilgzA8TaeCY0SZ05yDbysuOTExOvbYs/HdwaqHaeDBnc62nGJqeOXQtBspPLKch8ytj/327fjz7sO3r35sWb+yqbOObk5jdmNdXzR7sPHJnfDbvUVujVd1inhxcVJgb7+aeerXvDZ5qo2Aeyg0Rh9PdkhphShzq/fixBxFaRk1UZ97XjpznjZCUzQzO15LQydrnq6Vf829sPnn06GGcIRlTy4+UqCeoPLv7s7Hw+Hd2+zp546UnqCjpc62e7uoayhfiqmRSHWAjlBTROa+T9KxTFKFqe/HTp+XXllwgsW4a5e0njlHS3QagBcAAAArdFJOUwChif0QVMAFATnZ3hjoM8j3bbLSKPesC/SV9JpILoBY8Pz9kf3wgnaT/pqvGFBIAAACu0lEQVQ4y3WU5VsiURTGCZFBxcCu7ebOXBiQRgQBRbBwLbCwde3uWN1Ht7u7w+3u/df23mGYhcf1/fp776k5Z3i8CIklObm8rZWbndr9c+2QmCeOF22P34Tj+Ae/KX79/vHlQObeK+dPViRERWBCtOewQqH48/3rx3cvFmkIYX90RPLMbgVWyef3b/0Qc0hLw3hUwjmGN3741A1Z0bFhPBaHV0w8fP5mGdJI2DCV/Y/HMLzx1r1Fum7qvslkKuqH9A4xlz/67ATiI8P+MXraJA9quiiJC7DthFKJyoP+5TqM1XmWQq9dncZxyZBSqWwsgWN0EcJ5hSqA5eSaJGJOIUMJfRVWIOwCQVWV7UxnDaILiI8M05h7ASg1GEqrQFm9r1bGGmSXkeEahCi+HQCDdYbCMg8MxrCGVMRvQFiH8qPsZ3ynB44wluJww21IV6MCAHAYzYMMpuqbk1kD/7ry7oNqxOX5ACxQ6HlfOXovLE/gxjTkRbFdankhAKP4ce8kpXMbizNEoTkUoNpG51AEFSgzI4Oj13jJMa/R7+IHDfssoNJMNaARokDHWyjKWKMlrVqS1DYJgkW4QMBnRgacA1T21ZAh6RrisEFgAXMa3Roy2F2gcl4TwtqZZmEcW0NVYCmAP6HTUBziGl1LoC24MsRu1B9QMX1e1CGm17h1LStd6683pESw0aSMAm8eM8nxmyT56HFra+vLVx6bzXY0NCyxgFkSFSidJa0rT3ra23t6PDbPuj6LuwnWAGpJsulY++qqx7bR0WntEnFLkYYNFgDGSXK2s62jo61zQe+eD9/rRLxNTgD0bBc1bl+zMCXsMiQ4hN0JHCGHtl64P+L2RNihtqju1FoxXuqSC4jI442XYoe6IP/Z06ZJoTwradN5E/xEOafolP/9INIFyYxHKpNs+RMhUnIk4T+Gv3cNvzi99G5fAAAAAElFTkSuQmCC"
                                                />
                                                <br />
                                                <span className="label1">Mail Chimp</span>
                                            </Col>
                                            <Col className="col1">
                                                <img
                                                    className="col1Img"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAACplBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////60uX///////////////////////////////9uytzmmQDpqCA+uZHgFWPkkQAWjnjODgjIAQNVwdYarX3XADfcAEj5/f3cAE7L7PN/1e7ppAuw49I2t42G1bjjFnJkyuXsqyX22qE8uJDyn75zzN70qcViegRUgh/ZAT245ddB2aIzACb34LAFgmbMAgpFsrj//vTS7/QVqnr+/PrppxwwvIzvw2Puu1BKvdT+8PXI7OEOqHaS1+XfA15cw9f96r7E6vFcz/pLdARCvZTw+fbfDV9lhhv/ryHpU4zhGmj2vtH7AlgdtIEYDjGm3+oKlG8bk3zrtwmd2+ggl4FSwpoIimozpJrIkgDe9PrPJQB12v/rtiT8//8rpoR/0N6v4/LtwBxSwtvlO3vI6+pgxqVGu9MLp3NzzLC95++Zkxzwibb/GW0bfWb33qvumwD+c6cUACE3ADAvs4k5UVo3EDnvzCxsxK/kfUb96vnSNgD+rBznnh81r4zUEil7ysTpf4H384miwZjWOxfcag395/cPjW714Hn3ynT6nABVvc9gx+D44rVkx9rbWhfkjxzmS4V3ih1Lj03fFV7TDCJmnV5staHhK2njMHNuxc0nn4Jv0e+wVX9dqo3sFmem6P9Eu9JtAC/IvG1Jfhxym1BsgQqh5/9AEjyoAErufqr01pXrsDYoDjQ4Gj0cy47Alw5wLFTuAVp6z7PYJWp43rueFVRmEkb0ZprVAEUgt4QsiG94nZYsIT9Gx5y9/+uQ18Ci3coAom6/ICZyAAAAKXRSTlMAP9pMoGFRR+eup71y+9DzuF0xoyLgFQKyWWadV4P2w5b+kQivDFtcxZCJTt8AAAKlSURBVBgZdcCDU2QBGADwrxXaai/76oTvvbdmNnezbetqsjHZOtu2bdvGf3K1u9NMN9cPFmPzOOtZsBQ6jiX5IxP+z5bjLxKJnprCP+wtGSwAsMJnpB9J4Vq2I8MeFliiZziuBLDBZJKixrNR5eaGxmBgrupNTx9ANoDj2HhxMXn3YZAsJUNlDno8z/4Ar7g0S1sWL4Z6NfQgtNuXIPpyeKC3zFMuEMR5861Vsbfu590LDbnYQpxIcbMDPXqBl1d+Yl1sZ5As90ZIUVHIhdxuWRUagZ4Test3tB+M9s0irl0pCgnNC+3obEIT0FlHw6Zd9WJxZIM7QRC5Z/PODDVmc5wtQIeNg0G+R8XianEt4SvLatnb6Fd85LA1GJjl9GUR7g311eLIaPeq2LaYbR6Uh1+8EVhZrAIA04yUIMI9OlJcu2ETzksiKYrMNuMickwAaDm3ZbJjxNV2QWIdzosgqdaaQwcCT196gubAxsGODDeVd0V+gDwN522s2b5/X6laqVYMcwCYNOQzzMLlAkGcN87ZsnmrRCoN8xGWhpWYwhwrG3AqCJgWJGowNbjERyGNkkh2+hQqFYE0MOC/f6kJGL0+olRmnpNIJNIodWZPMNJBh+7KDx+deTF5p1woFPqcl0qjmnevQBc66Lhi2ad3Wu3U80fCm4XqTEXzyVMee0wtQI8VXxKmLP9YOTtb+bhcfXm4rLWry8Mvxgj0lgUrCoUjHyqntJOvJ8qQtjyJpCgywhj0eIEKofDNZ+33ma8/2rhGsPq4KCFBFMEFPYfUnjBl6cS3Co3mS5ozAAuTRaLkeBYY2GFgcCr+rBAI5G/5awCM0d8fGbCAacxgmxR4TefLe9EGAJhcLhMWs8Vff9L7Pa1hCSb4eyAc2bAUBzOOCx0W+QuvxroExNCXxAAAAABJRU5ErkJggg=="
                                                />
                                                <br />
                                                <span className="label1">Slack</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </DropdownItem>
                                {/* <DropdownItem>
                                <Row>
                                    <Col className="col1">
                                        <img
                                            className="col1Img"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAAAxlBMVEVHcEwAfuYAfuYAfuYAfuYAfecAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+UAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+YAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAgOcAfuYAfeYAf+YAfuYAfuZXV9ysAAAAQXRSTlMACxEy+QLr/PX+2xgHGh58vjZgQeTHDu1k6RWMKIbTudej4Jipy0cFcPPvL3MkTBNn0HfFVq5Q6LVrOh8GnFk8kkQ6JVUAAAGsSURBVBgZfcEHgppAAAXQjw4Mgi5iD/Yu9o6uW/Lvf6kgiowmm/cQq3y1G0g0hvMKXuTaksESMdei2LhQaWuTIbOQxZW+9xnyJys8NMqCEVHXAYybPiNyOMNNZW3wYWBjVZeMmVsPocVOMiE3bl4yITdpYFSlShyKXZ8qs4ZcmYrSKIvxd4+KzQXQ+oJ31X4OV5VmlXdyYCM0rklGrLSOG/0tz4jcZnGz7JEMnCwS2sQiWSroiHlDnlY6nngDGjMo3tseXun9dyi8jiyn8MzeyamLh31A0ndSSKQmPZJBLYuI7kheZaouYpcWI7KJK+9T8M7sL3CVq5uMHS5ArkOFudeB4pSK0gWjElXiMOoKqn6tgVReMpEZvuUzTMjWBSGt1mMs8zmrp+uCselcw01uJxkRzqXDanouGJFlGw/jQsCQUThaJIPC0WAoOKeg0k6SRnHpM+I0LMrWAs/m6a/urCl4I7ru6ewV8KxtLO0uE3m7OG3j2dmXFlWdKZt44bYEVZlOEX/RagYTxsTGv1S6Pm/MfAM/+CiWeWUds/jZh1Oi8VvDf+mLbVrHsz8x4n90MIcLhQAAAABJRU5ErkJggg=="
                                        />
                                        <br />
                                        <label className="label1">Dropbox</label>
                                    </Col>
                                    <Col className="col1">
                                        <img
                                            className="col1Img"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAMAAADCMPhoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJAUExURUdwTGVPRGVPRHVeUGVPRGVPRGRPRWVPRGVPRGVPRGRQRWVPRWVPRGVPRGVPRGRPRWVPRGVPRGVPRGVPRGVPRGBVUmVPRGVPRGtUR2VPRGVPRGVPRGVPRGVPRGVPRGVPRF9LQ3NZSZ6IdmVPRGNVT3poX2VPRGVPRHlhRl9gZIFnR2VPRJBpTP3rzvTSqxIgNEme1yyDwhUiNY5oTGZQRGlSRfzoyf3qzffbuPXixZpzVfTVsGBMQ/PQqXpbSIRiSnFWRvjlyP///39fSW1URrKUeIhkSkM8Pe/Np4tmSyx8tvrgvv37+ZRtT5ZwUuPDn1VHQ595WnNYR5FqTVKCo2NOQ/vlxdrBpCEpN9y7mPXUrj1IWZV7ZzWKxqqTfunIo/PRq7mafsm/ubipoP338LispLyrmKWNeFtlcPzy55yBa/PNo9e2lCcsOO3AkO7Gm1lZXhUpQi6CvsilgzA8TaeCY0SZ05yDbysuOTExOvbYs/HdwaqHaeDBnc62nGJqeOXQtBspPLKch8ytj/327fjz7sO3r35sWb+yqbOObk5jdmNdXzR7sPHJnfDbvUVujVd1inhxcVJgb7+aeerXvDZ5qo2Aeyg0Rh9PdkhphShzq/fixBxFaRk1UZ97XjpznjZCUzQzO15LQydrnq6Vf829sPnn06GGcIRlTy4+UqCeoPLv7s7Hw+Hd2+zp546UnqCjpc62e7uoayhfiqmRSHWAjlBTROa+T9KxTFKFqe/HTp+XXllwgsW4a5e0njlHS3QagBcAAAArdFJOUwChif0QVMAFATnZ3hjoM8j3bbLSKPesC/SV9JpILoBY8Pz9kf3wgnaT/pqvGFBIAAACu0lEQVQ4y3WU5VsiURTGCZFBxcCu7ebOXBiQRgQBRbBwLbCwde3uWN1Ht7u7w+3u/df23mGYhcf1/fp776k5Z3i8CIklObm8rZWbndr9c+2QmCeOF22P34Tj+Ae/KX79/vHlQObeK+dPViRERWBCtOewQqH48/3rx3cvFmkIYX90RPLMbgVWyef3b/0Qc0hLw3hUwjmGN3741A1Z0bFhPBaHV0w8fP5mGdJI2DCV/Y/HMLzx1r1Fum7qvslkKuqH9A4xlz/67ATiI8P+MXraJA9quiiJC7DthFKJyoP+5TqM1XmWQq9dncZxyZBSqWwsgWN0EcJ5hSqA5eSaJGJOIUMJfRVWIOwCQVWV7UxnDaILiI8M05h7ASg1GEqrQFm9r1bGGmSXkeEahCi+HQCDdYbCMg8MxrCGVMRvQFiH8qPsZ3ynB44wluJww21IV6MCAHAYzYMMpuqbk1kD/7ry7oNqxOX5ACxQ6HlfOXovLE/gxjTkRbFdankhAKP4ce8kpXMbizNEoTkUoNpG51AEFSgzI4Oj13jJMa/R7+IHDfssoNJMNaARokDHWyjKWKMlrVqS1DYJgkW4QMBnRgacA1T21ZAh6RrisEFgAXMa3Roy2F2gcl4TwtqZZmEcW0NVYCmAP6HTUBziGl1LoC24MsRu1B9QMX1e1CGm17h1LStd6683pESw0aSMAm8eM8nxmyT56HFra+vLVx6bzXY0NCyxgFkSFSidJa0rT3ra23t6PDbPuj6LuwnWAGpJsulY++qqx7bR0WntEnFLkYYNFgDGSXK2s62jo61zQe+eD9/rRLxNTgD0bBc1bl+zMCXsMiQ4hN0JHCGHtl64P+L2RNihtqju1FoxXuqSC4jI442XYoe6IP/Z06ZJoTwradN5E/xEOafolP/9INIFyYxHKpNs+RMhUnIk4T+Gv3cNvzi99G5fAAAAAElFTkSuQmCC"
                                        />
                                        <br />
                                        <label className="label1">Mail Chimp</label>
                                    </Col>
                                    <Col className="col1">
                                        <img
                                            className="col1Img"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAACplBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////60uX///////////////////////////////9uytzmmQDpqCA+uZHgFWPkkQAWjnjODgjIAQNVwdYarX3XADfcAEj5/f3cAE7L7PN/1e7ppAuw49I2t42G1bjjFnJkyuXsqyX22qE8uJDyn75zzN70qcViegRUgh/ZAT245ddB2aIzACb34LAFgmbMAgpFsrj//vTS7/QVqnr+/PrppxwwvIzvw2Puu1BKvdT+8PXI7OEOqHaS1+XfA15cw9f96r7E6vFcz/pLdARCvZTw+fbfDV9lhhv/ryHpU4zhGmj2vtH7AlgdtIEYDjGm3+oKlG8bk3zrtwmd2+ggl4FSwpoIimozpJrIkgDe9PrPJQB12v/rtiT8//8rpoR/0N6v4/LtwBxSwtvlO3vI6+pgxqVGu9MLp3NzzLC95++Zkxzwibb/GW0bfWb33qvumwD+c6cUACE3ADAvs4k5UVo3EDnvzCxsxK/kfUb96vnSNgD+rBznnh81r4zUEil7ysTpf4H384miwZjWOxfcag395/cPjW714Hn3ynT6nABVvc9gx+D44rVkx9rbWhfkjxzmS4V3ih1Lj03fFV7TDCJmnV5staHhK2njMHNuxc0nn4Jv0e+wVX9dqo3sFmem6P9Eu9JtAC/IvG1Jfhxym1BsgQqh5/9AEjyoAErufqr01pXrsDYoDjQ4Gj0cy47Alw5wLFTuAVp6z7PYJWp43rueFVRmEkb0ZprVAEUgt4QsiG94nZYsIT9Gx5y9/+uQ18Ci3coAom6/ICZyAAAAKXRSTlMAP9pMoGFRR+eup71y+9DzuF0xoyLgFQKyWWadV4P2w5b+kQivDFtcxZCJTt8AAAKlSURBVBgZdcCDU2QBGADwrxXaai/76oTvvbdmNnezbetqsjHZOtu2bdvGf3K1u9NMN9cPFmPzOOtZsBQ6jiX5IxP+z5bjLxKJnprCP+wtGSwAsMJnpB9J4Vq2I8MeFliiZziuBLDBZJKixrNR5eaGxmBgrupNTx9ANoDj2HhxMXn3YZAsJUNlDno8z/4Ar7g0S1sWL4Z6NfQgtNuXIPpyeKC3zFMuEMR5861Vsbfu590LDbnYQpxIcbMDPXqBl1d+Yl1sZ5As90ZIUVHIhdxuWRUagZ4Test3tB+M9s0irl0pCgnNC+3obEIT0FlHw6Zd9WJxZIM7QRC5Z/PODDVmc5wtQIeNg0G+R8XianEt4SvLatnb6Fd85LA1GJjl9GUR7g311eLIaPeq2LaYbR6Uh1+8EVhZrAIA04yUIMI9OlJcu2ETzksiKYrMNuMickwAaDm3ZbJjxNV2QWIdzosgqdaaQwcCT196gubAxsGODDeVd0V+gDwN522s2b5/X6laqVYMcwCYNOQzzMLlAkGcN87ZsnmrRCoN8xGWhpWYwhwrG3AqCJgWJGowNbjERyGNkkh2+hQqFYE0MOC/f6kJGL0+olRmnpNIJNIodWZPMNJBh+7KDx+deTF5p1woFPqcl0qjmnevQBc66Lhi2ad3Wu3U80fCm4XqTEXzyVMee0wtQI8VXxKmLP9YOTtb+bhcfXm4rLWry8Mvxgj0lgUrCoUjHyqntJOvJ8qQtjyJpCgywhj0eIEKofDNZ+33ma8/2rhGsPq4KCFBFMEFPYfUnjBl6cS3Co3mS5ozAAuTRaLkeBYY2GFgcCr+rBAI5G/5awCM0d8fGbCAacxgmxR4TefLe9EGAJhcLhMWs8Vff9L7Pa1hCSb4eyAc2bAUBzOOCx0W+QuvxroExNCXxAAAAABJRU5ErkJggg=="
                                        />
                                        <br />
                                        <label className="label1">Slack</label>
                                    </Col>
                                </Row>
                            </DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="header_right_div">
                        <RiFullscreenLine className="nor_Icon" />
                    </div>
                    <div className="header_right_div">
                        <UncontrolledDropdown className="me-2" direction="down">
                            <DropdownToggle>
                                <RiNotification3Line className="nor_Icon" />
                            </DropdownToggle>
                            <DropdownMenu className="dropDown_Notif">
                                <DropdownItem>
                                    <div className="row">
                                        <Col>
                                            <Row xs="2">
                                                <Col style={{ textAlign: 'start' }}>
                                                    <span>Notifications</span>
                                                </Col>
                                                <Col style={{ textAlign: 'right' }}>
                                                    <span>View All</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                    <div style={{ height: 230, }}>
                                        <div className="notidiv">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                            <RiShoppingCartLine className="nor_Icon" />

                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Your order is placed</h6>
                                                    <div className="font-size-12 text-muted">
                                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                                        <p className="mb-0">
                                                            {/* <i className="mdi mdi-clock-outline" /> */}
                                                            <TbClockHour4 className="nor_Icon" />
                                                            3 min ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <div>
                        <UncontrolledDropdown className="me-2" direction="down">
                            <DropdownToggle caret color="light">
                                <img
                                    className="rounded-circle header-profile-user"
                                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxMzUwQThFNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxMzUwQThGNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDEzNTBBOEM0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDEzNTBBOEQ0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
                                />
                                &nbsp;admin&nbsp;
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>
                                    <RiUserLine className="headerProf_Icon" />
                                    Profile
                                </DropdownItem>
                                <DropdownItem header>
                                    <RiWallet2Line className="headerProf_Icon" />
                                    My Wallet
                                </DropdownItem>
                                <DropdownItem header>
                                    <RiSettings2Line className="headerProf_Icon" />
                                    Settings
                                </DropdownItem>
                                <DropdownItem header>
                                    <RiLockUnlockLine className="headerProf_Icon" />
                                    Lock Screen
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    <RiShutDownLine className="headerProf_Icon" />
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <div className="header_right_div" onClick={handleShow}>
                        <AiFillSetting className="nor_Icon" />
                    </div>
                </div>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Settings</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr></hr>
                    <Offcanvas.Body>
                        <div style={{}}>
                            <span>Layouts</span>
                            <br></br>
                            <label className="layout_vertical_label">Vertical</label>
                            <label className="layout_Horizontal_label">Horizontal</label>
                            <hr></hr>
                        </div>
                        <div style={{}}>
                            <span>Layout Width</span>
                            <br></br>
                            <label className="layout_vertical_label">Fluid</label>
                            <label className="layout_Horizontal_label">Boxed</label>
                            <hr></hr>
                        </div>
                        <div>
                            <span>Topbar Theme</span>
                            <br></br>
                            <label className="layout_vertical_label">Light</label>
                            <label className="layout_Horizontal_label">Dark</label>
                            <hr></hr>
                        </div>
                        <div>
                            <span>Left Sidebar Type</span>
                            <br></br>
                            <label className="layout_vertical_label">Default</label>
                            <label className="layout_Horizontal_label">Compact</label>
                            <label className="layout_Horizontal_label">Icon</label>
                            <hr></hr>
                        </div>
                        <div>
                            <span>Topbar Theme</span>
                            <br></br>
                            <label className="layout_vertical_label">Light</label>
                            <label className="layout_Horizontal_label">Dark</label>
                            <hr></hr>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </UserContext.Provider>
    );
}
