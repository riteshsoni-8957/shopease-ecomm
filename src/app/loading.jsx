export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800">
          Loading...
        </h2>

        <p className="text-gray-500">
          Please wait while we load your content.
        </p>
      </div>
    </div>
  );
}