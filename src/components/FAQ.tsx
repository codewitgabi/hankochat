import Accordion from "./Accordion";
import FAQS from "../FAQs.js";


function FAQ() {
  return (
    <div className="container p-8">
      <h2 className="mb-8">FAQs</h2>
      {
        FAQS && FAQS.map((faq, index) => {
          return (
            <Accordion
              key={ index }
              label={ faq.label }
              content={ faq.content }
            />
          );
        })
      }
    </div>
  );
}


export default FAQ;
