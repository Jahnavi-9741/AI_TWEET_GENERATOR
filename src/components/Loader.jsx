import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <Loader2 className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-spin" />

      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
        Generating Tweets...
      </h3>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        AI is analyzing the brand voice
      </p>

    </div>
  );
}