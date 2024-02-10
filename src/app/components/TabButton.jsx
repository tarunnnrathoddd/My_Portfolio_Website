// Example TabButton component
const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`text-white relative ${
        active ? 'border-b-2 border-purple-500' : ''
      } py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded`}
    >
      {children}
    </button>
  );
};

export default TabButton;
