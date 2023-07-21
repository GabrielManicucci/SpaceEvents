"use client";
import { useState } from "react";

import Question from "./Question";

export default function Doubts() {
  const [doubts, setDoubts] = useState([
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: true,
    },
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: false,
    },
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: false,
    },
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: false,
    },
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: false,
    },
    {
      id: Math.random() * 10,
      key: Math.random() * 10,
      title: "Lorem ipsum dolor sit amet, consectet ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit aspernatur, error sapiente sed culpa quis itaque maiores ut necessitatibus.",
      status: false,
    },
  ]);

  function handleClickQuestion(id: number, status: boolean) {
    const newDoubts = doubts.map((doubt) =>
      doubt.id === id ? { ...doubt, status: true } : { ...doubt, status: false }
    );

    setDoubts(newDoubts);
  }

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-center text-xl font-medium p-5">
        Dúvidas frequentes
      </h1>

      <ul className="flex flex-col">
        {doubts.map((doubt) => (
          <Question
            key={doubt.key}
            id={doubt.id}
            title={doubt.title}
            content={doubt.content}
            status={doubt.status}
            handleClickQuestion={handleClickQuestion}
          />
        ))}
      </ul>
    </div>
  );
}
