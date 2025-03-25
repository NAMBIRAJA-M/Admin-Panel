import {useState,useEffect} from 'react'

function UserData() {

     const [user, setUser] = useState([]);
           /*  const [errors, setErrors] = useState(false);
            const [loading, setLoading] = useState(false); */
        
        useEffect(() => {
                const fetchData = async () => {
                   /*  setLoading(true) */
                    try {
                        const response = await fetch("http://localhost:4000/user");
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const result = await response.json();
                        setUser(result.users);
                        console.log("USERS : ",result.users);
                    } catch (error) {
                        console.error("Error fetching orders:", error);
                       /*  setErrors(true); */
                    } finally {
                       /*  setLoading(false) */
                    }
                };
        
                fetchData();
            }, []);


  return   user;
}

export default UserData
