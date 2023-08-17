import tw from "tailwind-styled-components";
import { TailwindIndicator } from "./componenets";
import ScaffoldLayout from "./pages/ScaffoldLayout";

function App() {
  return (
    <div className="min-h-screen bg-red-300">
      {/* <CONTAINER>Hello world!</CONTAINER> */}
      <ScaffoldLayout />
      <TailwindIndicator />
    </div>
  );
}

const CONTAINER = tw.div`
flex 
min-h-screen 
items-center 
justify-center 
bg-gray-800 
text-white`;

export default App;
