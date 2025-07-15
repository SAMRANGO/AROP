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
        question: "Jukwaa la Uboreshaji wa Rasilimali za Kilimo ni nini?",
        answer: "Ni suluhisho linalotumia AI lililotengenezwa kusaidia wakulima na biashara za kilimo kuongeza mavuno, kupunguza upotevu, na kusimamia rasilimali kama vile maji, nishati, na nguvu kazi kwa ufanisi."
    },
    {
        question: "Je, jukwaa hili husaidia vipi kuboresha rasilimali?",
        answer: "Jukwaa hutoa ufuatiliaji wa moja kwa moja, uchambuzi wa utabiri, na mapendekezo mahiri ya umwagiliaji, urutubishi, na matumizi ya vifaa, kuhakikisha ugawaji bora wa rasilimali na kupunguza gharama za uendeshaji."
    },
    {
        question: "Je, data ya shamba langu iko salama?",
        answer: "Ndiyo. Tunatumia usimbaji fiche wa kiwango cha viwanda na udhibiti mkali wa ufikiaji kuhakikisha data ya shamba lako inalindwa na inafikiwa tu na watumiaji walioidhinishwa."
    },
    {
        question: "Je, jukwaa linaweza kuunganishwa na vifaa vyangu vya shamba vilivyopo?",
        answer: "Kabisa. Jukwaa letu linaunga mkono ushirikiano na aina mbalimbali za sensors, vifaa vya IoT, na mifumo ya usimamizi wa mashamba kwa ukusanyaji wa data na automation bila kikwazo."
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
                        Maswali Yanayoulizwa Mara kwa Mara
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Kila kitu unachohitaji kujua kuhusu Jukwaa letu la Uboreshaji wa Rasilimali za Kilimo. Je, hujapata jibu unalotafuta? Wasiliana na timu yetu.
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
