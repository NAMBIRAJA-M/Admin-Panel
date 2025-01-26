/* eslint-disable react-hooks/rules-of-hooks */
import Overview from './mini-components/overview';
import Sidebar from './mini-components/sidebar';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchBar from './mini-components/SearchBar';


import { useEffect, useState } from 'react';

function Dashboard() {
    const [Orders, setOrders] = useState([]);
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            try {
                const response = await fetch("http://localhost:4000/order");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const orders = await response.json();
                /*  console.log("Orders from ReactJS:", orders); */
                setOrders(orders.orderedItems);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setErrors(true);
            } finally {
                setLoading(false)
            }
        };

        fetchOrders();
    }, []);


  


    if (loading) {
        return <div>Loading ......</div>
    }
    if (errors) {
        return <div>Something went wrong ! please try again......</div>
    }
    console.log("orders from reactjs:", Orders.length);
    return (
        <>



            <div className="dashboard-container">
                <Sidebar />
                <div className='centre-section'>
                    <div className='navbar-section'>
                        <div className='search'>
                            <SearchBar style={{ position: "relative", left: "0" }} />
                        </div>

                        <div className='vline'></div>
                        <NotificationsNoneIcon style={{ fontSize: "1.899rem", cursor: "pointer", fill: "white" }} />

                        <div className='vline'></div>
                        <Avatar alt='avatar' src='/assets/avatar.png' sx={{ width: 30, height: 30 }} className='avatar' />
                    </div>
                    <div className='main-section'>
                        <div className='details-section'>
                            <div className='article-section'>
                                <p>Active users</p>

                                {<p>{Orders.length}</p>}


                            </div>
                            <div className='circle'> <img src='/assets/totalorders.svg' alt='icon'
                                style={{
                                    width: "30px", height: "30px",
                                }} />
                            </div>
                        </div>
                        <Overview orderscount={Orders.length} />
                       
                    </div>
                </div>
            </div>
        
        </>
    )
}


export default Dashboard;