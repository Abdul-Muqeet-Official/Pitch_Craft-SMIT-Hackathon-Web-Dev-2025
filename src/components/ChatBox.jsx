// import React, { useState } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send } from "lucide-react";

// export default function ChatBox() {
//     const [prompt, setPrompt] = useState("");
//     //   const [response, setResponse] = useState("");
//     const [chatHistory, setChatHistory] = useState([]);

//     const [loading, setLoading] = useState(false);

//     const handleSend = async () => {
//         if (!prompt.trim()) return;
//         setLoading(true);
//         setResponse("Thinking... 🤔");

//         try {
//             const reply = await generateGeminiResponse(prompt);
//             setResponse(reply);
//         } catch (err) {
//             console.error(err);
//             setResponse("⚠️ Error fetching response. Please try again.");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden">
//             {/* Header */}
//             <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//                 Gemini CV Assistant 💼
//             </div>

//             {/* Chat Area */}
//             <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//                 {response ? (
//                     <div
//                         className="prose max-w-none bg-white p-4 rounded-xl shadow-sm border border-gray-200"
//                         dangerouslySetInnerHTML={{ __html: response }}
//                     />
//                 ) : (
//                     <p className="text-gray-500 text-center mt-10">
//                         👋 Start by typing what kind of CV or landing page you want.
//                     </p>
//                 )}
//             </div>

//             {/* Input Area */}
//             <div className="p-4 border-t bg-white flex items-center gap-3">
//                 <textarea
//                     value={prompt}
//                     onChange={(e) => setPrompt(e.target.value)}
//                     placeholder="Ask Gemini to build your CV landing page..."
//                     className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                     rows="2"
//                 />
//                 <button
//                     onClick={handleSend}
//                     disabled={loading}
//                     className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//                 >
//                     {loading ? "..." : <Send size={18} />}
//                 </button>
//             </div>
//         </div>
//     );
// }


// src/components/ChatBox.jsx


// import React, { useState, useRef, useEffect } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);

//     // Add user message
//     setChatHistory((prev) => [
//       ...prev,
//       { role: "user", content: prompt },
//     ]);
//     setPrompt("");

//     try {
//       const reply = await generateGeminiResponse(prompt);
//       // Add AI response
//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: reply },
//       ]);
//     } catch (err) {
//       console.error(err);
//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: "⚠️ Error fetching response. Please try again." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//         Gemini CV Assistant 💼
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
//         {chatHistory.length === 0 && (
//           <p className="text-gray-500 text-center mt-10">
//             👋 Start by typing what kind of CV or landing page you want.
//           </p>
//         )}

//         {chatHistory.map((msg, index) => (
//           <div
//             key={index}
//             className={`max-w-[80%] p-3 rounded-xl shadow break-words ${
//               msg.role === "user"
//                 ? "self-end bg-blue-600 text-white"
//                 : "self-start bg-white border border-gray-200"
//             }`}
//           >
//             <div dangerouslySetInnerHTML={{ __html: msg.content }} />
//           </div>
//         ))}

//         <div ref={chatEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t bg-white flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Gemini to build your CV landing page..."
//           className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           rows="2"
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//         >
//           {loading ? "..." : <Send size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// }






// src/components/ChatBox.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);

//     // Add user message
//     setChatHistory((prev) => [
//       ...prev,
//       { role: "user", content: prompt },
//     ]);
//     setPrompt("");

//     try {
//       const reply = await generateGeminiResponse(prompt);

//       // Wrap AI response in CV/landing page style
//       const formattedReply = `
//         <div class="prose max-w-none">
//           ${reply
//             .split("\n")
//             .map((line) => {
//               if (line.startsWith("# ")) return `<h2>${line.replace("# ", "")}</h2>`;
//               if (line.startsWith("## ")) return `<h3>${line.replace("## ", "")}</h3>`;
//               if (line.startsWith("- ")) return `<li>${line.replace("- ", "")}</li>`;
//               return `<p>${line}</p>`;
//             })
//             .join("")}
//         </div>
//       `;

