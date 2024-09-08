import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function SubmitTestimonial () {

  const [user, setUser] = useState('');
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`{API}/submit-testimonial`, {user, message })
      if (response.status === 201) {
        toast.success("Review submitted successfully");
        setUser('');
        setMessage('');
        navigate('/profile');
      }

    } catch (error) {
      toast.error("Failed to submit review!");
      console.error("Error submitting review:", error);
    }

  }

  return (
    <div className="bg-grayBg flex justify-center items-center w-full">
      <form className="md:p-10 p-4 bg-white w-1/3 my-8 rounded-md border-2 border-grayBg" action={handleSubmit}>
        <h2 className="lg:text-[22px] md:text-[18px] text-[16px] font-be-vietnam-pro text-grayH font-semibold mb-5">Write your experience !!!</h2>
        <div>
          <label className=" font-medium text-blackH" htmlFor="review">Review</label>
          <textarea className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 text-blackPara font-normal resize-none outline-none hover:border-grayH hover:border-2" name="message" value={message} placeholder="Write your opinion here..." onChange={(e) => setMessage(e.target.value)}>

          </textarea>
        </div>
        <button className="bg-grayBg hover:bg-orangeBg text-blackH hover:text-white p-4 border-2 border-grayColor hover:shadow hover:shadow-orangeBg rounded-md md:w-auto w-full" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitTestimonial;