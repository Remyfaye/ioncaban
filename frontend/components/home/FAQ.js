"use client";
import { faq } from "@/constants";
import React, { useState } from "react";
import Icon from "../Icons";

const FAQ = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div>
      <h1>Frequent Asked Questions </h1>

      <div>
        {faq.map((item, index) => (
          <div
            className="flex my-5 gap-2 border-b-black/30 border-b-[1px] pb-5 cursor-pointer items-start"
            key={index}
            onClick={() =>
              setSelectedIndex(selectedIndex === index ? null : index)
            }
          >
            <Icon
              url={selectedIndex === index ? "icons/up.png" : "icons/down.png"}
            />
            <div>
              <p className="font-bold">{item.question}</p>
              {selectedIndex === index && <p className="my-3">{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
