import { AccordionComponent } from "@/components/homepage/accordion-component";
import Pricing from "@/components/homepage/pricing";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { polar } from "@/lib/polar";
import { Check, DollarSign } from "lucide-react";

export default async function PricingPage() {
  const features = [
    "AI-Powered Crop Monitoring",
    "Smart Irrigation Scheduling",
    "Resource Usage Analytics",
    "Yield Forecasting",
    "Automated Equipment Management",
    "Farm Data Security",
    "Mobile & Remote Access",
    "Seamless IoT Integration",
  ];

  const { result } = await polar.products.list({
    organizationId: process.env.POLAR_ORGANIZATION_ID!
  })

  return (
    <PageWrapper>
      <div className="container mx-auto px-4">
        <section className="relative flex flex-col items-center justify-center py-20">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 dark:bg-orange-500 opacity-20 blur-[100px]"></div>
          </div>

          <div className="space-y-6 text-center">
            {/* Pill badge */}
            <div className="mx-auto w-fit rounded-full border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-900/30 px-4 py-1 mb-6">
              <div className="flex items-center gap-2 text-sm font-medium text-orange-900 dark:text-orange-200">
                <DollarSign className="h-4 w-4" />
                <span>Bei Rahisi na Wazi</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 dark:from-orange-300 dark:via-orange-400 dark:to-orange-300 animate-gradient-x pb-2">
              Imarisha Shamba Lako na Usimamizi Bora wa Rasilimali
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pata mavuno zaidi, punguza gharama, na ukuaji endelevu na jukwaa letu la kilimo linalotumia AI. Chagua mpango unaoendana na shughuli zako na uanze kuboresha leo.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 dark:from-orange-300 dark:via-orange-400 dark:to-orange-300">
                Boresha Kila Ekari
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Jukwaa letu linatoa zana unazohitaji kuongeza uzalishaji, kupunguza upotevu, na kufanya maamuzi yanayotokana na data kwa shamba lako. Rahisisha shughuli na ongeza ufanisi kwa uchambuzi wa hali ya juu na automation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                >
                  <Check className="h-5 w-5 flex-shrink-0 text-orange-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-8">
            <Pricing result={result as any} />
          </div>
        </section>

        <section className="pb-20">
          <AccordionComponent />
        </section>
      </div>
    </PageWrapper>
  );
}
