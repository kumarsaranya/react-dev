import { useRouteError } from "react-router";
const ErrorComponent = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <div>
      Error component {err.status} {err.statusText}
    </div>
  );
};

export default ErrorComponent;
