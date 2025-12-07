import { Link, useRouteError } from "react-router-dom";
import astronautImg from "../assets/astronaut.svg";

export default function ErrorPage() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="container min-h-screen grid place-content-center">
        <article className="max-w-4xl grid grid-cols-2 gap-x-16">
          <div>
            <img
              src={astronautImg}
              alt="astronaut image"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="font-bold text-neutral text-9xl tracking-wider mb-6">
              404
            </p>
            <div className="flex flex-col items-start justify-center gap-y-4">
              <p className="text-4xl font-bold">UH OH! You're lost.</p>
              <p>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <Link
                to="/"
                className="btn btn-outline btn-primary btn-lg border-4 
                  rounded-4xl px-10"
              >
                HOME
              </Link>
            </div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
}