//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: formattedReply },
//       ]);
//     } catch (err) {
//       console.error(err);
//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: "⚠️ Error fetching response. Please try again." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//         Gemini CV Assistant 💼
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
//         {chatHistory.length === 0 && (
//           <p className="text-gray-500 text-center mt-10">
//             👋 Start by typing what kind of CV or landing page you want.
//           </p>
//         )}

//         {chatHistory.map((msg, index) => (
//           <div
//             key={index}
//             className={`max-w-[80%] p-3 rounded-xl shadow break-words ${
//               msg.role === "user"
//                 ? "self-end bg-blue-600 text-white"
//                 : "self-start bg-white border border-gray-200"
//             }`}
//           >
//             <div dangerouslySetInnerHTML={{ __html: msg.content }} />
//           </div>
//         ))}

//         <div ref={chatEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t bg-white flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Gemini to build your CV landing page..."
//           className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           rows="2"
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//         >
//           {loading ? "..." : <Send size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// }




// src/components/ChatBox.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatHistory]);

//   const formatAIResponse = (text) => {
//     // Split by lines and wrap headings/lists
//     return text
//       .split("\n")
//       .map((line) => {
//         line = line.trim();
//         if (!line) return "";
//         if (line.startsWith("# ")) return `<h2 class="text-xl font-bold mt-4">${line.replace("# ", "")}</h2>`;
//         if (line.startsWith("## ")) return `<h3 class="text-lg font-semibold mt-2">${line.replace("## ", "")}</h3>`;
//         if (line.startsWith("- ")) return `<li class="ml-5 list-disc">${line.replace("- ", "")}</li>`;
//         return `<p class="mt-1">${line}</p>`;
//       })
//       .join("");
//   };

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);

//     // Add user message
//     setChatHistory((prev) => [
//       ...prev,
//       { role: "user", content: prompt },
//     ]);
//     setPrompt("");

//     try {
//       const reply = await generateGeminiResponse(prompt);

//       const formattedReply = `
//         <div class="prose max-w-none">
//           ${formatAIResponse(reply)}
//         </div>
//       `;

//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: formattedReply },
//       ]);
//     } catch (err) {
//       console.error(err);
//       setChatHistory((prev) => [
//         ...prev,
//         { role: "ai", content: "⚠️ Error fetching response. Please try again." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-full bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//         Gemini CV Assistant 💼
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
//         {chatHistory.length === 0 && (
//           <p className="text-gray-500 text-center mt-10">
//             👋 Start by typing what kind of CV or landing page you want.
//           </p>
//         )}

//         {chatHistory.map((msg, index) => (
//           <div
//             key={index}
//             className={`max-w-[80%] p-4 rounded-xl shadow break-words ${
//               msg.role === "user"
//                 ? "self-end bg-blue-600 text-white"
//                 : "self-start bg-white border border-gray-200"
//             }`}
//           >
//             <div dangerouslySetInnerHTML={{ __html: msg.content }} />
//           </div>
//         ))}

//         <div ref={chatEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t bg-white flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Gemini to build your CV landing page..."
//           className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           rows="2"
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//         >
//           {loading ? "..." : <Send size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// }



// src/components/ChatBox.jsx
import React, { useState, useRef, useEffect } from "react";
import { generateGeminiResponse } from "../gemini";
import { Send } from "lucide-react";

