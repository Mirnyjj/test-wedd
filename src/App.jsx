import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getWedding } from "./store/selectors/wedding.selectors";
import { Page } from "./components/Page/index";
import { NotFoundPage } from "./components/NotFoundPage/index"


export const App = () => {
  const { users } = useSelector(getWedding);

  return (
    <div className="routes">
      <Routes>
        <Route exact={true} path="/" element={<Page />} />
        {users.map((user, key) => (
          <Route
            exact={true}
            path={`/${user.url}`}
            element={<Page />}
            key={key}
          />
        ))}
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
};
