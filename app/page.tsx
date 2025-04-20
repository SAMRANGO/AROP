import { AccordionComponent } from "@/components/homepage/accordion-component";
import { Hero } from "@/components/homepage/hero-section";
import { Map } from "@/components/homepage/Map/Map";
import Features from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { polar } from "@/lib/polar";

export default async function Home() {

  const data = await polar.products.list({
    organizationId: process.env.POLAR_ORGANIZATION_ID,
  });


  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <Hero />
      </div>
      <Features />
      <Map />
      <Pricing result={data?.result as any} />
      <AccordionComponent />
    </PageWrapper>
  );
}
