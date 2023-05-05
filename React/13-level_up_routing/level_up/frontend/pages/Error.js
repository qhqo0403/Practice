// 컴포넌트 밖으로 내보내지는 에러 데이터를 잡아내는 훅
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong.';
  // 에러를 구분하기 위해서 만들어준 status! JSON으로 넣었기 때문에 변환해줘야함
  if (error.status === 500) {
    message = error.data.message;
    /* message = JSON.parse(error.data).message; */
  }
  /* console.log(error) */
  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not found resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  )
}

export default ErrorPage;