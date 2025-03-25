
import React from 'react'
import OrdersData from './Resources/OrdersData';
import UserData from './Resources/UserData';

function Ordersmanage() {
  const Orders = OrdersData();
  const Users = UserData();

  /*  console.log(Users); */
  const grouped = Orders.reduce((acc, item) => {
    (acc[item.user_id] = acc[item.user_id] || []).push(item);
    return acc;
  }, {});

  console.log("grouped",grouped)



  function UserDetails(userId) {

/*     console.log("USERID: ", userId); */
    const filteredUser = Users.filter(user => user.id == userId);
/*     console.log("Fuser", filteredUser); */

    return filteredUser;


  }


 
  let userDetails;

  /*   console.log("user raw",userDetails); */



  return (
    <>

      <h1>Orders Management</h1>
      {Object.entries(grouped)
        .sort((a, b) => new Date(a.order_date) - new Date(b.order_date))
        .map(([user_id, items]) => {
    
           userDetails=UserDetails(user_id);
            return (

              <div key={user_id}>
            {userDetails.map((user, index) => {
              return (
                <div key={index} className='orderUser'>
                  <p>{user.id}</p>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
              )


            })} 

            <div className='Orders'>
              {items.sort((a, b) => new Date(b.order_date) - new Date(a.order_date)).map((item, index) => {
                  const orderedDate = new Date(item.order_date);
                  return (
                   <p key={index}>
                      {item.id}-{item.name}-{item.paymentmethod} -{" "}
                      {orderedDate.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        timeZone: "Asia/Kolkata",
                      })}
                    </p> 
                  ); 
                })}
            </div>
          </div >
           )
        })}
    </>
  );


}

export default Ordersmanage;