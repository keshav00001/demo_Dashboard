import React from "react";
import Header from "../../components/Header/Header";
import { Breadcrumbs } from "@mui/material";
import { Card, CardBody, Col, Label, Row } from "reactstrap";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Composemail from "../Composemail/Composemail";
import MailRow from "../../components/MailRow/MailRow";
import ReplyIcon from '@mui/icons-material/Reply';
import './readEmail.css'
import ReadMailComponents from "../../components/ReadMailComponents/ReadMailComponents";
export default function ReadEmail() {
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
            Read Email
        </Typography>,
    ];
    return (
        // <div>
        //     ReadEmail
        // </div>
        <div style={{ background: "#F3F3F4" }}>
            <div style={{ background: "#FFFFFF" }}>
                <Header />
            </div>
            <div className="inboxLayout">
                <Row>
                    <Col>
                        <Label className="label1">Read Email</Label>
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

                        <ReadMailComponents />
                        {/* <div>
                            <Card className="card1">
                                <CardBody>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0 me-3">
                                            <img
                                                alt="Card cap"
                                                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxMzUwQThFNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxMzUwQThGNEE1QzExRUE4RTYyOTYxRkE2QTc0QUVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDEzNTBBOEM0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDEzNTBBOEQ0QTVDMTFFQThFNjI5NjFGQTZBNzRBRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCACAAIADAREAAhEBAxEB/8QAlAAAAwADAQEBAAAAAAAAAAAABQYHAwQIAAECAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAIBAgQDBQUEBwcFAAAAAAECAxEEACESBTFBBlFhIhMHcYGRMhShsUIjwdHhUmKCFXKSM0MkJQiisnM0FhEAAgIDAAICAgMBAQAAAAAAAAERAiExA0ESUWETBIEiFHGx/9oADAMBAAIRAxEAPwDpgYhD2IQ9iEPh4YhADuqa7+3H8VcWWgw01va2slxcypBbQrqmnlYJGijmzMQoHtxCiVdV/wDJnoTaWeDZkl6guUNDJCRBaA/+aQVfP9xTipCVWIJ/5UdVSz6oLCxSMnOBkdwBX8MmpTw7RiST1+zQ3z1fXf7mE7tZmzljFPNt21IQ3AlGNR7icJ7UdtGjlZV2fEmjuIxNBMJYm4OrVGEw0PmdGzah6DxNx7ThbIPPTqsI1NT8cC2QY7gsEGfLABwawkYI2ZwSBYmbvO/9UjBY6a+LPlgiIc9rFmbVAhNTSpDZ4CRkFOx1DknsQh9GIQ/LnI4tEEvq/qvZem0m3neJjFYWaioUAySyN8kMS/idzw+JxTCqjln1L9V+pOvb8/Vt9HscTE2WzRsTEo5PMf8AOk/iOQ/CBigkoE9IdWbeI8q8P2nFSSDbhUA5A1HAgDFBG5fQPLapdqCZIBpkFKEoefuOIRo/Wzbne2colt30k8VYeB+5uX6cU1JdW0U3Yb+DcbUSxgpIh0zwnMo36VPI4yXrDNFbSUbp+P8AKXC2EGrsUX3YAM0dX5bYJAMSdzk/3aOvy18XswREPG2ixa1RUAANKkHADYKgpqMdY5J+qYoh7EIY5iAhqQBxJPADtOLIcWesvX7dX9WzG1krsm2u9vtqA+GQg6ZLg97kUHYuBYa0I8CM8mleIFWY8FUcScUy1kNbdt11csqxQMsZyEj1BPuHAYW7JDqUbGax6NedgCKH8XE/owH5h/8AmYdsujI4Q8cx8xnBXRTI1xT6lr9eBW3HpS52yV3VGeOtCo7O8YKtxV+UGfZNxbbrmO+iPmW4PlXSDmlcww5MvHBWr7KBacMvPTZjltopI21owDKw5g8MYmaEF70ZYBhIFStSNvfgkUxGvpf92TV8gPiwfgFbHnb2s2tkVaBDTMHCR/gqsZyx2GcgyDFEPYhBE9a+p36d9N94vIW0XlygsbQ8xJcnQW/lTUcWRLJxLQKPD8o8KjuGBDkZenNnE2nzMg5DOO2nyj2YR0vBq4cpKbtW1QrEojSlM64yOx0a84DdrCEFacOGAkOAtZ2iuakV/bgkwLH53Xp62vEowIbhqFP04KQGiOdS2bbHuzTBdUdfLuVHySRE/i/iXiDjXTKOf0UMqnpJuwktX20yGTyKNbk8TE58P905HGfqvIdPgoN+KL7sZ2NQDujSNvZgkUxEunU7uuv5K54Z4BqO1kbVrdFGUZpnwwkdCgqltexyKCD78dx1OOrG0J0wHqXJ+HuUHPFqpJOf/wDlVv4bbdl2iNv8SaW5dRz0L5YPxY0wN1GAqfJzxFAZJoYhxbM+wn9WAkNLI97JGiGNqUByHuxh6PJ1eCwPuyymgHEHhhDZqQbgSmqo4ZjFEYSsZUDAHhgqsXZGxuG6bbYxhr25itVNNPmuFJr3E1OGpNiLWS2T3rew2jd9ovb/AG25juZbeMvLHGfmQZnI/fhlW6vIq6rdYB3pFvGwW+0SXN3LId3jYQWSKPDoLAq7H+IVB7KDBdK5gRV4TLdNMk0CyowKsK1HCvP7cY2PQGvTSF/Zi0RiDO6/1YF80rnhvgCo52vktbopyiNM8IQ7wUDbkuUQAg470nHgIhpac8CSAdum4vZxmRq5cMRsJVOVfW7qP+t9aBUNYbCIQJ7a1b78KbkNqMCntUYe5mlpURCifyjPAWYyuxk2Ca/uIlS1snuShoDqVAT2CuZxl6JJ5Zv42s1hDLadSXu2yqu47NdQRA+KWOkoA7fCM/Zhf409NDn2tXdX/wCjxb7jazACKQNrUFeWRFRkeGEwOky3tnub7bMLWZbW7dSIblwWWNv3yBxoMXVwwbZWCZ7Lu/k9QLDt+0S9S7q7aEudxkjiMpLBPyEkqACzChY1I7sbq87XW4+jmW7Uo9S/kpFlvln1NtEkgsmtHhMlrPHIoGmSlHVSMiORplhHSrqzVyv7ES6bJ2/cbi0b5Ulkg9jI5Aw+zmGZK1iUdGdNzSzbFbTzHQZFUiN/C+Y+bvU0qMY+iyOqe3Gv07ngKYGpbJ67qN4q4qtcNegKjhC8LwqrHTG1M+FMJWx2ILGqKoIAx3DkSfSABiQVJP8A1N39Nu2ibT/jEEKO888VdQgqOWch7hcm63SadjXU5oe4HCVoY9hLYovyCzf5rNX2HSMDYZTRsl76CxWO1kZAz0bT8woeIHaMJUe2TS/ZV/qMXRuxXt1u4nuxeyWKq7ed9U0LeZQ50PhapK1GnkeNcFfpzSyL58ertKf8m3cXG5bdu1p59ytw4bRO8YIU1OXzUJxkUM3ttNFfiQX+zBOIkTQ9MjRhnmMRLBG8izbdA7FHdJLcWMbmPJQ2o5Upma14YOvS68i7cqPMDMNvgjto7a1hSC1iGmOOMBVA7gMXbOSq4IPfvFt3qHvkBjDeTdC4txw8dFfL34ZE1Rnb/vZFh6N3++3uKa4vAqzQlY0jUUVE0FlUDuxn6KAq7Dm5/wDqseVMLqEyc6lG8ksNS8KYd4AqHiw0qrtpQnLAIYy3JeRFmAYHPHYTOU0elu10nPIZ4JAwc++uPUOmOS2R6u5pUHmcK6WnA7nWCCBs2I7MvflgSSMVp+THAnYo+PzYWx9Ql03JBM7QyioDsFJ/tHGfsoNn67lFQ26CNLQCPsxjbNyQmdW0t7pFb55G1L20XicN55EdcFV9Prie72mOOmvSMyM69mLqDf5Ny9vXgvjb3Meg18J5HAu2QlVNYN5CjRAqciK4NMH1OdfUeB4PUncXXJpRBKveWjpT36aY00c0MXVR0Za/TLp+6G2Ddrj8i0vI1aIsauwRaAhfZljPdSWnDDW8kG2ehDKBRWGVRhC2NeiaxsF3dtQ1AmmHvQtBe4QUUSGikimBqHYNWHWMjuX1kVY/fjX+cT+CQu3VTSwGNX8ZUjUO8ZVxf+gr/Oc+epV/JNu5hLFmUas+1sv14vm5yB0UYE2JCzoBmWYfqwyRUDA40Mq8xGAw/wCr7hhSyPeDU6au2Wj1z1En41xO1Q/1blk6bvEngUcguObdHWq5AnVFvDe7ok8QRvJUoFeulu2tO/B88IX0yxk6GSay2uRL+XzbWY+U4qUVAeOphpyI55YKc4BSwM8110/9F5ct3blFKpFGJVZgeChQCWOI6OCsybW2xsLaobUgNAeOWBRbIR6vTLb+oYkU0paweZ3EMxUnGzipp/Jz+7i/8Fj6G3643+Ca7kAhgESRw2sf+ChABYqvLVxpjN2UYD5oMbsP9C54ADn34VXYx6JxbkDd2qKgnDnoWg7exoYwJOBppOAq8h20Ddqt4mrragBOGQU+kBSGW2hl01ypSp78UkX+SSGdXz/Vb/uEitqSOTy1YcPDkKe3GvlhGXrlsHbfGnnamySMVPu5fHB3eAaLJv3TaVuJmNXWNmUd7ZAfDFVRd2CthuVhuxGT4ZKAE9o/XgutZQH69osUzp3cmt5o4yaxS+GvZXHOujsc7H3rG0vIryP+mXIjTQKgrqOokknVy+GL42XlFdqucAnath6lu9WqS4rL4XpQow7zWnfmMaH0oiUq35K30N0htuzIl09ZtwZSqOx1+WCKGjEZsRlXlywu3X2wtF3fgN7tue29PbVebnuEgg2+1UySEcTX5UQc2dslHbhSq24Qu10lLOZeoNzu98uZd9u1Cz38rSGMZiNOEcY7kQDG6q9cHOs3bL8l+9GdsmsOioxdArNcv5ioeJjp4TjD3c2NPNQhl34/6R+ymFV2G9E1tjp3V6iqk0w96AQZ3EflgO3hqKYXXYVtCDa9WNCzIUY5n78OBfNszN1HPcHwgqpyNeJGAYyvOBHeGSWyvbkgljKGc97MxpjUrZRmdZTZqQppkSIZDUDIfYK092D+xf0Y9xumMQVR87B39g4DB1QF2CxGTmvtFPjg5FQOnTt7cywIT4mFM+eWMXWqk6XC7aD0m4TeehuEOkZaiMsJ9TR7Dz0xLDNGrEDSM1GFWWR1Xgcodx2yztGubmZYIUzd25ewDMnuGGVFXOePVPrncOqt/wDpwWh2axYmys/4qUM8tPmkPL90ZDnjdxqkp+TmfsXdrR4Rh2AWxhImXWLejqgpUFhRWocjRhmOeJZEqVv0y6mZ7cxThREXYNoyCk8GUHgK8u/GPtU0c2PW/wAcqWLPIumtRnlw5Z88ISGSTayam5ufmUnOmHPQC2Et2GmNatVSRTuzwNdhX0SjUnmPn+I/fhrGJhvpjaL7er1Lbb7d7khgHaMeBe95D4FA51OK9W9EtdV2aXW22wdN7hLYx3EVzZXYEkghYSGKRSfC5HNSTTuw2lW/+ma11/ABjskUh66hNpavaCCK/A4L2K9M/wDQXucDROwYeI6VPdTjh9TNfBr2oBLKRxBp7Ri2DUYejJNUrw/iQ1p3HnhHdeTV+tbEFStdmjubWjLQ0yxnNkhPaNoS1WrIAv4qVFfdioLQE673GGCycxCgUeE957MEsuAbYUkWfMtK/wA8zVPbpr+nG1fBzX8/IZ2KUpeymmpdNHHagoSPhgL6GUWSy+mmzWOxySbtvTmCzNJrFHFfMyqTTjqoQRljO3LGtQhj3jqrcN3vfr7iNYVQCHyl4sATpkccKsDnTD05yxPqloL2OzdO3W3iS4txJuM2QkRfL0hTyZePvwT51sD72TwLPWfT9xtkEdyGM1jK4RZSKGOQnJHp28jzxlvxdH9GivVWX2TbpbZ+nYLz6jfIJN00MxNnE5SGvIFhm9G9xw5UF2u/BTb31A3KTam2vYLG22a3JNDbRqCFI8S5CmZ58cG24gWq5lkT6g2edJ5Rdv8AmOxZpCa1J5nEqFYEbdfGHRa3Azt3IA7Y34gezlir0nIXO8KDc6ntI5bW2uoaE6Rw/ECKqfhiuVvBO9ZyA7O3aUa4TV1PyVzrT5feOGHNiao3umZGtt3ikNQpYoe+udDgOuajOGLHQPTMkE1ulOzGM3sIX7QwxmoABxTZaJF6k7gCixg8TWgwfFSxf7FoqTieopnyA9mNiMDDvTU8UG4W11IutYpF86L95R8y/wAyVwvopUDeb8lDuN73Dcd12i1mlLWVrJ5FsKZCJDqTV3mNqV7sIohth0sp4Fu7u5mjEihE/INPEoqoancRnhreRSQ19Mhns5L6eihiSlMhTuw6qFW2MWzra3+33Md5Ctxa3IMLxOKgqcviOIOCiUA8Mge2beynxUqDSh4FSK4GA5D+yx1le1kSkwXwjgDXgPbiEkUPUEQxxTmaiGNfC1K1qaBVXmScsL8jHoliedLdr4Tq514/Zhr0KrMhq7nNzttynO2dSjUp4CMx7mGEpQ0Pbmr+gHGJY2EqVBatadxw4zfZt7XfJDdv5y64paggfMKnJl7wfswN6yhnO8MtnSNyGs4biGVXQqvmoDmr81IPDGKyhnRo00Mu8yRfSFwamnDFMKpDesrg3G5FRmsdagdww7joz/sbFjRqjVu2uNJkgy2hOdDSuX8yYGxdCqemlj9Ut5PuEixxxwKLYvxZzkQv8uMs5NVlgYtueXc9zZEXi4WM9o519mHVWRD0UO/cW9vbbTbmrADX+344cxS+RitFWztYbcGr5aqcyeOCFvJIbe1CtHJ+BqioFSQMxSvLFBmfqBGsktd0iOl4XSO4I4GJzQk+zjgXsJZEf1UMaXtrcr4ldCUQjLVpyNO4nAsKuhH21bG3iZ5GDzPXUxyAAz0juJzY+7AWbbGVSSMcHlPb3MzVKEaEXgSDnX+Zh8MG9oBaZp3BkhIhWldAL/2mzp9uDQt4watvGGk0kVJoCD2cPsxbBSK56FxzjrBLKVfqLaWzuhfrJR10xFDC1D+IMSAew4HYbbReLvpjpuZCs22xNlw0sB9hxHzr8EXW3yQX1l2ezsLhJbO1jtrMEKyxqFqCdJJ5n34Slkc7f1ySiOQBvJIzBqrdo54c15Ep+DasLaVoTIFqrsJFPv0/dgL2Gc64kf8Ao+FmjDMxVBLJmDnknAe7Ckhl2Urom1SCK63SUaYIK0oMiV4D44dRCbsZen7d7i6l3C5HjByU/hPZg0hdmHbC4+pvXnr/AKeA6EP7z1wSBaxAgbBbNJZRjTWRCS2VPYMWizP1Lt7ydM3yAHOJjwrUgVwFlgKryT/1O2W/uOkts3SCMPEoXzYhXWgK0FMvlPPFMi2SEx3DOqaWIPzZGlBiyfQTsPMCvqjZhXRGCD8x/VXC2sjE8Gve6vqdaxsaNqY0Odcqe6mGV0BZ5Mflul6oVG0udUeR/unE8AzksnoZZt/9De3JBBis9JBBofMdQKd5oa4pbCtotklQnOvYDggERj1ljVthmD1ae4mVEoOCqanCXhyPWVBEDZ3Ic+Bi8SNUgHllXDZFeuQztN3KtlGNBppEY8J5kVwq9cjudsIY9juLmK5itowdDkshIOTsNIPflywMBNlmkVLXbrLaIczSOZwBmXb5Af8Auw76EfYYnmlhhg2ixFbyfN2GYjX8TE9w+3BA/YY21IkZLaGv01rmzcdTcziwWf/Z"
                                                class="rounded-circle avatar-sm avtarImag"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h4 className="font-size-16">Frankie Dyer</h4>
                                            <p className="text-muted font-size-13">
                                                support@domain.com
                                            </p>
                                        </div>
                                    </div>
                                    <h4 className="font-size-16">This Week's Top Stories</h4>
                                    <p>Dear Shane,</p>
                                    <p>
                                        Praesent dui ex, dapibus eget mauris ut, finibus vestibulum
                                        enim. Quisque arcu leo, facilisis in fringilla id, luctus in
                                        tortor. Nunc vestibulum est quis orci varius viverra.
                                        Curabitur dictum volutpat massa vulputate molestie. In at
                                        felis ac velit maximus convallis.
                                    </p>
                                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                    <p>Sincerly,</p>

                                    <hr />

                                    <Row>
                                        <Col className="col-xl-2 col-6">
                                            <div className="card1">
                                                <img
                                                    className="card-img-top img-fluid"
                                                    src="http://upzet-v-light.react.themesdesign.in/static/media/img-3.6698e5084e82235f075e.jpg"
                                                    alt="Card cap"
                                                />
                                                <div className="py-2 text-center">
                                                    <a className="fw-medium" href="/read-email">
                                                        Download
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="col-xl-2 col-6">

                                            <div className="card1">
                                                <img
                                                    className="card-img-top img-fluid"
                                                    src="http://upzet-v-light.react.themesdesign.in/static/media/img-4.92a6d39970e59f1556cb.jpg"
                                                    alt="Card cap"
                                                />
                                                <div className="py-2 text-center">
                                                    <a className="fw-medium" href="/read-email">
                                                        Download
                                                    </a>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>

                                    <div className="replyDiv">

                                        <a className="replyBtn" href="/compose-email">
                                            <ReplyIcon /> Reply
                                        </a>
                                    </div>

                                </CardBody>
                            </Card>
                        </div> */}
                    </Col>
                </Row>
            </div>
        </div>
    );
}
