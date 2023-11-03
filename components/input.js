import React from "react";

const InputBox = ({ inputValue, onChange, onClick }) => {
  return (
    <div className="flex justify-center gap-3 p-9 items-center h-36 bg-gray-900 text-white rounded-md">
      <div className="container">
        <div className="input-container flex gap-3">
          <input
            className="input bg-slate-300 text-gray-800 p-3 rounded-md"
            type="text"
            value={inputValue}
            onChange={onChange}
          />
          <button
            className="button bg-red-700 hover:bg-red-900 w-32 rounded-md text-white"
            id="submit-button"
            onClick={onClick}
          >
            Procurar Héroi
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
