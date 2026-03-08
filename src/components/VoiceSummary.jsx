import { Sparkles } from "lucide-react";

export default function VoiceSummary({ summary }) {

  if (!summary) return null;

  return (
    <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-6 border border-indigo-100 dark:border-gray-700 mb-10 transition-colors duration-300">

      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Brand Voice Summary
        </h3>
      </div>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300">

        <li>
          <strong className="text-gray-900 dark:text-gray-100">Tone:</strong> {summary.tone}
        </li>

        <li>
          <strong className="text-gray-900 dark:text-gray-100">Target Audience:</strong> {summary.audience}
        </li>

        <li>
          <strong className="text-gray-900 dark:text-gray-100">Content Themes:</strong> {summary.themes}
        </li>

        <li>
          <strong className="text-gray-900 dark:text-gray-100">Communication Style:</strong> {summary.style}
        </li>

      </ul>

    </div>
  );
}