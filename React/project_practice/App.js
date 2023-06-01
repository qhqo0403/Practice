import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyPage from "./pages/My";
import AccountPage from "./pages/Account";
import RecentReadsPage from "./pages/RecentReads";
import ToBeReadsPage from "./pages/TobeReads";
import MyChallengePage from "./pages/MyChallenge";
import NewChallengePage from "./pages/NewChallenge";
import MyChallengeDetailPage from "./pages/MyChallengeDetail";
import ReviewPage from "./pages/Review";
import NewReviewPage from "./pages/NewReview";
import MemoPage from "./pages/Memo"
import ChallengeRoot from "./pages/ChallengeRoot";

const router = createBrowserRouter([
  {path: '/', element: <MyPage />, children: [
    {path: 'account', element: <AccountPage />},
    {path: 'recent', element: <RecentReadsPage />},
    {path: 'tobe', element: <ToBeReadsPage />},
    {path: 'myChallenge', element: <ChallengeRoot />, children: [
      {index: true, element: <MyChallengePage /> },
      {path: ':challengeId', element: <MyChallengeDetailPage /> },
      {path: 'new', element: <NewChallengePage />}
    ]},
    {path: 'review', element: <ReviewPage />},
    {path: 'review/new', element: <NewReviewPage />},
    {path: 'memo', element: <MemoPage />}
  ]}
])


function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
