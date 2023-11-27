import logo from "../Images/react.png";
 function Header()
{
    return(
     <div className="py-2 pl-2" style={{borderBottom:"1px solid #777"}}>
        <img alt="" src={logo} style={{width:"36px",height:"36px" ,padding:"5px"}}/>
        <span className="h2 pt-4 text-white-50" > بازی شماره ها</span>
     </div>
    )
}

export default Header;