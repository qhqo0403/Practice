import { useEffect, useReducer, useState} from 'react';
import './App.css';
import Table from './components/Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', '',], ['', '', '',], ['', '', '',]],
  recentCell: [-1, -1]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
const RESET_GAME = 'RESET_GAME';

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER :
      return {...state, winner: action.winner};
    case CLICK_CELL :
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]
      tableData[action.row][action.cell] = state.turn;
      return {...state, tableData, recentCell: [action.row, action.cell]};
    case CHANGE_TURN :
      return {...state, turn: state.turn === 'O' ? 'X' : 'O'};
    case RESET_GAME :
      return {...state, winner: '', tableData: [['', '', '',], ['', '', '',], ['', '', '',]], recentCell: [-1, -1]};
    default :
      return state;
  };
};

function App() {
  const [gameState, dispatchGame] = useReducer(gameReducer, initialState);
  const {winner, turn, tableData, recentCell} = gameState;
  const [isDraw, setIsDraw] = useState(false);

  const tableClickHandler = () => {
    dispatchGame({type: SET_WINNER, winner: 'O'});
  }

  useEffect(() => {
    const [row, cell] = recentCell;

    if (row < 0) {
      return;
    }

    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    };
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    };
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    };
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    };

    if (win) { // 승리
      dispatchGame({type: SET_WINNER, winner: turn});
      setTimeout(() => {
        dispatchGame({type: RESET_GAME})
      }, 1000);
    } else { // 무승부
      let end = true; // 테이블이 다 차있는지 확인하기 위한 변수
      tableData.forEach(row => {
        row.forEach(cell => {
          if (!cell) {
            end = false;
          }
        });
      });
      if (end) { // 게임 끝
        setIsDraw(true);
        setTimeout(() => {
          dispatchGame({type: RESET_GAME})
          setIsDraw(false);
        }, 1000);
      } else {
        dispatchGame({type: CHANGE_TURN});
      }
    }

  }, [recentCell]);


  return (
    <>
      <Table onClick={tableClickHandler} tableData={tableData} dispatchGame={dispatchGame} />
      {winner && <p>{winner}님의 승리!</p>}
      {isDraw && <p>무승부!</p>}
    </>
  );
}

export default App;
