import { useState } from "react";
import { askAssistant } from "../services/chatAPI";
import { FaRobot, FaUser } from "react-icons/fa";

export default function Assistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await askAssistant(question);

      const aiMessage = {
        sender: "ai",
        text: response.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong.",
        },
      ]);
    }

    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 dark:text-white">
        🤖 AI Assistant
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg h-[500px] overflow-y-auto p-6">

        {messages.length === 0 && (
          <p className="text-gray-500 text-center mt-20">
            Ask TaskPilot AI anything...
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-6 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl p-4 ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-slate-700 dark:text-white"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">

                {msg.sender === "user" ? (
                  <FaUser />
                ) : (
                  <FaRobot />
                )}

                <strong>
                  {msg.sender === "user"
                    ? "You"
                    : "TaskPilot AI"}
                </strong>

              </div>

              <p className="whitespace-pre-wrap">
                {msg.text}
              </p>

            </div>
          </div>
        ))}

        {loading && (
          <p className="text-blue-600">
            🤖 Thinking...
          </p>
        )}

      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 border rounded-xl p-4 dark:bg-slate-700 dark:text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
        />

        <button
          onClick={handleAsk}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}