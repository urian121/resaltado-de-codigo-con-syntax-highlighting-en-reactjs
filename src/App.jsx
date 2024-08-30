import "./assets/css/custom_syntax_highlighting.css"

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useCopyToClipboard } from "usehooks-ts";

import { BsCopy } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

function App() {
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const customStyle = {
    fontSize: "14px",
  };

  const handleCopy = async (text) => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Volver al estado original después de 2 segundos
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  };

  const code = `const Saludo = () => {
  const saludar = () => {
    alert('¡Hola, bienvenido a nuestro sitio!');
  };

  return (
    <div>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};

export default Saludo;
    `;

  return (
    <>
      <h1>Implementación de Syntax Highlighting <br></br> en React.js para Resaltar Código</h1>

      <div className="code-container">
        <div className="code-header">
          <div className="carbon">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <span>JavaScript</span>
          </div>

          <button className="copy-button" onClick={() => handleCopy(code)}>
            {isCopied ? (
              <>
                <BiSolidLike /> &nbsp; Código copiado
              </>
            ) : (
              <>
                <BsCopy /> &nbsp; Copiar Código
              </>
            )}
          </button>
        </div>
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers="true"
          style={dracula}
          customStyle={customStyle}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default App;
