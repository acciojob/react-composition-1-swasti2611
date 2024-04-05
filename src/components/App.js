
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  let obj=[{title:"Tab 1"},
  {title:"Tab 2"},
  {title:"Tab 3"}
          ]
          const [data,setData]=useState(obj)
  return (
    <div>
        <Tabs data={data}/>
    </div>
  )
}

export default App
