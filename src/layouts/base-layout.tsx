import React from "react";
import Head from "next/head";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#fff] bg-[url('/moon.jpg')]">
      <Head>
        <title>Snip</title>
      </Head>
      <section>{children}</section>
    </main>
  );
}
