import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="text-center mt-2">
      <Button
        variant="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ductmOfficial/markdown-previewer.git"
        className="text-decoration-none"
      >
        by @ductmOfficial
      </Button>
    </div>
  );
};

export default Footer;