export default function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  // Function to format AI response into structured HTML CV style
  const formatAIResponse = (text) => {
    const lines = text.split("\n").map(line => line.trim()).filter(Boolean);
    let html = "";

    lines.forEach((line) => {
      if (line.startsWith("# ")) {
        html += `<h2 class="text-xl font-bold mt-4">${line.replace("# ", "")}</h2>`;
      } else if (line.startsWith("## ")) {
        html += `<h3 class="text-lg font-semibold mt-3">${line.replace("## ", "")}</h3>`;
      } else if (line.startsWith("- ")) {
        html += `<li class="ml-5 list-disc mt-1">${line.replace("- ", "")}</li>`;
      } else if (line.startsWith("[Skill]")) {
        const skill = line.replace("[Skill]", "").trim();
        html += `
          <div class="mt-2">
            <span class="font-semibold">${skill}</span>
            <div class="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div class="bg-blue-600 h-2 rounded-full" style="width:80%"></div>
            </div>
          </div>
        `;
      } else {
        html += `<p class="mt-2">${line}</p>`;
      }
    });

    return html;
  };

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    // Add user message
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: prompt },
    ]);
    setPrompt("");

    try {
      const reply = await generateGeminiResponse(prompt);

      const formattedReply = `
        <div class="prose max-w-none">
          ${formatAIResponse(reply)}
        </div>
      `;

      setChatHistory((prev) => [
        ...prev,
        { role: "ai", content: formattedReply },
      ]);
    } catch (err) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Error fetching response. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
        Gemini CV Assistant 💼
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
        {chatHistory.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            👋 Start by typing what kind of CV or landing page you want.
          </p>
        )}

        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-4 rounded-xl shadow break-words ${
              msg.role === "user"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-white border border-gray-200"
            }`}
          >
            <div dangerouslySetInnerHTML={{ __html: msg.content }} />
          </div>
        ))}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white flex items-center gap-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Gemini to build your CV landing page..."
          className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          rows="2"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
        >
          {loading ? "..." : <Send size={18} />}
        </button>
      </div>
    </div>
  );
}










// src/components/ChatBox.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [chatHistory, setChatHistory] = useState([]); // Maintain previous chats
//   const [cvData, setCvData] = useState(null); // For CV preview
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatHistory]);

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);

//     const userMessage = { sender: "user", text: prompt };
//     setChatHistory((prev) => [...prev, userMessage]);
//     setPrompt("");

//     try {
//       const aiReply = await generateGeminiResponse(prompt);

//       // Expect AI to return JSON string with CV data
//       let parsedData = null;
//       try {
//         parsedData = JSON.parse(aiReply);
//       } catch {
//         console.warn("AI response is not valid JSON. Showing raw text.");
//       }

//       const aiMessage = {
//         sender: "ai",
//         text: parsedData ? "CV generated successfully ✅" : aiReply,
//       };

//       setChatHistory((prev) => [...prev, aiMessage]);

//       if (parsedData) setCvData(parsedData);
//     } catch (err) {
//       console.error(err);
//       setChatHistory((prev) => [
//         ...prev,
//         { sender: "ai", text: "⚠️ Error fetching response. Please try again." },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-6 h-full min-h-[600px]">
//       {/* Chat Box */}
//       <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//           Gemini CV Assistant 💼
//         </div>

//         <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//           {chatHistory.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`mb-3 max-w-[80%] p-3 rounded-xl ${
//                 msg.sender === "user"
//                   ? "bg-blue-100 self-end text-right"
//                   : "bg-white shadow-sm border border-gray-200"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//           <div ref={chatEndRef} />
//         </div>

//         <div className="p-4 border-t bg-white flex items-center gap-3">
//           <textarea
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             placeholder="Ask Gemini to build your CV landing page..."
//             className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//             rows="2"
//           />
//           <button
//             onClick={handleSend}
//             disabled={loading}
//             className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//           >
//             {loading ? "..." : <Send size={18} />}
//           </button>
//         </div>
//       </div>

//       {/* CV Preview */}
//       <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-auto p-6 max-h-[600px]">
//         {cvData ? (
//           <div className="prose max-w-none">
//             {/* Header */}
//             <div className="text-center mb-4">
//               <h1 className="text-2xl font-bold">{cvData.name}</h1>
//               <p className="text-sm text-gray-600">
//                 {cvData.email} | {cvData.phone}
//               </p>
//             </div>

//             {/* Summary */}
//             {cvData.summary && (
//               <div className="mb-4">
//                 <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
//                   Summary
//                 </h2>
//                 <p>{cvData.summary}</p>
//               </div>
//             )}

//             {/* Education */}
//             {cvData.education?.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
//                   Education
//                 </h2>
//                 {cvData.education.map((edu, i) => (
//                   <p key={i}>
//                     <strong>{edu.degree}</strong>, {edu.university} ({edu.year})
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* Experience */}
//             {cvData.experience?.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
//                   Experience
//                 </h2>
//                 {cvData.experience.map((exp, i) => (
//                   <p key={i}>
//                     <strong>{exp.title}</strong>, {exp.company} - {exp.desc}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* Skills */}
//             {cvData.skills?.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="font-semibold text-lg border-b border-gray-300 pb-1">
//                   Skills
//                 </h2>
//                 <ul className="list-disc list-inside flex flex-wrap gap-2">
//                   {cvData.skills.map((skill, i) => (
//                     <li key={i} className="bg-gray-100 px-2 py-1 rounded">
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-gray-400 text-center mt-10">
//             CV preview will appear here once Gemini generates it.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }



