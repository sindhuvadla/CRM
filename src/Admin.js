import { AiOutlineMenu, AiOutlineSearch, AiFillStar } from "react-icons/ai";
import {
    BsThreeDots,
    BsThreeDotsVertical,
    BsFillBellFill,
    BsMessenger,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import React from "react";
import './Admin.css';
export default function Admin() {
    return (
       <>
            <div className="header">
                <div className="col1">
                    <div className="icon_circle">
                        <AiOutlineMenu />
                        <h3>Company</h3>
                    </div>

                    <div className="col2">
                        <ul>
                            <li>Dashboard</li>
                            <li>Account</li>
                            <li>campaigns</li>
                            <li>leads</li>
                            <li>prospect</li>
                            <li>
                                <BsThreeDots />
                            </li>
                        </ul>
                    </div>
                    <div className="col3">
                        <AiOutlineSearch className="searchIcon" />
                        <input type={"text"} placeholder="Search...." />
                        <MdArrowForwardIos className="arrowIcon" />
                    </div>
                    <div className="col4">
                        <CgProfile className="profileIcon" />
                        <label>Clayton Santos</label>
                    </div>
                    <div className="col5">
                        <div className="Bell_Circle">
                            <BsFillBellFill className="BellIcon" />
                        </div>
                        <div className="cancel_circle">
                            <MdCancel className="cancelIcon" />
                        </div>
                    </div>
                </div>
                <div className="contentpart">
                    <div className="Left_Menu">
                        <div className="Left_Menu_col1">
                            <div className="compass_circle">
                                <FaCompass className="compassIcon" />
                            </div>
                            <div className="star_circle">
                                <AiFillStar className="starIcon" />
                            </div>
                            <div className="messenger_circle">
                                <BsMessenger className="messengerIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="contentpart_col0"></div>
                    <div className="contentpart_col1_top">
                        <div className="contentpart_col1">
                            <div className="contentpart_col1_head">
                                <label>User List</label>
                                <BsThreeDotsVertical />
                            </div>
                            <div className="contentpart_col1_list">
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                                <UserListValue />
                            </div>
                        </div>
                    </div>
                </div>
        
            function UserListValue() {
  return (
            <div className="Contentpart_Col1_Listrow">
                <div className="Bell_Circle">
                    <BsFillBellFill className="BellIcon" />
                </div>
                <label>Lary Clayton</label>
                <button>Pending</button>
            </div>
            );
}