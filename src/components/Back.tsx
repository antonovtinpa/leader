import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const Back = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hidden md:flex bg-[#f9f9fa] p-2 rounded-full cursor-pointer items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={32} color="#0c0c0d" />
      </div>
      <div
        className="fixed top-5 right-5 md:hidden bg-[#f9f9fa] p-2 rounded-full cursor-pointer items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={32} color="#0c0c0d" />
      </div>
    </>
  );
};

export default Back;
