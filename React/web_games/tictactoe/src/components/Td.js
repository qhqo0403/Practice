import React from "react";
import { CLICK_CELL } from "../App";

const Td = ({rowIndex, cellIndex, dispatchGame, cellData}) => {
  const tdClickHander = () => {
    if (cellData) {
      return;
    }
    console.log(rowIndex, cellIndex);
    dispatchGame({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
  }

  return (
    <td onClick={tdClickHander}>{cellData}</td>
  )
}

export default Td;