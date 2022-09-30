import React from "react";
import "./Leftbar.css";
import { FaRegCompass } from 'react-icons/fa';
import {
  
  BsMessenger,
  BsFillChatDotsFill,

} from "react-icons/bs";
import {
  AiTwotoneStar,
} from "react-icons/ai";
export default function Leftbar() {
  return (
    <>
     
      <div className="leftbar">
        <div className="leftbar_whitecircle"><BsFillChatDotsFill /></div>
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
    </>
  );
}