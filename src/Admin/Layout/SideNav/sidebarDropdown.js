import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dropdown_icon } from "../../Constance/icons";
import classes from "./sidebarDropDown.module.css"

const SidebarDropdown = ({ dropdownData }) => {
    const location = useLocation()
    const tabIsCurrentlyActive=dropdownData.items.some(item => item.redairect ===location.pathname)
    const [activeTab, setIsActive] = useState(tabIsCurrentlyActive);
 
    const activeHandler = () => {
      setIsActive(currentState => !currentState)
    }
    

    useEffect(()=>{
      if(!tabIsCurrentlyActive){
        setIsActive(false)
      }
    },[tabIsCurrentlyActive , setIsActive])

  return (
      <div className={`${classes.dropdown} ${activeTab && classes.bg_active}`}>
      <div onClick={activeHandler} className="d-flex justify-content-between py-2">
       <div>
        {dropdownData.icon}
        {dropdownData.title}    
       </div>
        <div className="text-end">{dropdown_icon}</div>
      </div>

      {activeTab && 
        dropdownData.items.map((item , index) => (
            <Link to={item.redairect} className={`${classes.dropdown_item} ${item.redairect ===location.pathname && classes.active}` } key={`subnav-${index}`}>
              <div className="py-2">
                {item.icon} {item.title}
              </div>
            </Link>
        ))}

    </div>
  );
};

export default SidebarDropdown;
