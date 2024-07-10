import React from "react";

function TextArea({ id, value, onChange, placeholder }: any) {
  return (
    <textarea
      rows={5}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg bg-neutral-900 dark:border-transparent dark:text-neutral-400"
    />
  );
}

export default TextArea;
