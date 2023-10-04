import { useReducer} from 'react';
import './App.css';
import Table from './components/Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [['', '', '',], ['', '', '',], ['', '', '',]]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER :
      return {...state, winner: action.winner};
    case CLICK_CELL :
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]
      tableData[action.row][action.cell] = state.turn;
      return {...state, tableData};
    case CHANGE_TURN :
      return {...state, turn: state.turn === 'O' ? 'X' : 'O'}
  };
};

function App() {
  const [gameState, dispatchGame] = useReducer(gameReducer, initialState);

  const tableClickHandler = () => {
    dispatchGame({type: SET_WINNER, winner: 'O'});
  }

  return (
    <>
      <Table onClick={tableClickHandler} tableData={gameState.tableData} dispatchGame={dispatchGame} />
      {gameState.winner && <p>{gameState.winner}님의 승리!</p>}
    </>
  );
}

export default App;
