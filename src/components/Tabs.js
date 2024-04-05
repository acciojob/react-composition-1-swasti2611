import React, { useState } from 'react'

const Tabs = (props) => {
    console.log(props.data)
    const [click,setclick]=useState(false)
    const [clickData,setData]=useState('')
    function handleClick(value){
        setData(value)
        setclick(!click)
        //console.log(value)
    }
  return (
    <div>
    <ul>
      {props.data.map((item)=>(
        
            <li onClick={()=>handleClick(item.title)}>{item.title}</li>
        
      ))}
      </ul>
      {click && <div>This is content for {clickData}.</div>}
    </div>
  )
}

export default Tabs
