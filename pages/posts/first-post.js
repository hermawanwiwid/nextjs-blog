import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </div>
  );
};

export default index;
