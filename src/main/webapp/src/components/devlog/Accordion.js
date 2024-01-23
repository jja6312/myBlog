import React, { useState } from "react";

const AccordionItem = ({ id, activeId, setActiveId, title, children }) => {
  const isOpen = id === activeId;

  const handleToggle = () => {
    setActiveId(isOpen ? null : id);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-2 px-4 w-full text-left text-gray-800 bg-gray-100 hover:bg-gray-200 transition duration-300"
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out ${
          isOpen ? "max-h-80" : "max-h-0"
        } overflow-scroll`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="shadow-md my-5">
      <AccordionItem
        id="item1"
        activeId={activeId}
        setActiveId={setActiveId}
        title="Spring"
      >
        Lorem ipsum dolor sit amet...
      </AccordionItem>
      <AccordionItem
        id="item2"
        activeId={activeId}
        setActiveId={setActiveId}
        title="aws"
      >
        Lorem ipsum dolor sit amet...
      </AccordionItem>
      <AccordionItem
        id="item3"
        activeId={activeId}
        setActiveId={setActiveId}
        title="Next.js"
      >
        Lorem ipsum dolor sit amet...
      </AccordionItem>
    </div>
  );
};

export default Accordion;
