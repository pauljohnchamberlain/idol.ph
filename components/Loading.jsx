import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary animate-pulse">
            <Loader2 className="w-16 h-16 text-white animate-spin" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Loading social cred...
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Not long now</p>
        </div>
      </main>

      {/* <div className='p-4 space-y-4'>
				<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
				<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6'></div>
				<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
			</div> */}
    </div>
  );
}
