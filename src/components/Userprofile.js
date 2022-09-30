import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
    BsThreeDots,
    BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaRegCompass } from 'react-icons/fa';
import pic from "./Images/pic.jpg"
import { FiMoreHorizontal } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import {

    BsMessenger,
    BsFillChatDotsFill,

} from "react-icons/bs";
import {
    AiTwotoneStar,
} from "react-icons/ai";
import React from "react";
import './Userprofile.css';
export default function Userprofile() {
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
                        <li>About Us</li>
                        <li>News</li>
                        <li>Use Policy</li>
                        <li>Contacts</li>
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

            </div>

            <div className="Content">
                <div className="Content_leftbar">
                    <div className="leftbar">
                        <div className="leftbar_whitecircle1">
                            <FaRegCompass />
                        </div>
                        <div className="leftbar_whitecircle2">
                            <AiTwotoneStar />
                        </div>
                        <div className="leftbar_whitecircle3">
                            <BsMessenger />
                        </div>
                    </div>
                </div>

                <div className="titlebar_top">
                    <div className="titlebar_top_col1">
                        <div className="titlebar_bagSquare">
                            <GiBeachBag className="titlebar_bagIcon" />
                        </div>
                        <label>Profile</label>
                    </div>
                    <div className="titlebar_top_col2">

                        <div className="titlebar_top_col22">
                            <BsFillPlusCircleFill className="titlebar_plusIcon" />
                            <label>SAVE</label>
                        </div>
                    </div>
                </div>


                <div className='Profile_outer'>
                    <div className='Profile_outer_column1'>
                        <img src={pic} ></img>
                        <div className='Profile_name' >Nancy Powell  </div>
                        <div className='Profile_id' >c10001</div>
                    </div>
                    <div className="Profile_Info">
                        <div className='Profile_outer_row1'>
                            <input type="text" placeholder="Personal Information"></input>
                            <FiMoreHorizontal className='Profile_more1' />
                        </div>
                        <div className='Profileouter_row2'>
                            <div className='Profile_fn' >FirstName</div>
                            <div className='Profile_ln'>Last Name</div>
                            <div className='Profile_email'>Email</div>
                            <div className='Profile_dob'>Date of Birth</div>
                        </div>
                        <div className='Profileouter_row3'>
                            <div className='Profile_a3' ><input type="text" ></input></div>
                            <div className='Profile_b3' ><input type="text" ></input></div>
                            <div className='Profile_c3' ><input type="text" ></input></div>
                            <div className='Profile_d3'> <input type="text" ></input></div>
                            <MdKeyboardArrowDown className='Profileouter_row3_downarrow' />
                        </div>
                        <div className='Profileouter_row4'>
                            <div className='Profile_a4' >Address</div>
                            <div className='Profile_b4' >Password</div>
                            <div className='Profile_c4' >Confirm Password</div>
                        </div>

                        <div className='Profileouter_row5'>
                            <div className='Profile_a5'><input type="text" ></input></div>
                            <div className='Profile_b5'><input type="text" ></input></div>
                            <div className='Profile_c5'><input type="text" ></input></div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );

}