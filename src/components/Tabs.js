import React, { useState } from 'react'

const Tabs = (props) => {
    console.log(props.data)
    const [click,setclick]=useState(false)
    const [clickData,setData]=useState(0)
    function handleClick(index){
        setData(index)
        setclick(!click)
        //console.log(value)
    }
  return (
    <div>
    <ul>
      {props.data.map((item,index)=>(
        
            <li onClick={()=>handleClick(index)}>{item.title}</li>
        
      ))}
      </ul>
      <p>{props.data[clickData].content}</p>
    </div>
  )
}

export default Tabs