// src/components/ChatBox.jsx
// import React, { useState } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send, X } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [cvData, setCvData] = useState(null);
//   const [showCv, setShowCv] = useState(false);

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     setResponse("Thinking... 🤔");

//     try {
//       const reply = await generateGeminiResponse(prompt);

//       // Assuming AI returns JSON if user requests CV
//       let parsedData = null;
//       try {
//         parsedData = JSON.parse(reply);
//         setCvData(parsedData);
//       } catch {
//         parsedData = null;
//       }

//       setResponse(reply);
//     } catch (err) {
//       console.error(err);
//       setResponse("⚠️ Error fetching response. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg">
//         Gemini CV Assistant 💼
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//         {response ? (
//           <div
//             className="prose max-w-none bg-white p-4 rounded-xl shadow-sm border border-gray-200"
//             dangerouslySetInnerHTML={{ __html: response }}
//           />
//         ) : (
//           <p className="text-gray-500 text-center mt-10">
//             👋 Start by typing what kind of CV or landing page you want.
//           </p>
//         )}
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t bg-white flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Gemini to build your CV landing page..."
//           className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           rows="2"
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//         >
//           {loading ? "..." : <Send size={18} />}
//         </button>
//       </div>

//       {/* CV View Button */}
//       {cvData && !showCv && (
//         <div className="p-4 border-t bg-gray-100 text-center">
//           <button
//             onClick={() => setShowCv(true)}
//             className="btn-primary px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
//           >
//             View CV
//           </button>
//         </div>
//       )}

//       {/* CV Preview Modal */}
//       {showCv && cvData && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg overflow-y-auto max-h-[90vh]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Your CV Preview</h2>
//               <button onClick={() => setShowCv(false)} className="p-1 rounded-full hover:bg-gray-200">
//                 <X size={20} />
//               </button>
//             </div>

//             {/* CV Content */}
//             <div className="space-y-3">
//               <h3 className="text-lg font-semibold">{cvData.name}</h3>
//               <p className="text-sm text-gray-600">{cvData.email} | {cvData.phone}</p>
//               {cvData.summary && <p className="text-gray-700">{cvData.summary}</p>}

