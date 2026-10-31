import { getTweet } from 'react-tweet/api';
import { Suspense } from 'react';
import {
  TweetSkeleton,
  EmbeddedTweet,
  TweetNotFound,
  type TweetProps,
} from 'react-tweet';
import './tweet.css';

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  // Both the fetch AND the render of EmbeddedTweet are wrapped here.
  // A malformed/unexpected tweet payload can throw *during render*
  // (not just during the fetch), and that render-time throw used to
  // escape uncaught -- which crashes the entire static export on
  // platforms that can actually reach the Twitter syndication API
  // (this previously only surfaced on Vercel, never in local/offline
  // builds, because the fetch itself fails offline and short-circuits
  // before EmbeddedTweet ever renders).
  try {
    const tweet = id ? await getTweet(id) : undefined;

    if (!tweet) {
      const NotFound = components?.TweetNotFound || TweetNotFound;
      return <NotFound error={error} />;
    }

    return <EmbeddedTweet tweet={tweet} components={components} />;
  } catch (err) {
    if (onError) {
      error = onError(err);
    } else {
      console.error(err);
      error = err;
    }
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        {/* <Suspense fallback={<TweetSkeleton />}> */}
        <ReactTweet id={id} />
        {/* </Suspense> */}
      </div>
    </div>
  );
}