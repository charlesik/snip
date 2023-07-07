import { useState, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import { handleShortenLink } from "@/api/shorten-link";
import AppLayout from "@/layouts/app-layout";
import LinkDisplay from "@/components/link-display";
import Loading from "@/components/icons/loading";

export default function Home() {
  const [longLink, setLongLink] = useState("");

  const linkMutation = useMutation({
    mutationKey: ["shorten", { url: longLink }],
    mutationFn: handleShortenLink,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    linkMutation.mutate(longLink);
  };

  return (
    <AppLayout>
      <section className=" h-screen text-center">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl text-white sm:text-4xl lg:text-6xl">
            Shorten your long links⚡
          </h1>
          <p className="mx-auto text-slate-100/70 lg:w-2/4">
            Scissors is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 flex flex-col items-center justify-center gap-y-5 lg:flex-row lg:gap-x-5"
        >
          <input
            onChange={(e) => setLongLink(e.target.value)}
            className="w-[320px] rounded border-4 border-accent bg-secondary px-2 py-4 text-white outline-accent sm:w-[450px]"
            type="text"
            placeholder="Enter link here"
          />
          <button
            disabled={linkMutation.isLoading}
            className={`w-full rounded border-4 border-primary bg-primary px-10 py-4 text-center text-white transition-all duration-300 hover:border-primary/70 hover:bg-primary/70 disabled:cursor-not-allowed lg:w-max`}
          >
            {linkMutation.isLoading ? <Loading /> : "Generate link"}
          </button>
        </form>

        {linkMutation.isSuccess && (
          <LinkDisplay
            shortenedLink={linkMutation.data?.result?.short_link2}
            longLink={longLink}
          />
        )}
      </section>
      <Toaster position="top-center" />
    </AppLayout>
  );
}
