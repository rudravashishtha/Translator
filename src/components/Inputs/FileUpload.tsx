import { IconPaperclip } from "@tabler/icons-react";
import React, { ReactEventHandler } from "react";

function FileUpload({ handleFileUpload }: any) {
  return (
    <label htmlFor="file-upload">
      <IconPaperclip size={21} />
      <input
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
}

export default FileUpload;
