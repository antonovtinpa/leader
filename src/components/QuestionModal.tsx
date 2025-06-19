import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const QuestionModal = ({
  question,
  answer,
  onClose,
}: {
  question: string;
  answer: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1b] p-6 rounded-xl max-w-4xl w-full flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        <div className="prose prose-invert max-h-[60vh] overflow-y-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ ...props }) => (
                <h1
                  className="text-3xl font-bold mt-8 mb-4 border-b border-gray-700 pb-2"
                  {...props}
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  className="text-2xl font-semibold mt-6 mb-3 border-b border-gray-700 pb-1"
                  {...props}
                />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
              ),
              p: ({ ...props }) => (
                <p
                  className="text-xl text-gray-300 leading-relaxed mb-4"
                  {...props}
                />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline hover:text-sky-300"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <pre className="bg-[#1e1e20] text-lg text-gray-100 p-4 rounded-md overflow-x-auto my-4">
                  <code className="font-mono">{children}</code>
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside pl-6 my-3 text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside pl-6 my-3 text-gray-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              hr: () => <hr className="border-gray-700 my-6" />,
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="table-auto border-collapse w-full text-sm">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800 text-gray-100 border-b border-gray-700">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700">{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-gray-800">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="text-left px-3 py-2 font-medium text-gray-300">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-3 py-2 text-gray-400">{children}</td>
              ),
              input: ({ checked, type }) =>
                type === "checkbox" ? (
                  <input
                    type="checkbox"
                    checked={checked}
                    readOnly
                    className="mr-2 accent-sky-500"
                  />
                ) : null,
            }}
          >
            {answer}
          </ReactMarkdown>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 cursor-pointer"
        >
          Затвори
        </button>
      </div>
    </div>
  );
};

export default QuestionModal;
