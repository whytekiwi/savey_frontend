import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();

  // TODO add styling to this page

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;