import { useEffect, useState } from 'react';

function OrdersData() {
 
    

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
    
    
    
  return  Orders;
}

export default OrdersData;
