import React , { useState }from "react";
import SelectionWidget from "./SelectionWidget";

const SelectTent = () => {
  const [color,setColor] = useState(null);
  const [size,setSize] = useState(null);
  const [input,setInput] = useState(null);
  const [SubmittedData,setSubmittedData] = useState(null);
  var data = [];

  const handleSubmit = (e) => {  
   let  d={
      "color":color,
      "size" : size,
      "text" : input
    }
    data.push(d)
  }
  console.log(data)

  return (
    <div className="App">
      <div className="select-tent">
        <h1>Select Tent</h1>
        <div className="tent-content">
          <h1>Color</h1>
          <SelectionWidget setColor={setColor} setSize={setSize} category="color" options={["Red", "Green", "Blue"]} />
        </div>
        <div className="tent-content">
          <h1>Color</h1>
          <SelectionWidget setColor={setColor} setSize={setSize}  category="size" options={["Small", "Medium", "Large", "Extra Large"]} />
        </div>
        <div className="tent-content">
            <h1>Name</h1>
            <input type="text"
              class="form-control" name="" id="" aria-describedby="helpId" placeholder=""
              onChange={e=>{
                setInput(e.target.value);
              }}
              />
        </div>
        <buton className="btn-widget" onClick={e=>{
          handleSubmit(e)
        }}>Submit</buton>

      </div>
      <div>
        {data.length > 0 && data.map((el)=>{
          return (
            <h1>asd</h1>
          )
        })}
      </div>
    </div>
  );
};

export default SelectTent;
