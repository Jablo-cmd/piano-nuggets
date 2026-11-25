import { ButtonLink } from "@/components/Button";
export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-extrabold">That page is out of tune.</h1>
      <p className="mx-auto mt-3 max-w-md text-brand-ink/75">We couldn&apos;t find the page you were looking for.</p>
      <ButtonLink href="/" className="mt-8">Back to home</ButtonLink>
    </section>
  );
}
