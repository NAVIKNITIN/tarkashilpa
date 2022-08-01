import React, { useState } from "react";

const SelectionWidget = ({ options ,category,setColor,setSize}) => {
  const [active, setActive] = useState(null);
  return (
    <div className="widget-main">
      {options &&
        options.map((el, key) => {
          return (
            <button
              className={`${active === key ? "active" : ""} btn-widget`}
              onClick={(e) => {
                setActive(key);
                if(category === "color"){
                    setColor(el)
                }else{
                    setSize(el)
                }
                
              }}
            >
              {el}
            </button>
          );
        })}
    </div>
  );
};

export default SelectionWidget;
