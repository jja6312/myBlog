import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CloseBtnModal = () => {
  return (
    <div
      className={`absolute right-0 top-0 z-30 w-14 h-14 bg-red-600 flex justify-center items-center rounded cursor-pointer hover:bg-red-800`}
    >
      <span>
        <FontAwesomeIcon size="xl" icon={faXmark} />
      </span>
    </div>
  );
};

export default CloseBtnModal;
