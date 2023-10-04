import React from "react";
import Td from "./Td";

const Tr = ({rowData, rowIndex, dispatchGame}) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => <Td key={i} cellIndex={i} cellData={rowData[i]} rowIndex={rowIndex} dispatchGame={dispatchGame} />)}
    </tr>
  )
}

export default Tr;