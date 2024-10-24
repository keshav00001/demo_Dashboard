import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Badge,
    Button,
    Row,
} from "reactstrap";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertPageBreakIcon from "@mui/icons-material/InsertPageBreak";
import { RiBarChartLine, RiTable2 } from "react-icons/ri";
import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar,
    SubMenu,
} from "react-pro-sidebar";
import { Link } from 'react-router-dom';

import { AppContext } from "../../context/AppContext";

function AppSidebar(props) {
    const [open, setOpen] = useState("0");
    const { sideWidth } = useContext(AppContext);
    const { user, setUser } = useContext(AppContext)


    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const sendLogin = () => {
        setUser(true)
        // return (
        //     <Link to="/login" />
        // )
    };

    return (
        <aside className="sidebar">
            <Sidebar
                breakPoint="sm"
                transitionDuration={800}
                backgroundColor="#1b2c3f"
                rtl={false}

            >
                <Menu>
                    {sideWidth ?
                        <div className="logo">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAXCAYAAADz/ZRUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGOTdGMTNFQUZGMTExRUJCMTkwQTI4MjAwOUIwM0M2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGOTdGMTNGQUZGMTExRUJCMTkwQTI4MjAwOUIwM0M2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REY5N0YxM0NBRkYxMTFFQkIxOTBBMjgyMDA5QjAzQzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REY5N0YxM0RBRkYxMTFFQkIxOTBBMjgyMDA5QjAzQzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xBQwVAAACyUlEQVR42pyWSWgUQRSGq2aJygQxBg0iKtFD0MvMJBIRFEQRwejFixuIWwwMKq6oiBvG5SCCuERFvIkZokg8Cx40Cm4guBwERSXqaIwiojEz6fJ/yd/QGXp6mQcf3V1V1P/e63qvWyc625S3aa2UGRtRhTpjIj+MjrzBYKF4kdKmKmoVpls63mOUeoexfp+NVcRPGcJJXLOWinUZHX2E+/2gYvgaNUsZ3TGg4/ch/AzP20Cln3i0YuUSr/kGcBnM4bOIzgMx0MUMNIIrgw4MPY8AC8FfNeRIfzniaQrPdJmby02FCyBJsWsUHwfm+zkQ8Yj4Kq+lbB+4C+opcgZsAGvBC645CraCRFBxifgSSPm8slFgpEP4MMcfgxbwks/HeAYSfuL1ASJ22h9wlsL/HOMPQLMjA61gOx12FU9TOBVS+GCRsG0PwSbwyvEKdjJbw8RTPLHJgMKS6vMuEbs50FLkwA7bATntdTyl6RARnwOHQF+A9R/AczCbVbCAzr8W8dO4WRRQuIepbuUGQe0jS07O1AT2il5J+4wQm4h4O6MPa/IK7tj9BY2xQcRvh9hgKjgAassQXw+W8b4b34JOEb/IaIKYtNflTH1tSOFTYBr4zFN/U3r0NzYBsRUBN2viNcMD5WUbwUlQBXLseDecpZZjCbSHiKaJfX2yj7B0uGrwFWyxhYubjJ2ObEgH5IdgksvcOnAcjGd2JeIOr/b6iQ6EycBinpuJRe/4BOv6OyPOBvmwdINd4LqP6HvWrqEDbazhNUx1DUszUyqbsRIbiwO7ufEql/lesBc85WGSElpKwSm8SsSbi1MdRNx2YA8dWO0Y/2mXCshTIE7xRodzGa4x5f5G/QJPgAXGaGXwidRHGE2ea36De/IKMT8a82+ZlVtgwOvvUPv/vQ5aQiurWhtTsHQ0576proyafA3m+4zSXzyFKf5fgAEAXJe/wn1ndbwAAAAASUVORK5CYII=" />
                        </div>
                        : <div className="logo">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAYCAYAAADjwDPQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5RjBGNUM5QUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5RjBGNUNBQUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlGMEY1QzdBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlGMEY1QzhBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Dq0DYAAAFCElEQVR42uxaW2xURRie06VGhUQQtSZGLfpARBK2EG9PbjWaqEG3vnjhoYAEjLd0NcZbtIsG490ab3gtPklFA8VHTVYSCAlGWROjD8awTbxQRTlGlCplj9/IN/HfceacPbtQ2rB/8vVc5p85s/P9tzmnQRRFqiWTS6bpPzM2r01QCwKlopPb1PjcKGrbGwVt3+DmuK2kgmhWpjp+XjVo3wOqd+He30kT2HftrS0WLGmrQ0cTsgDHoaqati0KMjtw/hBwXK2OukhFwYaDQftWEPI5rvs0360lrpGZQI7HpkhZCLwBXH7oMtILXSSOp84F1LmMHnQi8GSLmBopAXt5zCaGrxjpAl4DFjnaHgD2Ax8BLwPzef0ucDEwD3iMugM6UrW8pPnwpYl420OIJKZEb9KEvADcAiwFvqSOJuYuYPoxTko2VaKP8ZCkgU7g0RBS5PWnwCrgdeB8YA3zjvaYP1L+GE3w2TwfAdbxvBPoFXrvABVHny28388+Ief6iehrj+USOb6xfP2cS3muxx0W8zPS7xirl/1GHPqol1ASW9WXtvq3UjD7J/AS8Ajwl9V2CYmZz+uHgWdJYr3VV4nJUXEhu3meY5uRbrHQss8mT3LVBlLwjOUSOX6W+q6QVAZ6BIFxew75e7zhq4shKw0hL3oI0bIdWAl8JULZPaJAmAjJ04qLlnf0CeJCtklUrHFC4VWSkLI1tl67jWlySBwperA3gQV19t3PBF/0ECKJWWURc/cEE6OtcbVlwUqErDJ1DJZZizpAHROOTFtFjN0txs4ytJlnF6z5FDz3a0iZy9i2sAEPGatDfys95mteryExp0wAIdLqQ8tbcp4+g5YnFKwcp0RoDMW1zA/XieeXHSHOdb+GlAdTeMge4Dlax1iKxdnGymwnrx8Flh+FKqhiJXjlSMwyrC2LIbGPOcOg2Ei15SNlXoo+mpT19Ja0okPZxzzPoM5YNMnK1py1sKt91nw49yU+Ujan6HMOq6g5DTxPe8b1PP8etd/wJNvcDVqhaSChT5Glvg9NkbKW1l+P6HdeNzCnzElJyDPAucCPrMI+aGIROxu02KyVb2Qe6fSELakfxszBlNaDDG1NkfIzB1mfou81JOasOnRXAE8Bs4BR7vCHEqo2X3hZSjyfYiedFec5K+Ga5J0X93usxVeeZJ63SO4Xc4zL0b3UyyWVxKOsiNIS80oCMStYbc0GfgLuBN5P8YxhR2U0GLNoLtlJC5b7C7OzV47dfMlK4JHYmcs8M1OMvcsqEAoejzRGUPJtWO3NowkrQymJeRU409GmQ8DjwGn0Ru0hG1J6xzpHsg1pzfVImchZhHQ7Noj1SGjt7o0Hd1p7ntCxN2n43dcPJEZbx411jnM189LKfxP4fzlEE3Iq8As9ZKiJRcjzfdZvJCq0XlGUY/r3ePrLBUuqliqOOZlweJLwat88Blg85IX+Fy5F17svI2cATwM3xUx0hAvexWrjQ+7er1CHvqeczhL6duC9/z9dqX2Lj8iXR9/7sikhcd9TtMXfS4+52dH+K3A/8BnwBEvdxUAHLbKDhN3RQMg6piXpI5cm5j4Ss8RyX1PSHuDCt5OUCwVpt1Gn9d8Zh5EULd/xNcxu4KpARaORCvS3lo0kxBQImoBv0X4l2n9nCaxj7MGj8LsKVlKfUhKXU2yZHqjqbHQYrwaZUfdiBzMy0YEOtI+BmN2JhBy5nDKl5R8BBgCMdGfuVhfRjQAAAABJRU5ErkJggg==" />
                        </div>}
                    <MenuItem icon={<HomeOutlinedIcon className="fontIcon18" />} component={<Link to="/" />}>
                        {" "}
                        Dashboard{" "}
                        <NavLink to="/">
                            <Badge className="badge1 rounded-pill float-end">3</Badge>
                        </NavLink>
                    </MenuItem>
                    <MenuItem icon={<HomeOutlinedIcon className="fontIcon18" />} component={<Link to="/CalendarEvent" />}>
                        {" "}
                        Calendar{" "}

                    </MenuItem>
                    <SubMenu
                        icon={<InsertInvitationOutlinedIcon className="fontIcon17" />}
                        label="Email"
                    >
                        <MenuItem className="subItempadding" component={<Link to="/inbox" />}> Inbox </MenuItem>
                        <MenuItem className="subItempadding" component={<Link to="/read-email" />}> ReadEmail </MenuItem>
                        <MenuItem className="subItempadding" component={<Link to="/email-compose" />}> Email Compose</MenuItem>
                    </SubMenu>

                    <SubMenu
                        icon={<AccountCircleOutlinedIcon className="fontIcon17" />}
                        label="Authentication"
                    >
                        {/* <MenuItem className="subItempadding" component={sendLogin()}> Login </MenuItem> */}
                        <MenuItem className="subItempadding" component={<Link to="/login" />}> Login </MenuItem>
                        <MenuItem className="subItempadding" component={<Link to="/register" />}> Register </MenuItem>
                        <MenuItem className="subItempadding" component={<Link to="/recover-password" />}> Recover Password </MenuItem>
                        <MenuItem className="subItempadding" component={<Link to="/lock-screen" />}> Lock Screen </MenuItem>
                    </SubMenu>

                    <SubMenu
                        icon={<InsertPageBreakIcon className="fontIcon17" />}
                        label="Utility"
                    >
                        <MenuItem className="subItempadding"> Starter Page </MenuItem>
                        <MenuItem className="subItempadding"> Maintenance </MenuItem>
                        <MenuItem className="subItempadding"> Profile </MenuItem>
                        <MenuItem className="subItempadding"> Coming Soon </MenuItem>
                        <MenuItem className="subItempadding"> Timeline </MenuItem>
                        <MenuItem className="subItempadding"> FAQs </MenuItem>
                        <MenuItem className="subItempadding"> Pricing </MenuItem>
                        <MenuItem className="subItempadding"> Error 404 </MenuItem>
                        <MenuItem className="subItempadding"> Error 500 </MenuItem>
                    </SubMenu>

                    <SubMenu icon={<RiTable2 className="fontIcon17" />} label="Tables">
                        <MenuItem className="subItempadding"> Basic Tables </MenuItem>
                        <MenuItem className="subItempadding"> Data Tables </MenuItem>
                        <MenuItem className="subItempadding"> Responsive Table </MenuItem>
                        <MenuItem className="subItempadding"> Editable Table </MenuItem>
                    </SubMenu>

                    <SubMenu
                        icon={<RiBarChartLine className="fontIcon17" />}
                        label="Charts"
                    >
                        <MenuItem className="subItempadding"> Apex Charts </MenuItem>
                        <MenuItem className="subItempadding"> Chartjs Charts </MenuItem>
                        <MenuItem className="subItempadding"> Re Charts </MenuItem>
                        <MenuItem className="subItempadding"> Knob Charts </MenuItem>
                        <MenuItem className="subItempadding"> Sparkline Charts </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

            {/* <div className="logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAYCAYAAADjwDPQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5RjBGNUM5QUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5RjBGNUNBQUZFRTExRUJBN0U1QTY5NDZFNUZCQUYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlGMEY1QzdBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlGMEY1QzhBRkVFMTFFQkE3RTVBNjk0NkU1RkJBRjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Dq0DYAAAFCElEQVR42uxaW2xURRie06VGhUQQtSZGLfpARBK2EG9PbjWaqEG3vnjhoYAEjLd0NcZbtIsG490ab3gtPklFA8VHTVYSCAlGWROjD8awTbxQRTlGlCplj9/IN/HfceacPbtQ2rB/8vVc5p85s/P9tzmnQRRFqiWTS6bpPzM2r01QCwKlopPb1PjcKGrbGwVt3+DmuK2kgmhWpjp+XjVo3wOqd+He30kT2HftrS0WLGmrQ0cTsgDHoaqati0KMjtw/hBwXK2OukhFwYaDQftWEPI5rvs0360lrpGZQI7HpkhZCLwBXH7oMtILXSSOp84F1LmMHnQi8GSLmBopAXt5zCaGrxjpAl4DFjnaHgD2Ax8BLwPzef0ucDEwD3iMugM6UrW8pPnwpYl420OIJKZEb9KEvADcAiwFvqSOJuYuYPoxTko2VaKP8ZCkgU7g0RBS5PWnwCrgdeB8YA3zjvaYP1L+GE3w2TwfAdbxvBPoFXrvABVHny28388+Ief6iehrj+USOb6xfP2cS3muxx0W8zPS7xirl/1GHPqol1ASW9WXtvq3UjD7J/AS8Ajwl9V2CYmZz+uHgWdJYr3VV4nJUXEhu3meY5uRbrHQss8mT3LVBlLwjOUSOX6W+q6QVAZ6BIFxew75e7zhq4shKw0hL3oI0bIdWAl8JULZPaJAmAjJ04qLlnf0CeJCtklUrHFC4VWSkLI1tl67jWlySBwperA3gQV19t3PBF/0ECKJWWURc/cEE6OtcbVlwUqErDJ1DJZZizpAHROOTFtFjN0txs4ytJlnF6z5FDz3a0iZy9i2sAEPGatDfys95mteryExp0wAIdLqQ8tbcp4+g5YnFKwcp0RoDMW1zA/XieeXHSHOdb+GlAdTeMge4Dlax1iKxdnGymwnrx8Flh+FKqhiJXjlSMwyrC2LIbGPOcOg2Ei15SNlXoo+mpT19Ja0okPZxzzPoM5YNMnK1py1sKt91nw49yU+Ujan6HMOq6g5DTxPe8b1PP8etd/wJNvcDVqhaSChT5Glvg9NkbKW1l+P6HdeNzCnzElJyDPAucCPrMI+aGIROxu02KyVb2Qe6fSELakfxszBlNaDDG1NkfIzB1mfou81JOasOnRXAE8Bs4BR7vCHEqo2X3hZSjyfYiedFec5K+Ga5J0X93usxVeeZJ63SO4Xc4zL0b3UyyWVxKOsiNIS80oCMStYbc0GfgLuBN5P8YxhR2U0GLNoLtlJC5b7C7OzV47dfMlK4JHYmcs8M1OMvcsqEAoejzRGUPJtWO3NowkrQymJeRU409GmQ8DjwGn0Ru0hG1J6xzpHsg1pzfVImchZhHQ7Noj1SGjt7o0Hd1p7ntCxN2n43dcPJEZbx411jnM189LKfxP4fzlEE3Iq8As9ZKiJRcjzfdZvJCq0XlGUY/r3ePrLBUuqliqOOZlweJLwat88Blg85IX+Fy5F17svI2cATwM3xUx0hAvexWrjQ+7er1CHvqeczhL6duC9/z9dqX2Lj8iXR9/7sikhcd9TtMXfS4+52dH+K3A/8BnwBEvdxUAHLbKDhN3RQMg6piXpI5cm5j4Ss8RyX1PSHuDCt5OUCwVpt1Gn9d8Zh5EULd/xNcxu4KpARaORCvS3lo0kxBQImoBv0X4l2n9nCaxj7MGj8LsKVlKfUhKXU2yZHqjqbHQYrwaZUfdiBzMy0YEOtI+BmN2JhBy5nDKl5R8BBgCMdGfuVhfRjQAAAABJRU5ErkJggg==" />
            </div>
            <div className="navbar">
                <div className="menu-lists dash">
                    <NavLink to="/">
                        <HomeOutlinedIcon className="fontIcon18" /> <span>Dashboard</span>
                        <Badge className="badge1 rounded-pill float-end">3</Badge>
                    </NavLink>
                </div>

                <div className="menu-lists">
                    <Accordion open={open} toggle={toggle}>
                        <AccordionItem>
                            <AccordionHeader targetId="1"> <InsertInvitationOutlinedIcon className="fontIcon17" /> <span>Email</span></AccordionHeader>
                            <AccordionBody accordionId="1">
                                <NavLink to="/inbox">Inbox</NavLink>
                                <NavLink to="/read-email">ReadEmail</NavLink>
                                <NavLink to="/email-compose">Email Compose</NavLink>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="2"><AccountCircleOutlinedIcon className="fontIcon17" />Authentication</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                                <a href="#">Recover Password</a>
                                <a href="#">Lock Screen</a>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3"><InsertPageBreakIcon className="fontIcon17" />Utility</AccordionHeader>
                            <AccordionBody accordionId="3">
                                <a href="#">Starter Page</a>
                                <a href="#">Maintenance</a>
                                <a href="#">Profile</a>
                                <a href="#">Coming Soon</a>
                                <a href="#">Timeline</a>
                                <a href="#">FAQs</a>
                                <a href="#">Pricing</a>
                                <a href="#">Error 404</a>
                                <a href="#">Error 500</a>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="4"><RiTable2 className="fontIcon17" /> Tables</AccordionHeader>
                            <AccordionBody accordionId="4">
                                <a href="#">Basic Tables</a>
                                <a href="#">Data Tables</a>
                                <a href="#">Responsive Table</a>
                                <a href="#">Editable Table</a>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="5"><RiBarChartLine className="fontIcon17" />Charts</AccordionHeader>
                            <AccordionBody accordionId="5">
                                <a href="#">Apex Charts</a>
                                <a href="#">Chartjs Charts</a>
                                <a href="#">Re Charts</a>
                                <a href="#">Knob Charts</a>
                                <a href="#">Sparkline Charts</a>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div> */}
        </aside>
    );
}

export default AppSidebar;
