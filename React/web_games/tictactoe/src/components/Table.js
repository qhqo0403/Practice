import React from "react";
import Tr from "./Tr";

const Table = ({onClick, tableData, dispatchGame}) => {
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => <Tr rowData={tableData[i]} key={i} rowIndex={i} dispatchGame={dispatchGame} />)}
    </table>
  )
}

export default Table;