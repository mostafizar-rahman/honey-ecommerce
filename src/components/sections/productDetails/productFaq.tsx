import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HoCar, HoCardEdit, HoFolder } from "@/lib/icon"

const ProductFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-[278px]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl font-semibold text-foreground hover:no-underline hover:opacity-80 w-full py-[33px]">
          <p className="flex items-center gap-4">
            <span className="text-secondary-foreground"><HoCar /></span>
            Delivery
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-xl font-medium">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl font-semibold text-foreground hover:no-underline hover:opacity-80 w-full py-[33px]">
          <p className="flex items-center gap-4">
            <span className="text-secondary-foreground"><HoCardEdit /></span>
            Payment option
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-xl font-medium">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl font-semibold text-foreground hover:no-underline hover:opacity-80 w-full py-[33px]">
          <p className="flex items-center gap-4">
            <span className="text-secondary-foreground"><HoFolder /></span>
            Our advantages
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-xl font-medium">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
}

export default ProductFaq