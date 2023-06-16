import React from 'react';
import * as C from "./style";
import ResumeItem from '../ResumeItem/index';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const index = ({ income, expense, total}) => {
  return (
   <C.Container> 
     <ResumeItem title="Entradas" Icon={ FaRegArrowAltCircleUp} value={income} />
     <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
     <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
   </C.Container>
  )
}

export default index