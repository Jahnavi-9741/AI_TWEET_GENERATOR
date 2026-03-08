import { useState } from "react";

import Navbar from "../components/Navbar";
import BrandForm from "../components/BrandForm";
import Loader from "../components/Loader";
import VoiceSummary from "../components/VoiceSummary";
import TweetsList from "../components/TweetsList";
import CustomStyles from "../styles/CustomStyles";

import { generateTweetsAPI } from "../api/api";

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleGenerate = async (formData) => {

    setLoading(true);
    setResults(null);

    try {

      const response = await generateTweetsAPI(formData);

      setResults(response);

    } catch (error) {

      console.error(error);
      alert("Failed to generate tweets");

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <CustomStyles />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-20">

        {/* Header */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
            TweetCraft
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Craft viral brand tweets with AI
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Generate 10 tweets that match your brand voice
          </p>

        </div>

        {/* Form */}
        <BrandForm onSubmit={handleGenerate} isLoading={loading} />

        {/* Loader */}
        {loading && <Loader />}

        {/* Results */}
        {results && (
          <div className="mt-16">

            <VoiceSummary summary={results.summary} />

            <TweetsList tweets={results.tweets} />

          </div>
        )}

      </main>

    </div>
  );
}