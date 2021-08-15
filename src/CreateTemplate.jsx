import "./App.css";
import EmailEditor from "react-email-editor";
import React, { useRef, useEffect, useState ,useContext} from "react";
import { sendTemplateData, getTemplateData } from "./Backend/backend";
import { TemplateContext } from "./Context/TemplateContext";

export function CreateTemplate() {

  const emailEditorRef = useRef(null);
  const emailCreatorRef = useRef(null);
  
  const [template,setTemplate]= useContext(TemplateContext);

  const exportHtml = () => {

    emailEditorRef.current.editor.exportHtml((data) =>{

      const { design, html } = data;

     // sendTemplateData(design);

      console.log("exportHtml", design);
    });
  };

  useEffect(() => {
    getTemplateData().then((e)=>{
      console.log('useeejd[');
      console.log(e);
      setTemplate(e);
    });
  }, [ ]);

  useEffect(() =>{
    
  },[template])


  const onLoad = (data) => {
   
    console.log('onload');
    console.log(template);
    //emailEditorRef.current.editor.loadDesign(data);
  };

  return (
    <div className="App">
      <div className="index">
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad(template)}
        />
        <section className="index-button">
          <button>Save</button>
          <button>Edit</button>
        </section>
        {/* {TemplateData.map((data)=>(
          <>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad(data.template)} />
        <section className="index-button">
          <button>Save</button>
          <button>Edit</button>
        </section>
        </>))} */}
      </div>
      <div className="create">
        <EmailEditor ref={emailCreatorRef} />
        <button onClick={exportHtml}>Create Template</button>
      </div>
    </div>
  );
}
