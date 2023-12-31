import React from 'react';
import * as C from "./style";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa"

function GridItem( {item, onDelete}) { // removida a seta
   
  return (
    <C.Tr>
      <C.Td> {item.desc}</C.Td>
      <C.Td> {item.amount}</C.Td>
      <C.Td>
        {item.expense ? ( 
            <FaRegArrowAltCircleDown color="red" />
        ) : (
            <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
       <C.Td alignCenter>
         <FaTrash onClick={() => onDelete(item.id)} />
       </C.Td>
    </C.Tr>
    )
}

export default GridItem