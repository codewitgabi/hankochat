import { AccordionProps } from "../types/Props";
import { useState } from "react";


function Accordion({ label, content }: AccordionProps) {
  const [active, setActive] = useState<boolean>(false);


  return (
    <>
      <button className="accordion" onClick={ () => setActive(!active) }>{ label }</button>
      { active &&
      (<div className="accordion-panel">
        <p>{ content }</p>
      </div>)
      }
    </>
  );
}


export default Accordion;
