import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Small-Store | Contact";
  }, []);
  return (
    <div className="container my-5 pt-5">
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
