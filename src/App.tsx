import { Outlet } from "react-router";
import Back from "./components/Back";

function App() {
  return (
    <div className="flex-1 min-h-screen w-screen bg-[#0c0c0d] text-[#f9f9fa] flex flex-col items-center justify-center p-10 gap-10">
      <Back />
      <Outlet />
    </div>
  );
}

export default App;
