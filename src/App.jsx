import tw from "tailwind-styled-components";

function App() {
  return <CONTAINER className="">Hello world!</CONTAINER>;
}
const CONTAINER = tw.div`
flex min-h-screen items-center justify-center bg-gray-800 text-white`;
export default App;
