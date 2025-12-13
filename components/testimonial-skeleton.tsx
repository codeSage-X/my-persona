export function TestimonialSkeleton() {
    return (
      <div className="w-full flex flex-col items-center animate-pulse">
        {/* Profile image skeleton */}
        <div className="relative mb-6">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-teal-400 to-pink-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-700" />
          </div>
        </div>
  
        {/* Name skeleton */}
        <div className="h-10 bg-gray-700 rounded-md w-48 mb-1"></div>
  
        {/* Title skeleton */}
        <div className="h-6 bg-gray-700 rounded-md w-64 mb-4"></div>
  
        {/* Rating skeleton */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-700"></div>
          ))}
        </div>
  
        {/* Text skeleton */}
        <div className="space-y-2 w-full max-w-lg mb-8">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-4/5 mx-auto"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    )
  }
  