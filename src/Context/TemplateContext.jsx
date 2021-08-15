import React, { useState, createContext, useEffect } from "react";

export const TemplateContext = createContext();

export const TemplateProvider = (props) => {
  
  const [template, setTemplate] = useState([]);
 

  // useEffect(()=>{
  //     console.log({cart})
  // },[cart])

  return (
    <TemplateContext.Provider value={[template,setTemplate]}>
      {props.children}
    </TemplateContext.Provider>
  );
};