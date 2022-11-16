import React,{useState} from 'react'

export default function TextForm(props) {
  

 
const handleUpClick=()=>{
   // console.log("clicked on button" + text);
   //console.log(text);
    let newText = text.toUpperCase();
    //  setText("You Have Clicked On Button")
    setText(newText);

}
const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
}

const handlecleartext=()=>{
    let newtext = (" ");
    setText(newtext);
 /* clear text button */}  

 const handleCopy=()=>{
    //alert("text Copied!")
    props.showalert("Text copied ","success")

   let newtext = document.getElementById("myBox") ;
   navigator.clipboard.writeText(newtext.value);
}

const handleOnChange=(event)=>{
    //console.log("Changed Occur");
    setText(event.target.value);
    

}
const[text,setText] = useState(" ");
return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
         color:props.mode==='light'?'black':'white'}}  id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Click To Convert UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Click To Convert LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecleartext}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Some Details About Your Text</h1>
        <p><b>{text.split(" ").filter((e)=>{return e.length!=0}).length}</b>words and  <b>{text.length}</b> character</p>
        <p><b>{0.008*text.split(" ").filter((e)=>{return e.length!=0}).length }</b> Time taken to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
);

}
