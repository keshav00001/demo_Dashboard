import React, { useState, useMemo } from "react";
import { Card, CardBody, Form, FormGroup, Input } from "reactstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaSave, FaTrashAlt, FaTelegramPlane } from 'react-icons/fa';
import "./emailComposeComponents.css";

function EmailComposeComponents() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleChange = (data) => {
        setEditorState(data);
    };
    var htmlData = useMemo(
        () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
        [editorState]
    );

    const toolbarOptions = {
        options: ["inline", "fontSize", "image", "emoji"],
        inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
        },
    };

    return (
        <div>
            <Card className="cardECompose">
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="To"
                                type="email"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                type="text"
                            />
                        </FormGroup>
                    </Form>

                    <div className="app_Ed">
                        {/* <Editor
                            editorState={editorState}
                            onEditorStateChange={handleChange}
                            wrapperClassName="editor-wrapper"
                            editorClassName="message-editor"
                            toolbarClassName="message-toolbar"
                            toolbar={toolbarOptions}
                        />
                        <div className="html-output">{htmlData}</div> */}
                        <div id="email-editor" style={{ minHeight: 360 }}>
                            <form method="post" className="">
                                <div
                                    id="rdw-wrapper-1549"
                                    className="wrapperClassName rdw-editor-wrapper"
                                    aria-label="rdw-wrapper"
                                >
                                    <div
                                        className="rdw-editor-toolbar toolbarClassName"
                                        aria-label="rdw-toolbar"
                                        aria-hidden="false"
                                        style={{ visibility: "visible" }}
                                    >
                                        <div className="rdw-inline-wrapper" aria-label="rdw-inline-control">
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Bold"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMjM2IDBjMS42NTIgMCAyLjk0LjI5OCAzLjg2Ni44OTMuOTI1LjU5NSAxLjM4OCAxLjQ4NSAxLjM4OCAyLjY2OSAwIC42MDEtLjE3MyAxLjEzOS0uNTE2IDEuNjEtLjM0My40NzQtLjg0NC44My0xLjQ5OSAxLjA2OC44NDMuMTY3IDEuNDc0LjUyMyAxLjg5NSAxLjA3MS40MTkuNTUuNjMgMS4xODMuNjMgMS45MDMgMCAxLjI0NS0uNDQ0IDIuMTg3LTEuMzMgMi44MjUtLjg4Ni42NDEtMi4xNDQuOTYxLTMuNzY5Ljk2MUgwdi0yLjE2N2gxLjQ5NFYyLjE2N0gwVjBoNi4yMzZ6TTQuMzA4IDUuNDQ2aDIuMDI0Yy43NTIgMCAxLjMzLS4xNDMgMS43MzQtLjQzLjQwNS0uMjg1LjYwOC0uNzAxLjYwOC0xLjI1IDAtLjYtLjIwNC0xLjA0NC0uNjEyLTEuMzMtLjQwOC0uMjg2LTEuMDE2LS40MjctMS44MjYtLjQyN0g0LjMwOHYzLjQzN3ptMCAxLjgwNFYxMWgyLjU5M2MuNzQ3IDAgMS4zMTQtLjE1MiAxLjcwNy0uNDUyLjM5LS4zLjU4OC0uNzQ1LjU4OC0xLjMzNCAwLS42MzYtLjE2OC0xLjEyNC0uNS0xLjQ2LS4zMzYtLjMzNS0uODY0LS41MDQtMS41ODItLjUwNEg0LjMwOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Italic"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcgM1YyaDR2MUg5Ljc1M2wtMyAxMEg4djFINHYtMWgxLjI0N2wzLTEwSDd6Ii8+PC9zdmc+"
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Underline"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTYuMDQ1IDJ2Ljk5Mkw0Ljc4NSAzdjUuMTcyYzAgLjg1OS4yNDMgMS41MTIuNzI3IDEuOTU3czEuMTI0LjY2OCAxLjkxOC42NjhjLjgzNiAwIDEuNTA5LS4yMjEgMi4wMTktLjY2NC41MTEtLjQ0Mi43NjYtMS4wOTYuNzY2LTEuOTYxVjNsLTEuMjYtLjAwOFYySDEzdi45OTJMMTEuNzM5IDN2NS4xNzJjMCAxLjIzNC0uMzk4IDIuMTgxLTEuMTk1IDIuODQtLjc5Ny42NTktMS44MzUuOTg4LTMuMTE0Ljk4OC0xLjI0MiAwLTIuMjQ4LS4zMjktMy4wMTctLjk4OC0uNzY5LS42NTktMS4xNTItMS42MDUtMS4xNTItMi44NFYzTDIgMi45OTJWMmg0LjA0NXpNMiAxM2gxMXYxSDJ6Ii8+PC9zdmc+"
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Strikethrough"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4wNCA1Ljk1NGg2LjIxNWE3LjQxMiA3LjQxMiAwIDAgMC0uNzk1LS40MzggMTEuOTA3IDExLjkwNyAwIDAgMC0xLjQ0Ny0uNTU3Yy0xLjE4OC0uMzQ4LTEuOTY2LS43MTEtMi4zMzQtMS4wODgtLjM2OC0uMzc3LS41NTItLjc3LS41NTItMS4xODEgMC0uNDk1LjE4Ny0uOTA2LjU2LTEuMjMyLjM4LS4zMzEuODg3LS40OTcgMS41MjMtLjQ5Ny42OCAwIDEuMjY2LjI1NSAxLjc1Ny43NjcuMjk1LjMxNS41ODIuODkxLjg2MSAxLjczbC4xMTcuMDE2LjcwMy4wNS4xLS4wMjRjLjAyOC0uMTUyLjA0Mi0uMjc5LjA0Mi0uMzggMC0uMzM3LS4wMzktLjg1Mi0uMTE3LTEuNTQ0YTkuMzc0IDkuMzc0IDAgMCAwLS4xNzYtLjk5NUM5Ljg4LjM3OSA5LjM4NS4yNDQgOS4wMTcuMTc2IDguMzY1LjA3IDcuODk5LjAxNiA3LjYyLjAxNmMtMS40NSAwLTIuNTQ1LjM1Ny0zLjI4NyAxLjA3MS0uNzQ3LjcyLTEuMTIgMS41ODktMS4xMiAyLjYwNyAwIC41MTEuMTMzIDEuMDQuNCAxLjU4Ni4xMjkuMjUzLjI3LjQ3OC40MjcuNjc0ek04LjI4IDguMTE0Yy41NzUuMjM2Ljk1Ny40MzYgMS4xNDcuNTk5LjQ1MS40MS42NzcuODUyLjY3NyAxLjMyNCAwIC4zODMtLjEzLjc0NS0uMzkzIDEuMDg4LS4yNS4zMzgtLjU5LjU4LTEuMDIuNzI2YTMuNDE2IDMuNDE2IDAgMCAxLTEuMTYzLjIyOGMtLjQwNyAwLS43NzUtLjA2Mi0xLjEwNC0uMTg2YTIuNjk2IDIuNjk2IDAgMCAxLS44NzgtLjQ4IDMuMTMzIDMuMTMzIDAgMCAxLS42Ny0uNzk0IDEuNTI3IDEuNTI3IDAgMCAxLS4xMDQtLjIyNyA1Ny41MjMgNTcuNTIzIDAgMCAwLS4xODgtLjQ3MyAyMS4zNzEgMjEuMzcxIDAgMCAwLS4yNTEtLjU5OWwtLjg1My4wMTd2LjM3MWwtLjAxNy4zMTNhOS45MiA5LjkyIDAgMCAwIDAgLjU3M2MuMDExLjI3LjAxNy43MDkuMDE3IDEuMzE2di4xMWMwIC4wNzkuMDIyLjE0LjA2Ny4xODUuMDgzLjA2OC4yODQuMTQ3LjYwMi4yMzdsMS4xNy4zMzdjLjQ1Mi4xMy45OTYuMTk0IDEuNjMyLjE5NC42ODYgMCAxLjI1Mi0uMDU5IDEuNjk4LS4xNzdhNC42OTQgNC42OTQgMCAwIDAgMS4yOC0uNTU3Yy40MDEtLjI1OS43MDUtLjQ4Ni45MTEtLjY4My4yNjgtLjI3Ni40NjYtLjU2OC41OTQtLjg3OGE0Ljc0IDQuNzQgMCAwIDAgLjM0My0xLjc4OGMwLS4yOTgtLjAyLS41NTctLjA1OC0uNzc2SDguMjgxek0xNC45MTQgNi41N2EuMjYuMjYgMCAwIDAtLjE5My0uMDc2SC4yNjhhLjI2LjI2IDAgMCAwLS4xOTMuMDc2LjI2NC4yNjQgMCAwIDAtLjA3NS4xOTR2LjU0YzAgLjA3OS4wMjUuMTQzLjA3NS4xOTRhLjI2LjI2IDAgMCAwIC4xOTMuMDc2SDE0LjcyYS4yNi4yNiAwIDAgMCAuMTkzLS4wNzYuMjY0LjI2NCAwIDAgMCAuMDc1LS4xOTR2LS41NGEuMjY0LjI2NCAwIDAgMC0uMDc1LS4xOTR6Ii8+PC9nPjwvc3ZnPg=="
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Monospace"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS4wMjEgMi45MDZjLjE4NiAxLjIxOS4zNzIgMS41LjM3MiAyLjcxOUMxLjM5MyA2LjM3NSAwIDcuMDMxIDAgNy4wMzF2LjkzOHMxLjM5My42NTYgMS4zOTMgMS40MDZjMCAxLjIxOS0uMTg2IDEuNS0uMzcyIDIuNzE5Qy43NDMgMTQuMDYzIDEuNzY0IDE1IDIuNjkzIDE1aDEuOTV2LTEuODc1cy0xLjY3Mi4xODgtMS42NzItLjkzOGMwLS44NDMuMTg2LS44NDMuMzcyLTIuNzE4LjA5My0uODQ0LS40NjQtMS41LTEuMDIyLTEuOTY5LjU1OC0uNDY5IDEuMTE1LTEuMDMxIDEuMDIyLTEuODc1QzMuMDY0IDMuNzUgMi45NyAzLjc1IDIuOTcgMi45MDZjMC0xLjEyNSAxLjY3Mi0xLjAzMSAxLjY3Mi0xLjAzMVYwaC0xLjk1QzEuNjcgMCAuNzQzLjkzOCAxLjAyIDIuOTA2ek0xMS45NzkgMi45MDZjLS4xODYgMS4yMTktLjM3MiAxLjUtLjM3MiAyLjcxOSAwIC43NSAxLjM5MyAxLjQwNiAxLjM5MyAxLjQwNnYuOTM4cy0xLjM5My42NTYtMS4zOTMgMS40MDZjMCAxLjIxOS4xODYgMS41LjM3MiAyLjcxOS4yNzggMS45NjktLjc0MyAyLjkwNi0xLjY3MiAyLjkwNmgtMS45NXYtMS44NzVzMS42NzIuMTg4IDEuNjcyLS45MzhjMC0uODQzLS4xODYtLjg0My0uMzcyLTIuNzE4LS4wOTMtLjg0NC40NjQtMS41IDEuMDIyLTEuOTY5LS41NTgtLjQ2OS0xLjExNS0xLjAzMS0xLjAyMi0xLjg3NS4xODYtMS44NzUuMzcyLTEuODc1LjM3Mi0yLjcxOSAwLTEuMTI1LTEuNjcyLTEuMDMxLTEuNjcyLTEuMDMxVjBoMS45NWMxLjAyMiAwIDEuOTUuOTM4IDEuNjcyIDIuOTA2eiIvPjwvZz48L3N2Zz4="
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Superscript"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMzA1IDEwLjE2NUwxMS44NjUgMTVIOS4wNTdsLTMuMTkyLTMuNTM2TDIuNzQ2IDE1SDBsNC41MjMtNC44MzVMLjIxOCA1LjYwM2gyLjc3TDUuOTg2IDguOTEgOS4wMSA1LjYwM2gyLjY0OWwtNC4zNTQgNC41NjJ6bTYuMjM0LTMuMjY5bDEuODc5LTEuMzA2Yy42NC0uNDE2IDEuMDYyLS44MDEgMS4yNjQtMS4xNTcuMjAxLS4zNTYuMzAyLS43MzguMzAyLTEuMTQ4IDAtLjY2OS0uMjM3LTEuMjEtLjcxLTEuNjItLjQ3NC0uNDExLTEuMDk3LS42MTctMS44NjgtLjYxNy0uNzQ0IDAtMS4zNC4yMDgtMS43ODUuNjI0LS40NDcuNDE2LS42NyAxLjA0My0uNjcgMS44ODFoMS40MzZjMC0uNS4wOTQtLjg0Ni4yODEtMS4wMzguMTg4LS4xOTEuNDQ1LS4yODcuNzcyLS4yODdzLjU4NS4wOTcuNzc3LjI5MmMuMTkuMTk1LjI4Ni40MzcuMjg2LjcyNiAwIC4yOS0uMDg5LjU1LS4yNjYuNzg1cy0uNjcuNjI4LTEuNDc5IDEuMTg0Yy0uNjkxLjQ3Ny0xLjYyNy45MjctMS45MDggMS4zNWwuMDE0IDEuNTY5SDE3VjYuODk2aC0zLjQ2MXoiLz48L3N2Zz4="
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Subscript"
                                            >
                                                <img
                                                    alt=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjg2NiAxMS42NDZIOS4wNkw1Ljg2NyA3Ljk0MmwtMy4xMjEgMy43MDRIMGw0LjUyNC01LjA2NEwuMjE4IDEuODA0aDIuNzdsMyAzLjQ2NCAzLjAyMy0zLjQ2NGgyLjY1TDcuMzA2IDYuNTgybDQuNTYgNS4wNjR6bTEuNzI1IDIuMDU4bDEuODI3LTEuMzY4Yy42NC0uNDM1IDEuMDYyLS44NCAxLjI2NC0xLjIxMi4yMDItLjM3Mi4zMDItLjc3My4zMDItMS4yMDIgMC0uNy0uMjM3LTEuMjY2LS43MS0xLjY5Ni0uNDc0LS40MzEtMS4wOTctLjY0Ni0xLjg2OS0uNjQ2LS43NDQgMC0xLjM0LjIxOC0xLjc4NS42NTMtLjQ0Ni40MzYtLjY3IDEuMDkyLS42NyAxLjk3aDEuNDM2YzAtLjUyNC4wOTQtLjg4Ni4yODEtMS4wODcuMTg4LS4yLjQ0NS0uMzAxLjc3Mi0uMzAxcy41ODYuMTAyLjc3Ny4zMDZjLjE5LjIwNC4yODYuNDU4LjI4Ni43NiAwIC4zMDMtLjA4OC41NzctLjI2Ni44MjItLjE3Ny4yNDUtLjY3LjY1OC0xLjQ3OCAxLjI0LS42OTIuNS0xLjYyOC45NzEtMS45MSAxLjQxM0wxMS44NjQgMTVIMTd2LTEuMjk2aC0zLjQxeiIvPjwvc3ZnPg=="
                                                />
                                            </div>
                                        </div>
                                        <div className="rdw-block-wrapper" aria-label="rdw-block-control">
                                            <div
                                                className="rdw-dropdown-wrapper rdw-block-dropdown"
                                                aria-label="rdw-dropdown"
                                                aria-expanded="false"
                                            >
                                                <a className="rdw-dropdown-selectedtext" title="Block Type">
                                                    <span>Normal</span>
                                                    <div className="rdw-dropdown-carettoopen" />
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-fontsize-wrapper"
                                            aria-label="rdw-font-size-control"
                                        >
                                            <div
                                                className="rdw-dropdown-wrapper rdw-fontsize-dropdown"
                                                aria-label="rdw-dropdown"
                                                aria-expanded="false"
                                            >
                                                <a className="rdw-dropdown-selectedtext" title="Font Size">
                                                    <span>14</span>
                                                    <div className="rdw-dropdown-carettoopen" />
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-fontfamily-wrapper"
                                            aria-label="rdw-font-family-control"
                                        >
                                            <div
                                                className="rdw-dropdown-wrapper rdw-fontfamily-dropdown"
                                                aria-label="rdw-dropdown"
                                                aria-expanded="false"
                                            >
                                                <a className="rdw-dropdown-selectedtext" title="Font">
                                                    <span className="rdw-fontfamily-placeholder">Font</span>
                                                    <div className="rdw-dropdown-carettoopen" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="rdw-list-wrapper" aria-label="rdw-list-control">
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Unordered"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS43MiAzLjQyN2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3LjAxIDEuNzIuMDFDLjc3LjAwOCAwIC43NzUgMCAxLjcxNWMwIC45NC43NzQgMS43MTEgMS43MiAxLjcxMXptMC0yLjYyNWMuNTEgMCAuOTIyLjQxMi45MjIuOTE0YS45Mi45MiAwIDAgMS0xLjg0MiAwIC45Mi45MiAwIDAgMSAuOTItLjkxNHpNMS43MiA4LjcwM2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3IDUuMjg3IDEuNzIgNS4yODdDLjc3IDUuMjg3IDAgNi4wNTIgMCA2Ljk5NXMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjJjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAwIDEtMS44NDIgMGMwLS41MDUuNDE1LS45MTQuOTItLjkxNHpNMS43MiAxMy45ODJjLjk1MSAwIDEuNzIyLS43NjggMS43MjItMS43MDggMC0uOTQzLS43NzQtMS43MDgtMS43MjEtMS43MDgtLjk0NyAwLTEuNzIxLjc2OC0xLjcyMSAxLjcwOHMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjVjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAxIDEtMS44NDIgMCAuOTIuOTIgMCAwIDEgLjkyLS45MTR6TTUuNzQ0IDIuMTE1aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OS40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDcuMzk0aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOThINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OC40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDEyLjY3aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjQuNC40IDAgMCAwIC40MDIuMzk4eiIvPjwvZz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Ordered"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4yMDIgMS40NjZoOC4xNWMuMzM4IDAgLjYxMi0uMzIyLjYxMi0uNzIgMC0uMzk3LS4yNzQtLjcyLS42MTItLjcyaC04LjE1Yy0uMzM4IDAtLjYxMS4zMjMtLjYxMS43MiAwIC4zOTguMjczLjcyLjYxLjcyek0xMi4zNTIgNS43ODNoLTguMTVjLS4zMzggMC0uNjExLjMyMi0uNjExLjcyIDAgLjM5Ny4yNzMuNzIuNjEuNzJoOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5OC0uMjc0LS43Mi0uNjEyLS43MnpNMTIuMzUyIDExLjU0aC04LjE1Yy0uMzM4IDAtLjYxMS4zMjItLjYxMS43MiAwIC4zOTYuMjczLjcxOS42MS43MTloOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5Ny0uMjc0LS43Mi0uNjEyLS43MnpNLjc2NyAxLjI0OXYxLjgwMmMwIC4xOTUuMTM2LjM0My4zMTUuMzQzLjE3NiAwIC4zMTUtLjE1LjMxNS0uMzQzVi4zNTZjMC0uMTktLjEzMy0uMzM5LS4zMDItLjMzOS0uMTQ4IDAtLjIyMy4xMTgtLjI0Ny4xNTZhLjIyOC4yMjggMCAwIDAtLjAwMy4wMDVMLjU3OS42MjFhLjQ3NC40NzQgMCAwIDAtLjA5OC4yNzNjMCAuMTk0LjEyOC4zNTEuMjg2LjM1NXpNLjM1MiA4LjE5SDEuNTVjLjE1NyAwIC4yODUtLjE2Mi4yODUtLjM2MiAwLS4xOTgtLjEyOC0uMzU5LS4yODUtLjM1OUguNjh2LS4wMDZjMC0uMTA3LjIxLS4yODEuMzc4LS40MjIuMzM2LS4yNzguNzUzLS42MjUuNzUzLTEuMjI2IDAtLjU3LS4zNzYtMS0uODc0LTEtLjQ3NyAwLS44MzYuMzg1LS44MzYuODk3IDAgLjI5Ny4xNjQuNDAyLjMwNS40MDIuMiAwIC4zMjEtLjE3Ni4zMjEtLjM0NiAwLS4xMDYuMDIzLS4yMjguMjA0LS4yMjguMjQzIDAgLjI1LjI1NC4yNS4yODMgMCAuMjI4LS4yNTIuNDQyLS40OTUuNjQ5LS4zMDEuMjU1LS42NDIuNTQ0LS42NDIuOTkydi4zODRjMCAuMjA1LjE1OS4zNDMuMzA4LjM0M3pNMS43NyAxMC41NDNjMC0uNTkyLS4yOTYtLjkzMS0uODE0LS45MzEtLjY4IDAtLjg1OS41Ny0uODU5Ljg3MiAwIC4zNTEuMjIyLjM5LjMxOC4zOS4xODUgMCAuMzEtLjE0OC4zMS0uMzY2IDAtLjA4NC4wMjYtLjE4MS4yMjQtLjE4MS4xNDIgMCAuMi4wMjQuMi4yNjcgMCAuMjM3LS4wNDMuMjYzLS4yMTMuMjYzLS4xNjQgMC0uMjg4LjE1Mi0uMjg4LjM1NCAwIC4yLjEyNS4zNS4yOTEuMzUuMjI1IDAgLjI3LjEwOC4yNy4yODN2LjA3NWMwIC4yOTQtLjA5Ny4zNS0uMjc3LjM1LS4yNDggMC0uMjY3LS4xNS0uMjY3LS4xOTcgMC0uMTc0LS4wOTgtLjM1LS4zMTctLjM1LS4xOTIgMC0uMzA3LjE0MS0uMzA3LjM3OCAwIC40My4zMTMuODg4Ljg5NS44ODguNTY0IDAgLjkwMS0uNC45MDEtMS4wN3YtLjA3NGMwLS4yNzQtLjA3NC0uNTAyLS4yMTQtLjY2Ni4wOTYtLjE2My4xNDgtLjM4LjE0OC0uNjM1eiIvPjwvZz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper rdw-option-disabled"
                                                title="Indent"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS43MTYgMy4yMTFIMTd2MS4xOTdINS43MTZ6TTAgLjAyaDE3djEuMTk3SDB6TTAgMTIuNzgzaDE3djEuMTk3SDB6TTUuNzE2IDkuNTkzSDE3djEuMTk3SDUuNzE2ek01LjcxNiA2LjQwMkgxN3YxLjE5N0g1LjcxNnpNLjE4NyA5LjQ5MUwyLjUyIDcgLjE4NyA0LjUwOXoiLz48L2c+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper rdw-option-disabled"
                                                title="Outdent"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4zOTYgMy4xOTNoMTAuNTczVjQuMzlINS4zOTZ6TS4wMzkuMDAzaDE1LjkzVjEuMkguMDM5ek0uMDM5IDEyLjc2NmgxNS45M3YxLjE5N0guMDM5ek01LjM5NiA5LjU3NWgxMC41NzN2MS4xOTdINS4zOTZ6TTUuMzk2IDYuMzg0aDEwLjU3M3YxLjE5N0g1LjM5NnpNMi4xODcgNC40OTFMMCA2Ljk4M2wyLjE4NyAyLjQ5MXoiLz48L2c+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-text-align-wrapper"
                                            aria-label="rdw-textalign-control"
                                        >
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Left"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOC40OTMgMTQuODg3SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4IDEwLjE2MkguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1M2gxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUzek04LjQ5MyA1LjQzNUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOC43MDlILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTJoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnoiLz48L2c+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Center"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuNTU2IDE0Ljg4N0gzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTggMTAuMTYySC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUzaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6TTExLjU1NiA1LjQzNUgzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTguNzA5SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTJ6Ii8+PC9nPjwvc3ZnPg=="
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Right"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjE4IDE0Ljg4N0g2LjQ1YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOCAxMC4xNjJILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTNoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1M3pNMTQuNjE4IDUuNDM1SDYuNDVhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4LjcwOUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1MmgxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyeiIvPjwvZz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper"
                                                aria-selected="false"
                                                title="Justify"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjIgMTQuODg4SC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgMTAuMTYySC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgNS40MzZILjMyNWEuMzI2LjMyNiAwIDAgMSAwLS42NTJIMTQuNjJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42Mi43MUguMzI1YS4zMjYuMzI2IDAgMCAxIDAtLjY1M0gxNC42MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6Ii8+PC9nPjwvc3ZnPg=="
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-colorpicker-wrapper"
                                            aria-haspopup="true"
                                            aria-label="rdw-color-picker"
                                            title="Color Picker"
                                            aria-expanded="false"
                                        >
                                            <div className="rdw-option-wrapper">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNDA2LjU4NWExLjk5OCAxLjk5OCAwIDAgMC0yLjgyNSAwbC0uNTQuNTRhLjc0MS43NDEgMCAxIDAtMS4wNDggMS4wNDhsLjE3NS4xNzUtNS44MjYgNS44MjUtMi4wMjIgMi4wMjNhLjkxLjkxIDAgMCAwLS4yNjYuNjAybC0uMDA1LjEwOHYuMDAybC0uMDgxIDEuODI5YS4zMDIuMzAyIDAgMCAwIC4zMDIuMzE2aC4wMTNsLjk3LS4wNDQuNTkyLS4wMjYuMjY4LS4wMTJjLjI5Ny0uMDEzLjU3OS0uMTM3Ljc5LS4zNDdsNy43Ny03Ljc3LjE0Ni4xNDRhLjc0Ljc0IDAgMCAwIDEuMDQ4IDBjLjI5LS4yOS4yOS0uNzU5IDAtMS4wNDhsLjU0LS41NGMuNzgtLjc4Ljc4LTIuMDQ0IDAtMi44MjV6TTguNzk1IDcuMzMzbC0yLjczLjUxNSA0LjQ1Mi00LjQ1MiAxLjEwOCAxLjEwNy0yLjgzIDIuODN6TTIuMDggMTMuNjczYy0xLjE0OCAwLTIuMDguMjk1LTIuMDguNjYgMCAuMzYzLjkzMi42NTggMi4wOC42NTggMS4xNSAwIDIuMDgtLjI5NCAyLjA4LS42NTkgMC0uMzY0LS45My0uNjU5LTIuMDgtLjY1OXoiLz48L2c+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="rdw-link-wrapper" aria-label="rdw-link-control">
                                            <div className="rdw-option-wrapper" title="Link">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk2Ny45NUEzLjIyNiAzLjIyNiAwIDAgMCAxMS42Ny4wMDJjLS44NyAwLTEuNjg2LjMzNy0yLjI5Ny45NDhMNy4xMDUgMy4yMThBMy4yNDcgMy4yNDcgMCAwIDAgNi4yNCA2LjI0YTMuMjI1IDMuMjI1IDAgMCAwLTMuMDIyLjg2NUwuOTUgOS4zNzNhMy4yNTMgMy4yNTMgMCAwIDAgMCA0LjU5NCAzLjIyNiAzLjIyNiAwIDAgMCAyLjI5Ny45NDhjLjg3IDAgMS42ODYtLjMzNiAyLjI5OC0uOTQ4TDcuODEyIDExLjdhMy4yNDcgMy4yNDcgMCAwIDAgLjg2NS0zLjAyMyAzLjIyNSAzLjIyNSAwIDAgMCAzLjAyMi0uODY1bDIuMjY4LTIuMjY3YTMuMjUyIDMuMjUyIDAgMCAwIDAtNC41OTV6TTcuMTA1IDEwLjk5M0w0LjgzNyAxMy4yNmEyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NSAyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LS42NTUgMi4yNTIgMi4yNTIgMCAwIDEgMC0zLjE4bDIuMjY4LTIuMjY4YTIuMjMyIDIuMjMyIDAgMCAxIDEuNTktLjY1NWMuNDMgMCAuODQxLjEyIDEuMTk1LjM0M0w0Ljc3MiA5LjQzOGEuNS41IDAgMSAwIC43MDcuNzA3bDEuOTM5LTEuOTM4Yy41NDUuODY4LjQ0MiAyLjAzLS4zMTMgMi43ODV6bTYuMTU1LTYuMTU1bC0yLjI2OCAyLjI2N2EyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NWMtLjQzMSAwLS44NDEtLjEyLTEuMTk1LS4zNDNsMS45MzgtMS45MzhhLjUuNSAwIDEgMC0uNzA3LS43MDdMNy40OTkgNi43MWEyLjI1MiAyLjI1MiAwIDAgMSAuMzEzLTIuNzg1bDIuMjY3LTIuMjY4YTIuMjMzIDIuMjMzIDAgMCAxIDEuNTktLjY1NSAyLjIzMyAyLjIzMyAwIDAgMSAyLjI0NiAyLjI0NWMwIC42MDMtLjIzMiAxLjE2OC0uNjU1IDEuNTl6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="rdw-option-wrapper rdw-option-disabled"
                                                title="Unlink"
                                            >
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuOTU2IDEuMDM3YTMuNTUgMy41NSAwIDAgMC01LjAxNCAwTDYuNDM2IDMuNTQ0YS41NDUuNTQ1IDAgMSAwIC43Ny43N2wyLjUwOC0yLjUwNmEyLjQzOCAyLjQzOCAwIDAgMSAxLjczNS0uNzE1Yy42NTggMCAxLjI3NS4yNTQgMS43MzYuNzE1LjQ2LjQ2MS43MTUgMS4wNzguNzE1IDEuNzM2IDAgLjY1OC0uMjU0IDEuMjc0LS43MTUgMS43MzVMOS45MDcgOC41NThhMi40NTggMi40NTggMCAwIDEtMy40NzIgMCAuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3MSAzLjUzNCAzLjUzNCAwIDAgMCAyLjUwNyAxLjAzN2MuOTA4IDAgMS44MTYtLjM0NiAyLjUwNy0xLjAzN2wzLjI3OC0zLjI3OGEzLjUyIDMuNTIgMCAwIDAgMS4wMzUtMi41MDdjMC0uOTUtLjM2Ny0xLjg0LTEuMDM1LTIuNTA3eiIvPjxwYXRoIGQ9Ik03LjQgMTEuMDY1bC0yLjEyMiAyLjEyYTIuNDM3IDIuNDM3IDAgMCAxLTEuNzM1LjcxNiAyLjQzNyAyLjQzNyAwIDAgMS0xLjczNi0uNzE1IDIuNDU3IDIuNDU3IDAgMCAxIDAtMy40NzFsMy4wODYtMy4wODZhMi40MzggMi40MzggMCAwIDEgMS43MzUtLjcxNWMuNjU4IDAgMS4yNzUuMjU0IDEuNzM2LjcxNWEuNTQ1LjU0NSAwIDEgMCAuNzcxLS43NzEgMy41NSAzLjU1IDAgMCAwLTUuMDE0IDBMMS4wMzYgOC45NDRBMy41MiAzLjUyIDAgMCAwIDAgMTEuNDVjMCAuOTUuMzY3IDEuODQgMS4wMzUgMi41MDdhMy41MiAzLjUyIDAgMCAwIDIuNTA2IDEuMDM1Yy45NSAwIDEuODQtLjM2OCAyLjUwNy0xLjAzNWwyLjEyMi0yLjEyMWEuNTQ1LjU0NSAwIDAgMC0uNzcxLS43NzF6TTkuMjc0IDEyLjAwMmEuNTQ2LjU0NiAwIDAgMC0uNTQ2LjU0NXYxLjYzN2EuNTQ2LjU0NiAwIDAgMCAxLjA5MSAwdi0xLjYzN2EuNTQ1LjU0NSAwIDAgMC0uNTQ1LS41NDV6TTExLjIzIDExLjYxNmEuNTQ1LjU0NSAwIDEgMC0uNzcyLjc3MmwxLjE1NyAxLjE1NmEuNTQzLjU0MyAwIDAgMCAuNzcxIDAgLjU0NS41NDUgMCAwIDAgMC0uNzdsLTEuMTU2LTEuMTU4ek0xMi41MzcgOS44MkgxMC45YS41NDYuNTQ2IDAgMCAwIDAgMS4wOTFoMS42MzdhLjU0Ni41NDYgMCAwIDAgMC0xLjA5ek00LjkxIDMuNTQ3YS41NDYuNTQ2IDAgMCAwIC41NDUtLjU0NVYxLjM2NmEuNTQ2LjU0NiAwIDAgMC0xLjA5IDB2MS42MzZjMCAuMzAxLjI0NC41NDUuNTQ1LjU0NXpNMi44ODggMy45MzNhLjU0My41NDMgMCAwIDAgLjc3MSAwIC41NDUuNTQ1IDAgMCAwIDAtLjc3MUwyLjUwMiAyLjAwNWEuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3bDEuMTU3IDEuMTU4ek0xLjYyOCA1LjczaDEuNjM2YS41NDYuNTQ2IDAgMCAwIDAtMS4wOTJIMS42MjhhLjU0Ni41NDYgMCAwIDAgMCAxLjA5MXoiLz48L2c+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-embedded-wrapper"
                                            aria-haspopup="true"
                                            aria-label="rdw-embedded-control"
                                            aria-expanded="false"
                                        >
                                            <div className="rdw-option-wrapper" title="Embedded">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzA4IDYuNjE1YS40MzYuNDM2IDAgMCAwLS41NDMuMjkxbC0xLjgzIDYuMDQ1YS40MzYuNDM2IDAgMCAwIC44MzMuMjUyTDcgNy4xNmEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHpNOC45MzEgNi42MTVhLjQzNi40MzYgMCAwIDAtLjU0My4yOTFsLTEuODMgNi4wNDVhLjQzNi40MzYgMCAwIDAgLjgzNC4yNTJsMS44My02LjA0NGEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHoiLz48cGF0aCBkPSJNMTYuNTY0IDBILjQzNkEuNDM2LjQzNiAwIDAgMCAwIC40MzZ2MTYuMTI4YzAgLjI0LjE5NS40MzYuNDM2LjQzNmgxNi4xMjhjLjI0IDAgLjQzNi0uMTk1LjQzNi0uNDM2Vi40MzZBLjQzNi40MzYgMCAwIDAgMTYuNTY0IDB6TTMuNDg3Ljg3MmgxMC4wMjZ2MS43NDNIMy40ODdWLjg3MnptLTIuNjE1IDBoMS43NDN2MS43NDNILjg3MlYuODcyem0xNS4yNTYgMTUuMjU2SC44NzJWMy40ODhoMTUuMjU2djEyLjY0em0wLTEzLjUxM2gtMS43NDNWLjg3MmgxLjc0M3YxLjc0M3oiLz48Y2lyY2xlIGN4PSI5My44NjciIGN5PSIyNDUuMDY0IiByPSIxMy4xMjgiIHRyYW5zZm9ybT0ibWF0cml4KC4wMzMyIDAgMCAuMDMzMiAwIDApIi8+PGNpcmNsZSBjeD0iOTMuODY3IiBjeT0iMzYwLjU5MiIgcj0iMTMuMTI4IiB0cmFuc2Zvcm09Im1hdHJpeCguMDMzMiAwIDAgLjAzMzIgMCAwKSIvPjxwYXRoIGQ9Ik0xNC4yNTQgMTIuNjQxSDEwLjJhLjQzNi40MzYgMCAwIDAgMCAuODcyaDQuMDU0YS40MzYuNDM2IDAgMCAwIDAtLjg3MnoiLz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-emoji-wrapper"
                                            aria-haspopup="true"
                                            aria-label="rdw-emoji-control"
                                            title="Emoji"
                                            aria-expanded="false"
                                        >
                                            <div className="rdw-option-wrapper">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="rdw-image-wrapper"
                                            aria-haspopup="true"
                                            aria-label="rdw-image-control"
                                            aria-expanded="false"
                                        >
                                            <div className="rdw-option-wrapper" title="Image">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNzQxIDBILjI2Qy4xMTYgMCAwIC4xMzYgMCAuMzA0djEzLjM5MmMwIC4xNjguMTE2LjMwNC4yNTkuMzA0SDE0Ljc0Yy4xNDMgMCAuMjU5LS4xMzYuMjU5LS4zMDRWLjMwNEMxNSAuMTM2IDE0Ljg4NCAwIDE0Ljc0MSAwem0tLjI1OCAxMy4zOTFILjUxN1YuNjFoMTMuOTY2VjEzLjM5eiIvPjxwYXRoIGQ9Ik00LjEzOCA2LjczOGMuNzk0IDAgMS40NC0uNzYgMS40NC0xLjY5NXMtLjY0Ni0xLjY5NS0xLjQ0LTEuNjk1Yy0uNzk0IDAtMS40NC43Ni0xLjQ0IDEuNjk1IDAgLjkzNC42NDYgMS42OTUgMS40NCAxLjY5NXptMC0yLjc4MWMuNTA5IDAgLjkyMy40ODcuOTIzIDEuMDg2IDAgLjU5OC0uNDE0IDEuMDg2LS45MjMgMS4wODYtLjUwOSAwLS45MjMtLjQ4Ny0uOTIzLTEuMDg2IDAtLjU5OS40MTQtMS4wODYuOTIzLTEuMDg2ek0xLjgxIDEyLjE3NGMuMDYgMCAuMTIyLS4wMjUuMTcxLS4wNzZMNi4yIDcuNzI4bDIuNjY0IDMuMTM0YS4yMzIuMjMyIDAgMCAwIC4zNjYgMCAuMzQzLjM0MyAwIDAgMCAwLS40M0w3Ljk4NyA4Ljk2OWwyLjM3NC0zLjA2IDIuOTEyIDMuMTQyYy4xMDYuMTEzLjI3LjEwNS4zNjYtLjAyYS4zNDMuMzQzIDAgMCAwLS4wMTYtLjQzbC0zLjEwNC0zLjM0N2EuMjQ0LjI0NCAwIDAgMC0uMTg2LS4wOC4yNDUuMjQ1IDAgMCAwLS4xOC4xTDcuNjIyIDguNTM3IDYuMzk0IDcuMDk0YS4yMzIuMjMyIDAgMCAwLS4zNTQtLjAxM2wtNC40IDQuNTZhLjM0My4zNDMgMCAwIDAtLjAyNC40My4yNDMuMjQzIDAgMCAwIC4xOTQuMTAzeiIvPjwvZz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="rdw-remove-wrapper" aria-label="rdw-remove-control">
                                            <div className="rdw-option-wrapper" title="Remove">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOC4xIDE0bDYuNC03LjJjLjYtLjcuNi0xLjgtLjEtMi41bC0yLjctMi43Yy0uMy0uNC0uOC0uNi0xLjMtLjZIOC42Yy0uNSAwLTEgLjItMS40LjZMLjUgOS4yYy0uNi43LS42IDEuOS4xIDIuNWwyLjcgMi43Yy4zLjQuOC42IDEuMy42SDE2di0xSDguMXptLTEuMy0uMXMwLS4xIDAgMGwtMi43LTIuN2MtLjQtLjQtLjQtLjkgMC0xLjNMNy41IDZoLTFsLTMgMy4zYy0uNi43LS42IDEuNy4xIDIuNEw1LjkgMTRINC42Yy0uMiAwLS40LS4xLS42LS4yTDEuMiAxMWMtLjMtLjMtLjMtLjggMC0xLjFMNC43IDZoMS44TDEwIDJoMUw3LjUgNmwzLjEgMy43LTMuNSA0Yy0uMS4xLS4yLjEtLjMuMnoiLz48L3N2Zz4="
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="rdw-history-wrapper" aria-label="rdw-history-control">
                                            <div className="rdw-option-wrapper" title="Undo">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQuODc1YzIuNjcyIDAgNC44NDYtMi4xNDUgNC44NDYtNC43ODEgMC0yLjYzNy0yLjE3NC00Ljc4MS00Ljg0Ni00Ljc4MVY4LjVMMS42MTUgNC4yNSA3IDB2My4xODhjMy44NiAwIDcgMy4wOTggNyA2LjkwNlMxMC44NiAxNyA3IDE3cy03LTMuMDk4LTctNi45MDZoMi4xNTRjMCAyLjYzNiAyLjE3NCA0Ljc4MSA0Ljg0NiA0Ljc4MXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
                                                    alt=""
                                                />
                                            </div>
                                            <div className="rdw-option-wrapper rdw-option-disabled" title="Redo">
                                                <img
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTA0IDEzLjk3N2E0LjQ5NyA0LjQ5NyAwIDAgMS00LjQ5Mi00LjQ5MiA0LjQ5NyA0LjQ5NyAwIDAgMSA0LjQ5Mi00LjQ5M3YyLjk5NWw0Ljk5LTMuOTkzTDYuNTA0IDB2Mi45OTVhNi40OTYgNi40OTYgMCAwIDAtNi40ODggNi40OWMwIDMuNTc4IDIuOTEgNi40OSA2LjQ4OCA2LjQ5YTYuNDk2IDYuNDk2IDAgMCAwIDYuNDg3LTYuNDloLTEuOTk2YTQuNDk3IDQuNDk3IDAgMCAxLTQuNDkxIDQuNDkyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="editorClassName rdw-editor-main">
                                        <div className="DraftEditor-root">
                                            <div className="public-DraftEditorPlaceholder-root">
                                                <div
                                                    className="public-DraftEditorPlaceholder-inner"
                                                    id="placeholder-4bejj"
                                                    style={{ whiteSpace: "pre-wrap" }}
                                                >
                                                    Start From Here...
                                                </div>
                                            </div>
                                            <div className="DraftEditor-editorContainer">
                                                <div
                                                    aria-describedby="placeholder-4bejj"
                                                    aria-label="rdw-editor"
                                                    className="notranslate public-DraftEditor-content"
                                                    contentEditable="true"
                                                    role="textbox"
                                                    spellCheck="false"
                                                    style={{
                                                        outline: "none",
                                                        userSelect: "text",
                                                        whiteSpace: "pre-wrap",
                                                        overflowWrap: "break-word"
                                                    }}
                                                >
                                                    <div data-contents="true">
                                                        <div
                                                            className=""
                                                            data-block="true"
                                                            data-editor="4bejj"
                                                            data-offset-key="bgaac-0-0"
                                                        >
                                                            <div
                                                                data-offset-key="bgaac-0-0"
                                                                className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                                                            >
                                                                <span data-offset-key="bgaac-0-0">
                                                                    <br data-text="true" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="btn-toolbar">
                        <div className="">
                            <button
                                type="button"
                                className="btnCompose me-1"
                            >
                                <FaSave />
                            </button>
                            <button
                                type="button"
                                className="btnCompose me-1"
                            >
                                <FaTrashAlt />
                            </button>
                            <button className="btnCompose2">
                                {" "}
                                <span>Send</span>
                                {"   "}<FaTelegramPlane />
                            </button>
                        </div>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

export default EmailComposeComponents;
