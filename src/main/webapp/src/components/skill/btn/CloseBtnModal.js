import React from "react";

const CloseBtnModal = () => {
  return (
    <div
      className={`absolute right-4 bottom-4 z-30 w-40 h-8 bg-gray-700 flex justify-center items-center rounded cursor-pointer hover:opacity-60`}
    >
      <span>Close</span>
    </div>
  );
};

export default CloseBtnModal;
