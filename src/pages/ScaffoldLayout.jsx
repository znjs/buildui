const ScaffoldLayout = () => {
  return (
    <div className="flex h-full min-h-screen text-white">
      <div className="bg-gray-800 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800">
          TW
        </div>
      </div>
      <div className="flex w-60 flex-col bg-gray-700">
        <div className="p-4">Tailwind CSS</div>
        <div className="bg-black font-sans">channels</div>
      </div>
      <div className="flex-1 bg-gray-600 p-4">Main</div>
    </div>
  );
};

export default ScaffoldLayout;
