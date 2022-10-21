import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots, BsFillBellFill, } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaRegCompass } from 'react-icons/fa';
import pic from "./pic.jpg"
import { FiMoreHorizontal } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsMessenger, BsFillChatDotsFill, } from "react-icons/bs";
import { AiTwotoneStar, } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import './Userprofile.css';
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
export default function Userprofile() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Address, setAddress] = useState("");
    const [Dob, setDob] = useState("");
    const [error, seterror] = useState("");
    const [errorall, seterrorall] = useState(false);
    const [error1, seterror1] = useState("");
    const [error2, seterror2] = useState("");
    const [show, setShow] = useState(false)
    const handleclick = (e) => {
        setShow(!show)
    };

    const SAVEclick = (e) => {

        if (FirstName == "" || Email == "" || Dob == "" || Address == "" || Password == "" || ConfirmPassword == "") {
            seterrorall(true)
        }
        else if (FirstName != "" && Email != "" && Password != "" && ConfirmPassword != "" && Dob != "" && Address != "") {
            seterror("")
            seterror1("")
            seterror2("")
            const url = "http://localhost:3000/dev/updateprofile";
            const data = {
                "id": "22", Email: Email, FirstName: FirstName, LastName: LastName, Dob: Dob, Address: Address, Password: Password, ConfirmPassword: ConfirmPassword,
            };
            const header = {};
            axios.post(url, data, header,)
                .then((res) => {
                    console.log("Response==>" + JSON.stringify(res.data))
                    let result = res.data + " "
                    if (result.includes("Firstname is mandatory"))
                        seterror("Firstname is mandatory")
                    if (result.includes("Password do not match"))
                        seterror1("Password not match")
                    if (result.includes("Updated"))
                        seterror1("Updated!")
                    //// //localStorage.setItem("tokenvariable", res.data)
                    ///// const token = localStorage.getItem("tokenvariable");
                    /// //navigate("/home");
                })
                .catch((err) => {
                    console.log("Response==> " + JSON.stringify(err))
                })
        }
    }

    useEffect(() => {
        const url = "http://localhost:3000/dev/getprofile";
        const data = {
            "id": "22",
        };
        const header = {};
        axios.post(url, data, header,)
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))


                // localStorage.setItem("tokenvariable", res.data)
                // const token = localStorage.getItem("tokenvariable");
                //navigate("/home");
                if (res.data.length > 0) {
                    setFirstName(res.data[0].txtFirstName)
                    setLastName(res.data[0].txtLastName)
                    setEmail(res.data[0].txtEmail)
                    setAddress(res.data[0].txtaddress)
                    setPassword(res.data[0].txtPassword)
                    // setConfirmPassword(res.data[0].txtPassword)
                    setDob(res.data[0].txtdob)
                }

                //if (res.data.length > 0) {
                //    setRepassword(res.data[0].txtPassword)
                //}
            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    }, [])
    return (

        <>
            <div className="Topbar_header">
                <div className="Topbar_col1">
                    <div className="Topbar_icon_circle">
                        <AiOutlineMenu />

                    </div><h3>Company</h3>

                </div>
                <div className="Topbar_col2" >
                    <ul>
                        <li>Dashboard</li>
                        <li>Account</li>
                        <div className="Tobar_col2_on" onClick={(e) => { handleclick(e) }}><li>leads</li></div>
                        <div className="Tobar_col2_on1" onClick={(e) => { handleclick(e) }}><li>campaigns</li></div>
                        <div className="Tobar_col2_on2" onClick={(e) => { handleclick(e) }}><li>prospect</li></div>
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
                    <div className="Clayton">
                        <label>Clayton Santos</label>
                    </div>
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

            {
                show ? (

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
                                <div className="Tobar_col2_Tasks" onClick={(e) => { handleclick(e) }}><label>Tasks</label></div>
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


                        <div className="Topbar_col2_Leadpopup">
                            <div className="Topbar_content_colb">
                                <label className="Topbar_label_head">Leads</label>

                                <div className="Topbar_content_colb_list">
                                    <div className="Topbar_content_colb_list1">
                                        <FaCarAlt className="Topbar_caricon" />
                                        <div className="Tobar_col2_listlead" onClick={(e) => { handleclick(e) }}><label>List Leads</label></div>
                                    </div>
                                    <div className="Topbar_content_colb_list1">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <label>Create Lead</label>
                                    </div>
                                </div>

                            </div>
                        </div>






                        <div className="Topbar_col2_Campaignpopup">
                            <div className="Topbar_content_colc">
                                <label className="Topbar_label_head">Campaign</label>
                                <div className="Topbar_content_colb_list">
                                    <div className="Topbar_content_colb_list1">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <div className="Tobar_col2_listcampaign" onClick={(e) => { handleclick(e) }}> <label>List Campaign</label></div>
                                    </div>
                                    <div className="Topbar_content_colb_list1">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <label>Create Campaign</label>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="Topbar_col2_prospectpopup">
                            <div className="Topbar_content_cold">
                                <label className="Topbar_label_head">Prospect</label>
                                <div className="Topbar_content_colb_list">
                                    <div className="Topbar_content_colb_list1">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <div className="Tobar_col2_listprospect" onClick={(e) => { handleclick(e) }}><label>List Prospect</label></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}


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



                            <label onClick={(e) => { SAVEclick(e); }}>SAVE
                            </label>



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
                            <div className='Profile_ln'>LastName</div>
                            <div className='Profile_email'>Email</div>
                            <div className='Profile_dob'>Date of Birth</div>
                        </div>
                        <div className='Profileouter_row3'>
                            <div className='Profile_a3' >
                                <input type="text" placeholder="" value={FirstName} onChange={(e) => { setFirstName(e.target.value) }} />
                                <label className="err">{error}</label>
                                {errorall && FirstName == "" ? <label className="error">Firstname is mandatory</label> : ""}</div>

                            <div className='Profile_b3' >
                                <input type="text" placeholder="" value={LastName} onChange={(e) => { setLastName(e.target.value) }} /></div>
                            <div className='Profile_c3' >
                                <input type="text" placeholder="" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                                {errorall && Email == "" ? <label className="error">Email is mandatory</label> : ""}</div>
                            <div className='Profile_d3'>
                                <input type="text" placeholder="" value={Dob} onChange={(e) => { setDob(e.target.value) }} />
                                {errorall && Dob == "" ? <label className="error">Dob is mandatory</label> : ""}</div>
                            <MdKeyboardArrowDown className='Profileouter_row3_downarrow' />
                        </div>
                        <div className='Profileouter_row4'>
                            <div className='Profile_a4' >Address</div>
                            <div className='Profile_b4' >Password</div>
                            <div className='Profile_c4' >Confirm Password</div>
                        </div>

                        <div className='Profileouter_row5'>
                            <div className='Profile_a5'>
                                <input type="text" placeholder="" value={Address} onChange={(e) => { setAddress(e.target.value) }} />
                                {errorall && Address == "" ? <label className="error">Address is mandatory</label> : ""}</div>
                            <div className='Profile_b5'>
                                <input type="Password" placeholder="" value={Password} onChange={(e) => { setPassword(e.target.value) }} />


                                {errorall && Password == "" ? <label className="error">Password is mandatory</label> : ""}</div>
                            <div className='Profile_c5'>
                                <input type="Password" placeholder="" value={ConfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                                {errorall && ConfirmPassword == "" ? <label className="error">ConfirmPassword is mandatory</label> : ""}
                                <label className="err">{error1}</label></div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

