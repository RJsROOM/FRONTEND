import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.idx}
      className="lg:w-[18vw] md:w-[30vw] sm:w-[45vw] rounded-xl flex items-center flex-col py-8 px-8 text-center  bg-white text-black"
    >
      <img
        className="h-30 w-30 object-center object-cover rounded-[80%]"
        src={props.elem.imageUrl}
        alt="#"
      />
      <h1 className="text-2xl mt-2 font-bold">{props.elem.userName}</h1>
      <h5 className="text-lg text-blue-500 font-semibold my-2">
        {props.elem.userRole}
      </h5>
      <p className="text-sm font-medium leading-tight">{props.elem.userDesc}</p>

      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="px-4 py-2 rounded tet-xs cursor=pointer active:scale-95 bg-pink-700 mt-3 text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
