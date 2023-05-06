// 라우트의 전환이 이루어지지 않고 배후에서 loader와 action을 실행할 수 있도록 해주는 훅 useFetcher. 실행하면 객체를 반환함
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const {data, state} = fetcher;
  // loader 나 action이 실행 된 후 data와 message를 받았는지 확인
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state])

  // 라우트의 전환이 이루어지지 않기 때문에 action 함수가 존재하는 라우트의 경로를 밝혀야함! -> action 프로퍼티
  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
