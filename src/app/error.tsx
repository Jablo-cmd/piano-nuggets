"use client";
import { Button } from "@/components/Button";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-page py-28 text-center" role="alert">
      <h1 className="text-3xl font-extrabold">Something went wrong</h1>
      <p className="mx-auto mt-3 max-w-md text-brand-ink/75">Please try again. If the problem continues, visit our contact page.</p>
      <Button onClick={reset} className="mt-8">Try again</Button>
    </section>
  );
}
