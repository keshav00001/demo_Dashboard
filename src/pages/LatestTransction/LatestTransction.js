import React from "react";
import "./latestTransction.css";
import { Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import CircleIcon from '@mui/icons-material/Circle';
export default function LatestTransction() {
    return (
        <div className="dash_transaction">
            <Card className="my-2 cardNotification">
                <CardBody>
                    <CardTitle className="cardTitle">Latest Transaction</CardTitle>

                    <Table responsive className="table table-centered table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>ID & Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheck1"
                                        />
                                    </div>
                                </th>
                                <td>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0NDlFQjBENEE1QzExRUE4RDNFRTQ2M0MyM0Y4NjcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0NDlFQjBFNEE1QzExRUE4RDNFRTQ2M0MyM0Y4NjcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ0OUVCMEI0QTVDMTFFQThEM0VFNDYzQzIzRjg2NzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ0OUVCMEM0QTVDMTFFQThEM0VFNDYzQzIzRjg2NzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
                                        alt="user"
                                        className="avatar-xs rounded-circle"
                                    />
                                </td>
                                <td>
                                    <p className="mb-1 font12">#AP1234</p>
                                    <h5 className="font15 mb-0">David Wiley</h5>
                                </td>
                                <td>02 Nov, 2019</td>
                                <td>$ 1234</td>
                                <td>1</td>
                                <td>$ 1234</td>
                                <td> <CircleIcon className="iconCnf" /> Confirm</td>
                                <td>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        className="btntransaction btn-outline-successTransaction btnTransaction-sm me-1"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="reset"
                                        value="Reset"
                                        className="btntransactionDanger btn-outline-DangerTransaction btnTransaction-sm me-1"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheck2"
                                        />
                                    </div>
                                </th>
                                <td>
                                    <div className="avatar-xs">
                                        <span className="avatar-titleTransactions rounded-circle bg-soft-primary text-success">
                                            W
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-1 font12">#AP1235</p>
                                    <h5 className="font15 mb-0">Walter Jones</h5>
                                </td>
                                <td>04 Nov, 2019</td>
                                <td>$ 822</td>
                                <td>2</td>
                                <td>$ 1664</td>
                                <td> <CircleIcon className="iconCnf" /> Confirm</td>
                                <td>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        className="btntransaction btn-outline-successTransaction btnTransaction-sm me-1"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="reset"
                                        value="Reset"
                                        className="btntransactionDanger btn-outline-DangerTransaction btnTransaction-sm me-1"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck3"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheck3"
                                        />
                                    </div>
                                </th>
                                <td>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NjVDMDg0NEE1QzExRUE4Q0Y3QjA4OUVBRTdFRkE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3NjVDMDg1NEE1QzExRUE4Q0Y3QjA4OUVBRTdFRkE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDc2NUMwODI0QTVDMTFFQThDRjdCMDg5RUFFN0VGQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDc2NUMwODM0QTVDMTFFQThDRjdCMDg5RUFFN0VGQTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
                                        alt="user"
                                        className="avatar-xs rounded-circle"
                                    />
                                </td>
                                <td>
                                    <p className="mb-1 font12">#AP1236</p>
                                    <h5 className="font15 mb-0">Eric Ryder</h5>
                                </td>
                                <td>05 Nov, 2019</td>
                                <td>$ 1153</td>
                                <td>1</td>
                                <td>$ 1153</td>
                                <td><CircleIcon className="iconCncel" /> Cancel</td>
                                <td>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        className="btntransaction btn-outline-successTransaction btnTransaction-sm me-1"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="reset"
                                        value="Reset"
                                        className="btntransactionDanger btn-outline-DangerTransaction btnTransaction-sm me-1"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck4"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheck4"
                                        />
                                    </div>
                                </th>
                                <td>
                                    <div className="avatar-xs">
                                        <span className="avatar-titleTransactions rounded-circle bg-soft-primary text-success">
                                            K
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <p className="mb-1 font12">#AP1237</p>
                                    <h5 className="font15 mb-0">Kenneth Jackson</h5>
                                </td>
                                <td>06 Nov, 2019</td>
                                <td>$ 1365</td>
                                <td>1</td>
                                <td>$ 1365</td>
                                <td> <CircleIcon className="iconCnf" /> Confirm</td>
                                <td>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        className="btntransaction btn-outline-successTransaction btnTransaction-sm me-1"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="reset"
                                        value="Reset"
                                        className="btntransactionDanger btn-outline-DangerTransaction btnTransaction-sm me-1"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="customCheck5"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="customCheck5"
                                        />
                                    </div>
                                </th>
                                <td>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyNzFFQUFGNEE1QzExRUE4RTVCQjc1RTQ1NDkyNjIwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyNzFFQUIwNEE1QzExRUE4RTVCQjc1RTQ1NDkyNjIwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTI3MUVBQUQ0QTVDMTFFQThFNUJCNzVFNDU0OTI2MjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTI3MUVBQUU0QTVDMTFFQThFNUJCNzVFNDU0OTI2MjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
                                        alt="user"
                                        className="avatar-xs rounded-circle"
                                    />
                                </td>
                                <td>
                                    <p className="mb-1 font12">#AP1238</p>
                                    <h5 className="font15 mb-0">Ronnie Spiller</h5>
                                </td>
                                <td>08 Nov, 2019</td>
                                <td>$ 740</td>
                                <td>1</td>
                                <td>$ 1480</td>
                                <td> <CircleIcon className="iconPnd" /> Pending</td>
                                <td>
                                    <Button
                                        type="submit"
                                        value="Submit"
                                        className="btntransaction btn-outline-successTransaction btnTransaction-sm me-1"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type="reset"
                                        value="Reset"
                                        className="btntransactionDanger btn-outline-DangerTransaction btnTransaction-sm me-1"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}
