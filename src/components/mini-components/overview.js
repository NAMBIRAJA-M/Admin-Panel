



function Overview(props) {
    const data = [
        {
            id:1,
            heading: "Total Orders",
            value: props.orderscount,
            src: "/assets/totalorders.svg",
        },
        {
            id:2,
            heading: "Pending Orders",
            value: 0,
            src: "/assets/pending.svg",
        },
        {
            id:3,
            heading: "Total Delivery",
            value: 0,
            src: "/assets/truck.svg",
        },
        {
            id:4,
            heading: "Total Menus",
            value: 0,
            src: "/assets/menu-down.svg",
        }, {
            id:5,
            heading: "No. Of Employees",
            value: 0,
            src: "/assets/people.svg",
        }, {
            id:6,
            heading: "Earnings",
            value: 0,
            src: "/assets/currency-rupee.svg",
        }
    ]
    
    
    
    return (

            <div className="overview-section">
                {data.map((e,index)=> (
                    <>
                        <div className='details-section primary' key={e.id} >
                            <div className='article-section'>
                                <p className="heading">{e.heading}</p>
                                <p className="value">{e.value}</p>
                            </div>
                            <div className='circle'> <img src={e.src} alt='icon'
                                style={{
                                    width: "30px", height: "30px",
                                }} />
                            </div>
                        </div>
                        
                    </>
                ))}


            </div>



     
    )
}


export default Overview;