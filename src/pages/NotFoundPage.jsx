import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <b>404 Not Found!!</b>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
