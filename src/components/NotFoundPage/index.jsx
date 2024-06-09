import { useCallback } from "react";

import "./style.scss";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleRedirect = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage-status">404</h1>
      <h2 className="notFoundPage-description">Страница не найдена</h2>
      <div className="notFoundPage-control">
        <span className="href" onClick={handleRedirect}>
          перейти на главную
        </span>
      </div>
    </div>
  );
};
