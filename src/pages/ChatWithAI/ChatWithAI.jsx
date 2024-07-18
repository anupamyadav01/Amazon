import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ClipLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";

const ChatWithAI = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendData() {
    setLoading(true);
    try {
      const API_KEY = "AIzaSyAYhghPB47muOGdbJ-p26A7AUxRSxQ94cw"; // Replace with your API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(input);
      const response = result.response;
      const generatedText = response.text();
      setText(generatedText);
    } catch (error) {
      console.error("Error while generating content:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-100 px-6 py-40 xl:px-52 dark:bg-gray-800">
      <div className="top-40 flex w-full flex-col items-center">
        <div>
          <input
            type="text"
            placeholder="Enter your query here..."
            className="w-[250px] rounded-3xl border border-gray-300 px-4 py-2 text-base shadow-sm focus:outline-none lg:w-[400px] xl:w-[500px]"
            style={{ borderRadius: "12px" }}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="ml-4 mt-4 rounded-xl bg-orange-600 p-2 text-base text-white shadow-lg hover:bg-orange-700"
            onClick={handleSendData}
            disabled={loading}
          >
            Search
          </button>
        </div>
        <div className="mt-10 w-full max-w-3xl rounded-lg border bg-white p-10 shadow-lg dark:bg-gray-700">
          {loading ? (
            <div className="flex items-center justify-center">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
          ) : (
            <ReactMarkdown className="markdown-content text-lg leading-6 dark:text-white">
              {text}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWithAI;
