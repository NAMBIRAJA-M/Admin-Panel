
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function Dashboard() {
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-sections">
                    <div className="logos-section">
                        <img className="logodash" src="/assets/logo_green_bg.jpeg" alt="logo" />
                        <p className="logotxtdash">Green Bowl </p>
                    </div>
                    <div >
                        <ul className="menus-section">
                            <li className='active'><SpaceDashboardIcon />Dashboard</li>
                            <li> <ShoppingCartOutlinedIcon/> Order Management</li>
                            <li><MenuBookOutlinedIcon/> Menu Management</li>
                            <li><PeopleOutlineOutlinedIcon/> Customer Management</li>
                            <li><AssessmentOutlinedIcon />Reports and Analytics</li>
                            <li> <SettingsApplicationsOutlinedIcon/>Settings</li>
                            <li><AdminPanelSettingsOutlinedIcon/> Authentication and Security</li>
                        </ul>
                       <p className='logoutfunc'> <LogoutOutlinedIcon />Logout</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Dashboard;