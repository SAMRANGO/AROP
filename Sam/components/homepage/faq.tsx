import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is an Agricultural Resource Optimization Platform?</AccordionTrigger>
                <AccordionContent>
                    It is a digital solution that leverages AI and data analytics to help farmers and agribusinesses maximize yields, minimize waste, and efficiently manage resources such as water, energy, and labor.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How does the platform improve resource efficiency?</AccordionTrigger>
                <AccordionContent>
                    The platform provides real-time monitoring, predictive analytics, and smart recommendations for irrigation, fertilization, and equipment usage, ensuring optimal allocation of resources and reducing operational costs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is my farm data secure?</AccordionTrigger>
                <AccordionContent>
                    Yes. We use industry-standard encryption and strict access controls to ensure your farm's data is protected and only accessible to authorized users.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Can the platform integrate with existing farm equipment?</AccordionTrigger>
                <AccordionContent>
                    Absolutely. Our platform supports integration with a wide range of sensors, IoT devices, and farm management systems for seamless data collection and automation.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
