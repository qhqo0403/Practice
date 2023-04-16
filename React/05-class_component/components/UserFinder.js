import { Fragment, /* useState, useEffect, */ Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

/* const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]; */

class UserFinder extends Component {
  //context를 사용하기 위해서는 contextType을 꼭 써야함. 대신 한번만 쓸 수 있기 때문에 context는 한개만 연결 할 수 있음!
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    }
  }
  componentDidMount() {
    // http request....
    this.setState({filteredUsers: this.context.users});
    // 컴포넌트가 처음 마운트 되고나서 한번 실행! 갱신될때마다가 아니라 처음에만! 의존성 배열이 비어있는 useEffect와 같음
  }

  // 외부에서 들어온 props 값이 아니기 때문에 내부 상태 state의 변화만 감지하면 됨!
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      });
    }
  }
  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value});
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}


/* const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
}; */

export default UserFinder;