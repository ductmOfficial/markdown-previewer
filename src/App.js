import React, { useState, useEffect } from "react";

// third-party
import { Container, Row, Col, Form } from "react-bootstrap";
import { marked } from "marked";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// project imports
import Footer from "./components/Footer";

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**

New line breaks
without needing to
add two spaces at the end of each line.
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(initialMarkdown, {
      breaks: true,
    });
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
    document.getElementById("preview").innerHTML = marked(event.target.value, {
      breaks: true,
    });
  };

  return (
    <div className="position-relative min-vw-100 min-vh-100 bg-light">
      <Container>
        <h1 className="text-center py-4">Markdown Previewer</h1>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="editor">
              <Form.Control
                as="textarea"
                value={markdown}
                onChange={handleChange}
                rows="32"
                className="form-control bg-secondary-subtle rounded-3"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <div
              id="preview"
              className="preview-box border p-3 bg-secondary-subtle rounded-3"
            />
          </Col>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        <Footer />
      </div>
    </div>
  );
}

export default App;
