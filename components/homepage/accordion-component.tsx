"use client"
import { HelpCircle } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "motion/react"

const faqs = [
    {
        question: "What is the Agricultural Resource Optimization Platform?",
        answer: "It is an AI-powered solution designed to help farmers and agribusinesses maximize yields, minimize waste, and efficiently manage resources such as water, energy, and labor."
    },
    {
        question: "How does the platform help optimize resources?",
        answer: "The platform provides real-time monitoring, predictive analytics, and smart recommendations for irrigation, fertilization, and equipment usage, ensuring optimal allocation of resources and reducing operational costs."
    },
    {
        question: "Is my farm data secure?",
        answer: "Yes. We use industry-standard encryption and strict access controls to ensure your farm's data is protected and only accessible to authorized users."
    },
    {
        question: "Can the platform integrate with my existing farm equipment?",
        answer: "Absolutely. Our platform supports integration with a wide range of sensors, IoT devices, and farm management systems for seamless data collection and automation."
    }
]

export function AccordionComponent() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* Pill badge */}
                    <div className="mx-auto w-fit rounded-full border border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-900/30 px-4 py-1 mb-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-orange-900 dark:text-orange-200">
                            <HelpCircle className="h-4 w-4" />
                            <span>FAQ</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 dark:from-orange-300 dark:via-orange-400 dark:to-orange-300 pb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Everything you need to know about our Agricultural Resource Optimization Platform. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
                    </p>
                </div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="border border-gray-200 dark:border-gray-800 rounded-lg mb-4 px-2"
                            >
                                <AccordionTrigger className="hover:no-underline py-4 px-2">
                                    <span className="font-medium text-left text-gray-900 dark:text-white hover:text-orange-400 dark:hover:text-orange-400 transition-colors">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="px-2 pb-4">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
