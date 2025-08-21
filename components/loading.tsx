/**
 * Loading component for better user experience
 * Can be used throughout the application
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Spinning circle */}
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        {/* Loading text */}
        <p className="mt-4 text-gray-600 text-center">Loading...</p>
      </div>
    </div>
  )
}
