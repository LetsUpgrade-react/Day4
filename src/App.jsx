import React, { useState } from 'react';
import './style.css';
import Button  from "./Button"
import Game from "./Tic"
const App =()=>{
    const [currentState, setCurrentState]=useState(true)
    const [start, setStart]=useState(false)
    return (
        <div>
 <h1 style={{textAlign:'center',color:'white'}}>
           Tic Tac Toe Applications
            </h1>
            <p style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>
                Welcome to React Js Development Program!.
            </p>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>Day 4 Assignment</h3>
            {
                start?
                <Game currentState={currentState} setCurrentState={setCurrentState}/>
                :
                <div className="mt-5 pt-5" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Button onClick={()=>{setStart(true)}} text={"Start With X"} />
                    <Button onClick={()=>{setStart(true); setCurrentState(false)}} text={"Start With O"} />
                </div>
            }
            
        </div>
    )
}
export default App