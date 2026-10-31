"use client";
import { Tweet } from "react-tweet";
import { TweetNotFound } from "react-tweet";
import "./tweet.css";

// Deliberately the *client-side* `Tweet` component (SWR-based fetching),
// not the server-side getTweet()/<EmbeddedTweet> pair this file used to
// hand-roll. The hand-rolled server version rendered the tweet as part
// of Next.js's static export (Node, build time): when the build host
// could reach Twitter's syndication API and got back a tweet payload
// react-tweet's renderer didn't expect, it threw synchronously during
// React's server render pass. That kind of render-phase error cannot be
// caught from a parent -- not with try/catch (JSX only builds an
// element descriptor; the child's render runs later, outside the
// parent's call stack) and not with a React Error Boundary either
// (componentDidCatch never fires during server-side/static rendering --
// there's no commit phase, only a client-side one). An uncaught error
// there takes the whole static export down with it.
//
// Using the client component instead means the tweet is never touched
// during the Node build at all: it fetches and renders in the browser
// after hydration. If anything ever fails there, it fails inside one
// browser tab's widget, not inside `next build`.
export function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className="flex justify-center">
        <Tweet id={id} components={{ TweetNotFound }} />
      </div>
    </div>
  );
}
