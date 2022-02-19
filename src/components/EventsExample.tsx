import React,{FC, useRef, useState} from 'react';

const EventsExample:FC = () => {
    const inputRef=useRef<HTMLInputElement>(null)
    const [value,setValue]=useState<string>("")
    const [isDrag,setIsDrag]=useState<boolean>()
    const handleChange=(ev:React.ChangeEvent<HTMLInputElement>)=>{
       setValue(ev.target.value)
    }
    const handleClick=(ev:React.MouseEvent<HTMLButtonElement>)=>{
console.log(inputRef.current?.value);
    }
    const handleDrag=(ev:React.DragEvent<HTMLDivElement>)=>{
        ev.preventDefault()
        console.log("DRAG");
    }
    const handleDrop=(ev:React.DragEvent<HTMLDivElement>)=>{
        ev.preventDefault()
        console.log("DROP");
    }
    const handleDragLeave=(ev:React.DragEvent<HTMLDivElement>)=>{
        ev.preventDefault()
        console.log("DRAG LEAVE");
    }
    const handleDragOver=(ev:React.DragEvent<HTMLDivElement>)=>{
        ev.preventDefault()
        console.log("DRAG OVER");
    }
   
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} placeholder="changeBle"/>
            <input type="text" ref={inputRef} placeholder="doesnt changeble"/>
            <button onClick={handleClick}>Click</button>
        <div onDrag={handleDrag} draggable style={{width:"200px" ,height:"200px",backgroundColor:"red",marginTop:"100px"}}></div> 
        <div onDrop={handleDrop}
              onDragOver={handleDragOver} 
              onDragLeave={handleDragLeave}
              style={{width:"200px" ,height:"200px",backgroundColor:"red",marginTop:"100px"}}></div> 
        </div>
    );
};

export default EventsExample;