import React from "react";
import "./Error.css";

const Error = props => {
  const { err } = props;
  if (!err) return <h2>404 - Page Not Found</h2>;
  return (
    <div>
      <h2 className="Error">{err.errStatus}</h2>
      <h3 className="Error-msg"> {err.errMessage}</h3>
      <br />
      <h3>Sorry for this issue!</h3>
    </div>
  );
};

export default Error;
