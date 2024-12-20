import Overview from './mini-components/overview';
import Sidebar from './mini-components/sidebar';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchBar from './mini-components/SearchBar';


function Dashboard() {
    return (
        <>
            <div className="dashboard-container">
                <Sidebar />;
                <div className='centre-section'>
                    <div className='navbar-section'>
                        <div className='search'>
                            <SearchBar style={{ position: "relative", left: "0" }} />
                        </div>

                        <div className='vline'></div>
                        <NotificationsNoneIcon style={{ fontSize: "1.899rem",cursor:"pointer",fill:"white" }} />

                        <div className='vline'></div>
                        <Avatar alt='avatar' src='/assets/avatar.png' sx={{ width: 30, height: 30 }} className='avatar' />
                    </div>
                    <div className='main-section'>
                        <div className='details-section'>
                            <div className='article-section'>
                                <p>Total Orders</p>
                                <p>0</p>
                            </div>
                            <div className='circle'> <img src='/assets/totalorders.svg' alt='icon'
                                style={{
                                    width: "30px", height: "30px",
                                }} />
                            </div>
                        </div>
                        <Overview />
                    </div>
                </div>

            </div>
        </>
    )
}


export default Dashboard;