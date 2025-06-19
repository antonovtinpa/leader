import { type FC } from "react";

const Box: FC<{ title: string; action: () => void }> = ({ title, action }) => {
  return (
    <div
      onClick={action}
      className="w-52 h-52 bg-[#1c1b22] rounded-2xl flex justify-center items-center p-5 box-border cursor-pointer hover:scale-105 transition-all"
    >
      <p className="text-center font-bold">{title}</p>
    </div>
  );
};

export default Box;
