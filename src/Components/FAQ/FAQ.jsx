import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openAccordions, setOpenAccordions] = useState({}); // Store open/close state for each FAQ item

  const handleAccordionToggle = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific FAQ item
    }));
  };

  return (
    <>
      <div className="faq-title">FAQ</div>
      <div className="accordion-container">
        <div className="accordion">
          {Array.from({ length: 10 }).map((_, index) => {
            const id = `collapse${index + 1}`;
            const headingId = `heading${index + 1}`;
            const isOpen = openAccordions[id];

            return (
              <div className="accordion-item" key={id} style={{ width: "100%" }}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionToggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
                  >
                    Accordion Item {index + 1}
                    <span>{isOpen ? "▲" : "▼"}</span> {/* Toggle icon */}
                  </button>
                </h2>
                {isOpen && (
                  <div
                    id={id}
                    className="accordion-collapse show"
                    aria-labelledby={headingId}
                    style={{ padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}
                  >
                    <div className="accordion-body">
                      This is the content for Accordion Item {index + 1}.
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
