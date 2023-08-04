import React, { useState } from "react";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file submission here, e.g., send the file to the server.
    if (selectedFiles.length > 0) {
      // Use "selectedFile" to perform any necessary actions with the file.
      console.log("Selected file:", selectedFile);
      // You can also use the "FileReader" API to read the contents of the file if needed.
    } else {
      console.log("No file selected.");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="fileInput">Choose Display Images: </label>
      <input type="file" id="fileInput" multiple onChange={handleFileChange} />
    </div>
    // </form>
  );
};

export default Upload;
