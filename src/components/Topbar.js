import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
    BsThreeDots,
    BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import React from "react";
import './Topbar.css';
export default function Topbar() {
    return (
        <>
            <div className="Topbar_header">
                <div className="Topbar_col1">
                    <div className="Topbar_icon_circle">
                        <AiOutlineMenu />

                    </div><h3>Company</h3>

                </div>
                <div className="Topbar_col2">
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
                <div className="Topbar_col3">
                    <AiOutlineSearch className="Topbar_searchIcon" />
                    <input type={"text"} placeholder="Search Products,Orders and Clients" />
                    <MdArrowForwardIos className="Topbar_arrowIcon" />
                </div>
                <div className="Topbar_col4">
                    <CgProfile className="Topbar_profileIcon" />
                    <label>Clayton Santos</label>
                </div>
                <div className="Topbar_col5">
                    <div className="Topbar_Bell_Circle">
                        <BsFillBellFill className="Topbar_BellIcon" />
                    </div>
                    <div className="Topbar_cancel_circle">
                        <MdCancel className="Topbar_cancelIcon" />
                    </div>
                </div>
            </div>
            <div className="Topbar_content">
                <div className="Topbar_content_cola">
                    <div className="Topbar_content_cola_list">
                        <BsFillBookFill className="Topbar_bookicon" />
                        <label> Leads</label>
                    </div>
                    <div className="Topbar_content_cola_list">
                        <BsFillBookFill className="Topbar_bookicon" />
                        <label> Campaign</label>
                    </div>
                    <div className="Topbar_content_cola_list">
                        <BsFillBookFill className="Topbar_bookicon" />
                        <label>Tasks</label>
                    </div>
                    <div className="Topbar_content_cola_list">
                        <BsFillBookFill className="Topbar_bookicon" />
                        <label>Prospects</label>
                    </div>
                    <div className="Topbar_content_cola_list1"></div>
                    <div className="Topbar_content_cola_list1"></div>
                    <div className="Topbar_content_cola_list1"></div>
                    <div className="Topbar_content_cola_list1"></div>
                    <div className="Topbar_content_cola_list1"></div>
                </div>
                <div className="Topbar_content_colb">
                    <label className="Topbar_label_head">Leads</label>
                    <div className="Topbar_content_colb_list">
                        <div className="Topbar_content_colb_list1">
                            <BsFillBookFill className="Topbar_bookicon" />
                            <label>List Leads</label>
                        </div>
                        <div className="Topbar_content_colb_list1">
                            <BsFillBookFill className="Topbar_bookicon" />
                            <label>Create Lead</label>
                        </div>
                    </div>
                </div>
                <div className="Topbar_content_colc">
                    <label className="Topbar_label_head">Campaign</label>
                    <div className="Topbar_content_colb_list">
                        <div className="Topbar_content_colb_list1">
                            <BsFillBookFill className="Topbar_bookicon" />
                            <label>List Campaign</label>
                        </div>
                        <div className="Topbar_content_colb_list1">
                            <BsFillBookFill className="Topbar_bookicon" />
                            <label>Create Campaign</label>
                        </div>
                    </div>
                </div>
                <div className="Topbar_content_cold">
                    <label className="Topbar_label_head">Prospect</label>
                    <div className="Topbar_content_colb_list">
                        <div className="Topbar_content_colb_list1">
                            <BsFillBookFill className="Topbar_bookicon" />
                            <label>List Prospect</label>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}