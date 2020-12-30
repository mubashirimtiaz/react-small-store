import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Small-Store | About";
  });
  return (
    <div className="container my-5 pt-5">
      <h1>About</h1>
    </div>
  );
};

export default About;
