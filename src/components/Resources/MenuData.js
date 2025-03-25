import React,{useState} from 'react'

function MenuData() {
    const [menus, setMenus] = useState([]);
       /*  const [errors, setErrors] = useState(false);
        const [loading, setLoading] = useState(false); */
    
    React.useEffect(() => {
            const fetchData = async () => {
               /*  setLoading(true) */
                try {
                    const response = await fetch("http://localhost:4000/menus");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const result = await response.json();
                    setMenus(result.MenuItems);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                   /*  setErrors(true); */
                } finally {
                   /*  setLoading(false) */
                }
            };
    
            fetchData();
        }, []);
  return  menus;
}

export default MenuData
