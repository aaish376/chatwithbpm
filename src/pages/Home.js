import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to ChatWithBPM</h1>
      <p>
        This platform allows users to upload BPM files, convert them to XML, and
        chat with the BPM using advanced language models.
        This platform allows users to upload BPM files, convert them to XML, and
        chat with the BPM using advanced language models.
        This platform allows users to upload BPM files, convert them to XML, and
        chat with the BPM using advanced language models.
      </p>
      <button onClick={() => navigate("/upload")}>Upload BPM</button>
    </div>
  );
};

export default Home;
