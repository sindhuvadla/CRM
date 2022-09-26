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
            <div className="header">
                <div className="col1">
                    <div className="icon_circle">
                        <AiOutlineMenu />

                    </div><h3>Company</h3>

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
                    <input type={"text"} placeholder="Search Products,Orders and Clients" />
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
            <div className="content">
                <div className="content_cola">
                    <div className="content_cola_list">
                        <BsFillBookFill className="bookicon" />
                        <label> Leads</label>
                    </div>
                    <div className="content_cola_list">
                        <BsFillBookFill className="bookicon" />
                        <label> Campaign</label>
                    </div>
                    <div className="content_cola_list">
                        <BsFillBookFill className="bookicon" />
                        <label>Tasks</label>
                    </div>
                    <div className="content_cola_list">
                        <BsFillBookFill className="bookicon" />
                        <label>Prospects</label>
                    </div>
                    <div className="content_cola_list1"></div>
                    <div className="content_cola_list1"></div>
                    <div className="content_cola_list1"></div>
                    <div className="content_cola_list1"></div>
                    <div className="content_cola_list1"></div>
                </div>
                <div className="content_colb">
                    <label className="label_head">Leads</label>
                    <div className="content_colb_list">
                        <div className="content_colb_list1">
                            <BsFillBookFill className="bookicon" />
                            <label>List Leads</label>
                        </div>
                        <div className="content_colb_list1">
                            <BsFillBookFill className="bookicon" />
                            <label>Create Lead</label>
                        </div>
                    </div>
                </div>
                <div className="content_colc">
                    <label className="label_head">Campaign</label>
                    <div className="content_colb_list">
                        <div className="content_colb_list1">
                            <BsFillBookFill className="bookicon" />
                            <label>List Campaign</label>
                        </div>
                        <div className="content_colb_list1">
                            <BsFillBookFill className="bookicon" />
                            <label>Create Campaign</label>
                        </div>
                    </div>
                </div>
                <div className="content_cold">
                    <label className="label_head">Prospect</label>
                    <div className="content_colb_list">
                        <div className="content_colb_list1">
                            <BsFillBookFill className="bookicon" />
                            <label>List Prospect</label>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}