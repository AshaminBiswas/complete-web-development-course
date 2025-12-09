import React from "react";

function Card({title="Course", buttonText = "Buy Now"}) {
  return (
    <div className="w-68  border border-amber-400 rounded-2xl">
      <img
        className="rounded-tl-2xl rounded-tr-2xl"
        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        alt="image"
      />
      <div className="px-2">
        <h1>{title}</h1>
        <p className="text-emerald-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, debitis?
        </p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
