/* eslint-disable no-lone-blocks */
import React from 'react'
import MenuData from './Resources/MenuData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuPopUp from './mini-components/MenuPopUp';
import { set } from 'mongoose';

const customStyle = {
  fontSize: "1.899rem",
  cursor: "pointer",
  fill: "#006A67",

}

function Menu() {

  const menus = MenuData();
  /*  const [isClicked, setIsClicked] = React.useState(false); */
  const [clickedId, setClickedId] = React.useState(0);

  function handleDelete(id) {
    alert(` DELETED ${id}`)
  }
  function handleEdit(id) {
    setClickedId(id);
  }

  function handlePopUp(id) {

    /* setIsClicked(true); */
  }

  /*  function handleClick() {
     /*   alert("from child component!!") 
   } */


  const group = menus.reduce((acc, item) => {
    (
      acc[item.type] = acc[item.type] || []).push(item);
    return acc;
  }, {});
  console.log("menus", group)

  return (
    <div>
      <h1> Menu Management</h1>
      {console.log(menus)}


      {Object.entries(group).map(([type, items]) => {

        return (
          <div key={type} className='menu-container'>
            <p className='menutitle'>{type.toLocaleUpperCase()}</p>
            <div className='menu-items menus-heading'>
              <p style={{ width: "20%" }}>ID</p>
              <p style={{ width: "25.89%" }}>NAME</p>
              <p style={{ width: "40%" }}>PRICE</p>
            </div>


            {items.map((item, index) => {



              return (
                <div key={index} className='menu-items'>
                  <p style={{ width: "20%" }} onClick={() => handlePopUp(item.id)} >{item.id}</p>
                  <p style={{ width: "60%" }} onClick={() => handlePopUp(item.id)} >{item.name}</p>
                  <p style={{ width: "40%" }} onClick={() => handlePopUp(item.id)} >{item.price}</p>
                  <p style={{ width: "5%" }}><EditIcon style={customStyle} onClick={() => handleEdit(item.id)} /></p>
                  <p style={{ width: "5%" }}><DeleteIcon style={customStyle} onClick={() => handleDelete(item.id)} /></p>
                  <div className='edit-modal'>
                  <MenuPopUp items={item} clickedId={clickedId} />
                </div>
                </div>
        )
      })}
    </div>
  )
})}



    </div >
  )
}

export default Menu;