//               {/* Education */}
//               {cvData.education && (
//                 <div>
//                   <h4 className="font-semibold">Education</h4>
//                   <ul className="list-disc list-inside text-gray-700">
//                     {cvData.education.map((edu, idx) => (
//                       <li key={idx}>{edu.degree} - {edu.institution} ({edu.year})</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Experience */}
//               {cvData.experience && (
//                 <div>
//                   <h4 className="font-semibold">Experience</h4>
//                   <ul className="list-disc list-inside text-gray-700">
//                     {cvData.experience.map((exp, idx) => (
//                       <li key={idx}>{exp.role} at {exp.company} ({exp.duration})</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Skills */}
//               {cvData.skills && (
//                 <div>
//                   <h4 className="font-semibold">Skills</h4>
//                   <ul className="list-disc list-inside text-gray-700">
//                     {cvData.skills.map((skill, idx) => (
//                       <li key={idx}>{skill}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// // src/components/ChatBox.jsx
// import React, { useState } from "react";
// import { generateGeminiResponse } from "../gemini";
// import { Send, Eye } from "lucide-react";

// export default function ChatBox() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [cvData, setCvData] = useState(null);
//   const [showCV, setShowCV] = useState(false);

//   const handleSend = async () => {
//     if (!prompt.trim()) return;
//     setLoading(true);
//     setResponse("Thinking... 🤔");

//     try {
//       const reply = await generateGeminiResponse(prompt);

//       // Save chat history
//       setChatHistory([...chatHistory, { prompt, response: reply }]);

//       // Clear input
//       setPrompt("");

//       // Try parsing CV JSON data
//       let parsedData = null;
//       try {
//         parsedData = JSON.parse(reply);
//         setCvData(parsedData);
//       } catch {
//         parsedData = null;
//       }

//       setResponse(reply);
//     } catch (err) {
//       console.error(err);
//       setResponse("⚠️ Error fetching response. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold text-lg flex justify-between items-center">
//         Gemini CV Assistant 💼
//         {cvData && (
//           <button
//             onClick={() => setShowCV(!showCV)}
//             className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-xl hover:bg-white/30 transition"
//           >
//             <Eye size={16} /> View CV
//           </button>
//         )}
//       </div>

//       {/* Chat & CV Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
//         {/* Chat History */}
//         {chatHistory.map((item, idx) => (
//           <div key={idx} className="flex flex-col gap-2">
//             <div className="text-sm text-gray-600">You:</div>
//             <div className="bg-blue-100 p-3 rounded-xl max-w-[80%]">{item.prompt}</div>

//             <div className="text-sm text-gray-600">Gemini:</div>
//             <div
//               className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 max-w-[80%] prose"
//               dangerouslySetInnerHTML={{ __html: item.response }}
//             />
//           </div>
//         ))}

//         {/* CV Preview */}
//         {showCV && cvData && (
//           <div className="mt-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
//             <h2 className="text-xl font-bold">{cvData.name}</h2>
//             <p className="text-sm text-gray-500">{cvData.title}</p>

//             {cvData.contact && (
//               <div className="mt-2 text-sm">
//                 {cvData.contact.email && <div>Email: {cvData.contact.email}</div>}
//                 {cvData.contact.phone && <div>Phone: {cvData.contact.phone}</div>}
//               </div>
//             )}

//             {cvData.skills && (
//               <div className="mt-2">
//                 <h3 className="font-semibold text-sm">Skills:</h3>
//                 <ul className="list-disc list-inside text-sm">{cvData.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
//               </div>
//             )}

//             {cvData.experience && (
//               <div className="mt-2">
//                 <h3 className="font-semibold text-sm">Experience:</h3>
//                 <ul className="list-disc list-inside text-sm">{cvData.experience.map((e, i) => <li key={i}>{e}</li>)}</ul>
//               </div>
//             )}

//             {cvData.education && (
//               <div className="mt-2">
//                 <h3 className="font-semibold text-sm">Education:</h3>
//                 <ul className="list-disc list-inside text-sm">{cvData.education.map((edu, i) => <li key={i}>{edu}</li>)}</ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t bg-white flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask Gemini to build your CV landing page..."
//           className="flex-1 p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           rows="2"
//         />
//         <button
//           onClick={handleSend}
//           disabled={loading}
//           className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center disabled:opacity-60 transition"
//         >
//           {loading ? "..." : <Send size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// }
