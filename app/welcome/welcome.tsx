import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 flex flex-col items-center justify-center text-center gap-10">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Welcome to the NUHS Data Protection Show!
            </p>
            <ul className="flex flex-col gap-2">
              <Link to="/real-or-ai">Real or AI</Link>
              <Link to="/best-practices">Best Practices</Link>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
