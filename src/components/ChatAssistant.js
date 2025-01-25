import { useEffect } from "react";

const ChatAssistant = () => {
  useEffect(() => {
    // Create a div and iframe element
    const divElement = document.createElement("div");
    const iframe = document.createElement("iframe");

    divElement.style.position = "fixed"; 
    divElement.style.bottom = "0"; 
    divElement.style.right = "0"; 
    divElement.style.height = "0";
    divElement.style.width = "0"; 
    divElement.style.overflow = "hidden";

    // Append iframe to the div and then div to the body
    divElement.appendChild(iframe);
    document.body.appendChild(divElement);

    // Set up the iframe content with the script
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(`
      <body>
        <script>
          document.addEventListener('DOMContentLoaded', function () {
            const e = 'lipy-chat';
            if (document.getElementById(e)) return;
            const t = document.createElement('script');
            t.id = e;
            t.src = 'https://cdn.lipy.ai/packages/webchat.js';
            t.onload = function () {
              window.LipyWebchat({
                apiKey: 'IxW1LRHHJ30RY6C7SodfyNqKfLc8zG', // Add your API Key
                orgId: 'M4psWshgpbYMhIwA', // Add your Org ID
              });
            };
            t.onerror = function () {
              console.error('Failed to load the Lipy webchat script.');
            };
            document.body.appendChild(t);
          });
        </script>
      </body>
    `);
    iframe.contentWindow.document.close();

    return () => {
      // Clean up the iframe and div when the component unmounts
      document.body.removeChild(divElement);
    };
  }, []);

  return null; // This component doesn't render any visible UI
};

export default ChatAssistant;
