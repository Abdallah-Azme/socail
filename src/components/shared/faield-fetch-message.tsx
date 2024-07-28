import React from "react";

export default function FailedFetchingMessage() {
  return (
    <h3 className="text-lg text-destructive mt-10">
      Something went wrong. Please refresh the page or try again later. If the
      issue persists, contact the developer and be sure to include the topic in
      your message.
    </h3>
  );
}
