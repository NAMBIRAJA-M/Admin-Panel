
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const Navigate = useNavigate();
    const [active, setActive] = useState(null);
    const sidebar = [
        { icon: <SpaceDashboardIcon />, label: "Dashboard" },
        { icon: <ShoppingCartOutlinedIcon />, label: "Order Management" },
        { icon: <MenuBookOutlinedIcon />, label: "Menu Management" },
        { icon: <PeopleOutlineOutlinedIcon />, label: "Customer Management" },
        { icon: <AssessmentOutlinedIcon />, label: "Reports and Analytics" },
        { icon: <SettingsApplicationsOutlinedIcon />, label: "Settings" },
        { icon: <AdminPanelSettingsOutlinedIcon />, label: "Authentication and Security" }
     ];

     function handleLogout(){
        sessionStorage.setItem("isAuthenticated", "false");
        Navigate('/')
    /*   alert("sucessfully logged out") */
     }
     function handleClick(index){
     
        setActive(index);

        if(index ===0){
            Navigate('dashboard')
        }
        if(index ===1){
            Navigate('orders')
        }
        if(index ===2){
            Navigate('menus')
        }

        }
     
     
    return (
        <div className="sidebar-sections">
            <div className="logos-section">
                <img className="logodash" src="/assets/logo_green_bg.jpeg" alt="logo" />
                <p className="logotxtdash">Green Bowl </p>
            </div>
            <div >
                <ul className="menus-section">
                    {sidebar.map((item, index) => (
                        <li key={index}  className={`sidebar-item ${active === index ? "active" : ""}`} onClick={() => handleClick(index)}>{item.icon} <span>{item.label}</span></li>
                    ))}
                    


                </ul>
                <p className='logoutfunc' onClick={()=>handleLogout()}> <LogoutOutlinedIcon />Logout</p>
            </div>
        </div>

    )

}

export default Sidebar;