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
                <AccordionTrigger>Jukwaa la Uboreshaji wa Rasilimali za Kilimo ni nini?</AccordionTrigger>
                <AccordionContent>
                    Ni suluhisho la kidijitali linalotumia AI na uchanganuzi wa data kusaidia wakulima na biashara za kilimo kuongeza mavuno, kupunguza upotevu, na kusimamia rasilimali kama vile maji, nishati, na nguvu kazi kwa ufanisi.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Je, jukwaa hili linaboresha ufanisi wa rasilimali vipi?</AccordionTrigger>
                <AccordionContent>
                    Jukwaa linatoa ufuatiliaji wa moja kwa moja, uchanganuzi wa utabiri, na mapendekezo mahiri ya umwagiliaji, urutubishi, na matumizi ya vifaa, kuhakikisha ugawaji bora wa rasilimali na kupunguza gharama za uendeshaji.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Je, data ya shamba langu iko salama?</AccordionTrigger>
                <AccordionContent>
                    Ndiyo. Tunatumia usimbaji fiche wa kiwango cha viwanda na udhibiti mkali wa ufikiaji kuhakikisha data ya shamba lako inalindwa na inafikiwa tu na watumiaji walioidhinishwa.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Je, jukwaa linaweza kuunganishwa na vifaa vya shamba vilivyopo?</AccordionTrigger>
                <AccordionContent>
                    Kabisa. Jukwaa letu linaunga mkono ushirikiano na aina mbalimbali za sensors, vifaa vya IoT, na mifumo ya usimamizi wa mashamba kwa ukusanyaji wa data na automation bila kikwazo.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
