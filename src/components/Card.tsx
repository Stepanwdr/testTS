import React, {FC} from 'react';
import styled from 'styled-components';
export enum CardVariant{
outlined='outlined',
primary='primary',

}
interface CardProps{
    width?:number,
    height?:number,
    variant?:CardVariant,
    onClick:()=>void
}
const Card:FC<CardProps> = ({width,height,variant,children,onClick}) => {
    return (
        <CardContainer
         width={width} 
         height={height}
         variant={variant}
         onClick={onClick}
         >
             {children}
         </CardContainer>
    )
};
const CardContainer=styled.div<CardProps>`
border-radius:20px;
width:${(props)=>props.width+"px"};
height:${(props)=>props.height+"px"};
background-color:grey;
border:solid ${(props)=>props.variant===CardVariant.outlined ? "1px":"none"} red;
`
export default Card;