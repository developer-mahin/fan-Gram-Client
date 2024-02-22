import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

export function QuestionAccordion() {
  return (
    <div className="w-[90%] mx-auto">
      <h3 className="text-3xl text-center text-white">
        Frequently Asked Questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full text-white space-y-3 mt-6"
      >
        <AccordionItem className="border rounded-lg p-3" value="item-1">
          <AccordionTrigger>
            <div>
              <span className="text-sm rounded-full bg-[#D42978] px-2 mr-2 py-0.5">
                1
              </span>{" "}
              <span>Is it accessible?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border rounded-lg p-3" value="item-2">
          <AccordionTrigger>
            {" "}
            <div>
              <span className="text-sm rounded-full bg-[#D42978] px-2 mr-2 py-0.5">
                2
              </span>{" "}
              <span>Is it styled?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border rounded-lg p-3" value="item-3">
          <AccordionTrigger>
            {" "}
            <div>
              <span className="text-sm rounded-full bg-[#D42978] px-2 mr-2 py-0.5">
                3
              </span>{" "}
              <span>Is it animated?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="bg-primary hover:bg-primary rounded-full block mx-auto my-6">
        See All FAQ's
      </Button>
    </div>
  );
}
