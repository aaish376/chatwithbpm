import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadBPM = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setTimeout(() => {
        alert("File successfully parsed!");
        navigate("/chat");
      }, 2000);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="upload">
      <h2>Upload BPM File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadBPM;
