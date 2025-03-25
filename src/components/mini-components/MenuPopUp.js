

import React from 'react'
import LabelComponent from './LabelComponent'
import Input from './Input'


function MenuPopUp(props) {

    return (
        <div className='edit-modal'>


            {(props.clickedId === props.items.id)?
           ( <form key={props.items.id}>
                <LabelComponent value={"Id"} />
                <Input value={props.items.id} />
                <LabelComponent value={"Name"} />
                <Input value={props.items.name} />

            </form> 
    ): ""
    }


            {/*     <p onClick={()=> props.onAdd()}>{props.items.id} </p> */}
        </div>
    )
}

export default MenuPopUp
