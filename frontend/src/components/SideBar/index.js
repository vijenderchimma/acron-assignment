import { MdQuestionMark } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { BsTag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import './index.css'

const SideBar = () => (
        <nav className='side-bar-container'>
        <img src = "https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Logo.wine.svg" className = "logo" alt = "stack overflow" />
        <ul className="list-container">
            <li className="sidebar-elements">
                <MdQuestionMark className="sidebar-element-icon"/>
                <p>Questions</p></li>
            <li className="sidebar-elements">
                <IoBagOutline className="sidebar-element-icon"/>
                <p>Jobs</p>
            </li>
            <li className="sidebar-elements">
                <GrDocumentText className="sidebar-element-icon"/>
                <p>Documentation</p>
            </li>
            <li className="sidebar-elements">
                <BsTag className="sidebar-element-icon"/>
                <p>Tags</p>
            </li>
            <li className="sidebar-elements">
                <FaRegUser className="sidebar-element-icon"/>
                <p>Users</p>
            </li>
            <li className="sidebar-elements">
            <BsBookmark className="sidebar-element-icon"/>
                <p>Badges</p>
            </li>
        </ul>
    </nav>

)

export default SideBar