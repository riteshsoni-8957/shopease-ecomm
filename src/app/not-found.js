import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Sorry, the page you are looking for doesnt exist or has been moved.
        </p>

        <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-[10px] py-[5px] text-white font-semibold transition hover:bg-blue-700"
            >
            ⬅ Back to Home
        </Link>
      </div>
    </main>
  );
}