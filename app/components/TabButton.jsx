import React from "react";


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#262717]" : "text-[#655437]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#AFAD8B] ${buttonClasses}`}>
        {children}
      </p>
    
    </button>
  );
};

export default TabButton;