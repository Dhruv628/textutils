import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('UpperCase was clicked' +text ) 
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick=()=>{
        console.log('LowerCase was clicked' +text ) 
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick=()=>{
        console.log('LowerCase was clicked' +text ) 
        let newtext='';
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        
      }
     const [text, setText] = useState('Enter text here');
    
  return (
   <>
 
   <body className={`h-[92.7vh] text-${props.textcolor}` } >
    
  <div className='py-3 my-1S'>
 <h1  className="block  text-xl m-auto w-[57rem]  font-medium ">{props.heading} </h1>
  </div>
 
<textarea  id="message"  value={text} rows="4" onChange={handleOnChange} className={` m-auto block w-[60vw] p-2.5 text-sm  rounded-lg border border-gray-300   `} placeholder="Enter text here"></textarea>
  <button  onClick={handleUpClick} className='inline-block my-2 px-2 py-1 bg-blue-500 text-white rounded-lg text-sm ml-[19.15rem] '>Convert to UpperCase</button> 
  <button onClick={handleLoClick} className='inline-block my-2 px-2 py-1 ml-4 bg-blue-500 text-white rounded-lg text-sm '>Convert to LowerCase</button> 
  <button onClick={handleClearClick} className='inline-block my-2 px-2 py-1 ml-4 bg-blue-500 text-white rounded-lg text-sm '> Clear Text</button> 
  <button type="submit" onClick={speak} className='inline-block my-2 px-2 py-1 ml-4 bg-blue-500 text-white rounded-lg text-sm '>Speak</button>
  <div className='mx-[19.15rem]' >
    <div className='font-semibold text-xl mt-4'>
        Words and Letter
    </div>
    <div>  {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.trim().length} letters</div>
    <div> {0.08*(text.trim().length === 0 ? 0 : text.trim().split(" ").length)} minutes to read this</div>
    <div className='font-semibold text-xl mt-4'>Preview</div>
    <div >{text.length>0?text:"Enter your text to preview"}</div>
  </div>
  </body>
   </>

  )
}
