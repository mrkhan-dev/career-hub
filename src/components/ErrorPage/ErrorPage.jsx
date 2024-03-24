import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl">Oops!</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
