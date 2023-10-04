import React from "react";
import { CLICK_CELL, CHANGE_TURN } from "../App";

const Td = ({rowIndex, cellIndex, dispatchGame, cellData}) => {
  const tdClickHander = () => {
    console.log(rowIndex, cellIndex);
    dispatchGame({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
    dispatchGame({type: CHANGE_TURN})
  }

  return (
    <td onClick={tdClickHander}>{cellData}</td>
  )
}

export default Td;