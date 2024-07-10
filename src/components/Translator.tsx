"use client";
import "regenerator-runtime/runtime";
import React, { ChangeEvent, useState } from "react";
import TextArea from "./Inputs/TextArea";
import SpeechRecognitionComp from "./SpeechRecognition/SpeechRecognition";
import { IconFileUpload, IconVolume } from "@tabler/icons-react";

function Translator() {
  const [sourceText, setSourceText] = useState<string>("");

  const handleAudioPlayback = async (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
          <TextArea
            id="source-language"
            placeholder={"Source Text"}
            value={sourceText}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setSourceText(e.target.value);
            }}
          />
          <div className="flex flex-row justify-between w-full">
            <span className="cursor-pointer flex space-x-2 flex-row">
              <SpeechRecognitionComp setSourceText={setSourceText} />

              <IconVolume
                size={22}
                onClick={() => handleAudioPlayback(sourceText)}
              />

              <IconFileUpload size={22} className="text-gray-400" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translator;
