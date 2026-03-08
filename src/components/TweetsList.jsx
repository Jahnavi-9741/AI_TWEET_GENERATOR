import TweetCard from "./TweetCard";

export default function TweetsList({ tweets }) {

  if (!tweets) return null;

  return (
    <div className="space-y-6">

      <h3 className="text-2xl font-bold mb-6">
        Generated Tweets
      </h3>

      <div className="space-y-4">

        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}

      </div>

    </div>
  );
}