import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
  }

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;

  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-700 italic">
        <i>{error ? (error.statusText || error.message) : 'Unknown error'}</i>
      </p>
    </div>
  );
}

export default ErrorPage;