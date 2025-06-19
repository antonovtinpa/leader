import { useNavigate } from "react-router";
import Box from "../components/Box";

const lectures = [
  { number: 1, title: "Управленска практика", slug: "management-practice" },
  {
    number: 2,
    title: "Основи на управленската теория",
    slug: "foundations-of-management-theory",
  },
  { number: 3, title: "Съвременни теории", slug: "contemporary-theories" },
  { number: 4, title: "Управленски функции", slug: "management-functions" },
  { number: 5, title: "Организация", slug: "organization" },
  { number: 6, title: "Система за управление", slug: "management-system" },
  {
    number: 7,
    title: "Механизми в управлението",
    slug: "management-mechanisms",
  },
  { number: 8, title: "Управленско решение", slug: "managerial-decision" },
  { number: 9, title: "Мениджър", slug: "manager" },
  { number: 10, title: "Мотивация", slug: "motivation" },
  { number: 11, title: "Ръководство и лидерство", slug: "leadership" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {lectures.map((l) => (
        <Box
          key={l.number}
          title={`${l.number}. ${l.title}`}
          action={() => navigate(`/lecture/${l.slug}`)}
        />
      ))}
    </div>
  );
};

export default Home;
