import { X } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import { TestimonialInfo } from ".";

const ReviewForm = ({closeForm}) => {
    const [name,setName] = useState('')
    const [profession,setProfession] = useState('')
    const [desc,setDesc] = useState('')
    const [rating, setRating] = useState(0); // stores clicked rating


    console.log(TestimonialInfo)
    function AddReview(){
        const newReview = {name,profession,content:desc,imgUrl:"profile.avif",rating}
        TestimonialInfo.push(newReview)
        closeForm()
    }

  return (
<div className="max-w-md mx-auto bg-white p-6 px-15 border-2 border-neutral-200 rounded-2xl shadow-lg flex flex-col gap-5">
    <X onClick={closeForm} className="ml-50 cursor-pointer"/>
      <input
        type="text"
        name="username"
        placeholder="Enter your Name..."
        className="p-2 rounded border-2 border-purple-200 outline-purple-600"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="profession"
        placeholder="Enter your Profession..."
        className="p-2 rounded border-2 border-purple-200 outline-purple-600"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <textarea name="description" 
      className="resize-none rounded border-2 border-purple-200 outline-purple-600 h-25 p-2" 
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
      placeholder="Write your opinion regarding us..."/>

      <div className="flex items-center gap-2">
        <h2 className="text-md text-neutral-600">Rating:</h2>
        {[1,2,3,4,5].map(star => (
            <span key={star} onClick={() => setRating(star)} className={`text-3xl ${(star<=(rating))?"text-yellow-500":"text-gray-300"} cursor-pointer`}>★</span>
        ))}
      </div>
      <div className="flex justify-center" onClick={() => {AddReview()}}>
        <Button label="Submit" color="bg-gray-300" padx={5}/>
      </div>

    </div>
  );
};

export default ReviewForm;
