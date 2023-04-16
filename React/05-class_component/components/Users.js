import { Component,/*  useState */ } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = { // class 컴포넌트에서의 state는 항상 객체의 형태이어야 하며 속성의 이름은 항상 state 여야 함!
      showUsers: true
    }
  }
  
  
  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }


  toggleUsersHandler() {
    // 상태를 업데이트 할 때 쓰는 메서드 setState. setState도 항상 객체를 사용함. 이전 상태를 갱신하는 것은 똑같이 함수형으로 작성해야 하는데 그것도 객체를 반환해야함!
    // 상태를 업데이트 하면 기존 상태 객체에 자동으로 병합
    this.setState((curState) => {
      return {showUsers: !curState.showUsers};
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}> {/* 항상 클래스 컴포넌트를 참조하도록 바인드 */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


/* const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
}; */

export default Users;
