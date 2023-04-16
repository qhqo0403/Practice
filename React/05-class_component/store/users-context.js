import React from 'react';

// 컨텍스트를 생성할 때에는 함수형 컴포넌트와 같음
const UsersContext = React.createContext({
  users: []
});

export default UsersContext;