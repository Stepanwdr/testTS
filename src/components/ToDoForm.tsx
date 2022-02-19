import { FC, useState,useRef} from "react";
import styled from "styled-components";
interface ToDoFormProps{
    onAdd(title:string):void,
 
}
 const ToDoForm:FC<ToDoFormProps>=(props)=>{
     const [title,setTitle]=useState<string>("")
   const handleChange=(ev:React.ChangeEvent<HTMLInputElement>)=>{
ev.preventDefault()
setTitle(ev.target.value)
   }
   const ref=useRef<HTMLInputElement>(null)
     const handleKeyPress=(event:React.KeyboardEvent)=>{
   if(event.key==="Enter"){
   {props.onAdd(ref.current!.value)}
    ref.current!.value=""
    }
     }


    return (
        <>
            <Input
            type="text"
            placeholder="Add ToDo"
            value={title}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            ref={ref}
            />
            </>
    )
    }

const Input =styled.input.attrs({

})
`
&::placeholder{
    color:red,
    }
`
export default ToDoForm