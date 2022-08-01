import React, { useState } from "react";
import SelectionWidget from "./SelectionWidget";

const SelectTent = () => {
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [input, setInput] = useState(null);
  const [SubmittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    setSubmittedData((prevState) => {
      return [
        ...prevState,
        {
          color: color,
          size: size,
          text: input,
        },
      ];
    });
  };
  console.log(SubmittedData);

  return (
    <div className="App">
      <div className="select-tent">
        <h1>Select Tent</h1>
        <div className="tent-content">
          <h1>Color</h1>
          <SelectionWidget
            setColor={setColor}
            setSize={setSize}
            category="color"
            options={["Red", "Green", "Blue"]}
          />
        </div>
        <div className="tent-content">
          <h1>Color</h1>
          <SelectionWidget
            setColor={setColor}
            setSize={setSize}
            category="size"
            options={["Small", "Medium", "Large", "Extra Large"]}
          />
        </div>
        <div className="tent-content">
          <h1>Name</h1>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        
        </div>
        <div className="" style={{marginTop:"2rem"}}>
        <buton
            className="btn-widget btn-submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </buton>
        </div>
      </div>
      <div className="submitted-data-main">
        {SubmittedData.length > 0
          ? SubmittedData.map((el) => {
              return (
                <div className="submitted-data">
                  <h3>Color : {el.color}</h3>
                  <h3>Make : {el.size}</h3>
                  <h3>Name : {el.text}</h3>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default SelectTent;
