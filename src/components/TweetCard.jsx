import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

export default function TweetCard({ tweet }) {

  const [copied, setCopied] = useState(false);

  const copyTweet = () => {
    navigator.clipboard.writeText(tweet.text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-md transition-colors duration-300">

      <div className="flex justify-between items-start mb-3">

        <span className="text-blue-600 dark:text-blue-400 font-bold">
          Tweet #{tweet.id}
        </span>

        <button
          onClick={copyTweet}
          className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>

      </div>

      <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
        {tweet.text}
      </p>

    </div>
  );
}