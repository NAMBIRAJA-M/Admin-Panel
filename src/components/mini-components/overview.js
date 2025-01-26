



function Overview(props) {
    const data = [
        {
            heading: "Total Orders",
            value: props.orderscount,
            src: "/assets/totalorders.svg",
        },
        {
            heading: "Pending Orders",
            value: 0,
            src: "/assets/pending.svg",
        },
        {
            heading: "Total Delivery",
            value: 0,
            src: "/assets/truck.svg",
        },
        {
            heading: "Total Menus",
            value: 0,
            src: "/assets/menu-down.svg",
        }, {
            heading: "No. Of Employees",
            value: 0,
            src: "/assets/people.svg",
        }, {
            heading: "Earnings",
            value: 0,
            src: "/assets/currency-rupee.svg",
        }
    ]
    
    
    
    return (
        <>
            <div className="overview-section">
                {data.map((e)=> (
                    <>
                        <div className='details-section primary'>
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



        </>
    )
}


export default Overview;