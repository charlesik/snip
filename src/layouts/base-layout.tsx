import React from "react";
import Head from "next/head";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#fff] border border-red-600">
      <Head>
        <title>Snip</title>
      </Head>
      <section>{children}</section>
    </main>
  );
}
