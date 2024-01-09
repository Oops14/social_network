import Container from "@mui/material/Container";
import React from "react";
import s from "./messages.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Messages = () => {
    return (
        <section>
            <Container maxWidth="lg">
                <h1>Messages</h1>
                <div className={s.dialogs}>
                    <div className={s.messages_sidebar}>
                        <div className={s.sidebar_header}>
                            <h3>Messages</h3>
                            <div className="sidebar_header_settings">
                                <SettingsIcon
                                    fontSize="small"
                                    style={{ color: "gray" }}
                                />
                                <MoreVertIcon
                                    fontSize="small"
                                    style={{ color: "gray" }}
                                />
                            </div>
                        </div>

                        <div className={s.side_users + " " + s.active}>
                            <div className={s.mess_user_info}>
                                <div className={s.avatar}></div>

                                <div className="mess-info">
                                    <h5 className={s.user_title}>John Doe</h5>
                                    <div className={s.user_message}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        pit eum ducimus cupiditate.
                                    </div>
                                </div>
                            </div>

                            <div className={s.mess_time_block}>
                                <div className={s.mess_time}>1:55 PM</div>
                                <div className={s.mess_count}>1</div>
                            </div>
                        </div>

                        <div className={s.side_users}>
                            <div className={s.mess_user_info}>
                                <div className={s.avatar}></div>

                                <div className="mess-info">
                                    <h5 className={s.user_title}>John Doe</h5>
                                    <div className={s.user_message}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        pit eum ducimus cupiditate.
                                    </div>
                                </div>
                            </div>

                            <div className={s.mess_time_block}>
                                <div className={s.mess_time}>1:55 PM</div>
                                {/* <div className={s.mess_count}>1</div> */}
                            </div>
                        </div>

                        <div className={s.side_users}>
                            <div className={s.mess_user_info}>
                                <div className={s.avatar}></div>

                                <div className="mess-info">
                                    <h5 className={s.user_title}>John Doe</h5>
                                    <div className={s.user_message}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        pit eum ducimus cupiditate.
                                    </div>
                                </div>
                            </div>

                            <div className={s.mess_time_block}>
                                <div className={s.mess_time}>1:55 PM</div>
                                {/* <div className={s.mess_count}>1</div> */}
                            </div>
                        </div>

                    </div>
                    <div className={s.messages_area}></div>
                </div>
            </Container>
        </section>
    );
};
