import { useState, useEffect } from "react";
import { useParams } from "react-router";
import QuestionModal from "../components/QuestionModal";
import Box from "../components/Box";

const LecturePage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [qa, setQa] = useState<{ question: string; answer: string }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      const file = await fetch(`/lectures/${slug}.md`);
      const md = await file.text();
      const qas = parseMarkdownToQA(md);
      setQa(qas);

      setLoading(false);
    };

    init();
  }, [slug]);

  const parseMarkdownToQA = (md: string) => {
    const parts = md.split(/^---$/m);
    return parts.map((p) => {
      const lines = p.trim().split("\n");
      const question = lines[0].replace(/^#+ /, "").trim();
      const answer = lines.slice(1).join("\n").trim();
      return { question, answer };
    });
  };

  if (loading)
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );

  return (
    <div className="p-8 h-full">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {qa.map((q, i) => (
          <Box key={i} title={q.question} action={() => setSelected(i)} />
        ))}
      </div>

      {selected !== null && (
        <QuestionModal
          question={qa[selected].question}
          answer={qa[selected].answer}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default LecturePage;
