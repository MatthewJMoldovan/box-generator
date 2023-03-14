import React, { userState, useState } from "react";
import "./style.css";


const allBoxes = [];


const Box = (props) => {
  const [color, setColor] = useState("");
  const [selcectedBoxes, setSelectedBoxes] = useState(allBoxes)

  console.log(selcectedBoxes);
  
  const handleNewBoxSubmit = (e) => {
    e.preventDefault();
    const newBox = { color };
    const updatedBoxes = [...selcectedBoxes, newBox];
    setSelectedBoxes(updatedBoxes)
    setColor("")
  };


  return (
    <div className="App">
        <h1>Add a new box!</h1>
        <form onSubmit={(e) =>{
            handleNewBoxSubmit(e);
        }}>
            <label>Color: </label>
            <input
            type="text"
            value={color}
            onChange={(e) =>{
                setColor(e.target.value)
            }}/>
            <button>Add</button>
        </form>
        <div className="boxCard">
            {selcectedBoxes.map((box,i) => {
                return <section key={i} className="box" style={{backgroundColor: box.color}}>
                </section>
            })}
        </div>
    </div>
  );
};

export default Box;
