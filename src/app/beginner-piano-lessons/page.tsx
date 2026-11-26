import { LandingPage, landingMetadata } from "@/components/LandingPage";
import { landingByPath } from "@/config/landing";

const landing = landingByPath("/beginner-piano-lessons");
export const metadata = landingMetadata(landing);

export default function Page() {
  return <LandingPage l={landing} />;
}
