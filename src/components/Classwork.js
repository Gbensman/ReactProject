import React from 'react'
import './Classwork.css'
import grpimg from '../images/phone4-500x500.jpg'
import ClassworkProp from './ClassworkProp'

const Classwork = (props) =>{
    return <div className="box-wrap">
            <ClassworkProp
            displayimg={grpimg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique perspiciatis deserunt voluptate? Ratione magnam recusandae iure consequuntur quas dolorum asperiores exercitationem debitis, veritatis, numquam similique? Eaque voluptates ratione aliquid."/>
            <ClassworkProp
            displayimg={grpimg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique perspiciatis deserunt voluptate? Ratione magnam recusandae iure consequuntur quas dolorum asperiores exercitationem debitis, veritatis, numquam similique? Eaque voluptates ratione aliquid."/>
            <ClassworkProp
            displayimg={grpimg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique perspiciatis deserunt voluptate? Ratione magnam recusandae iure consequuntur quas dolorum asperiores exercitationem debitis, veritatis, numquam similique? Eaque voluptates ratione aliquid."/>
    </div>
}

export default Classwork