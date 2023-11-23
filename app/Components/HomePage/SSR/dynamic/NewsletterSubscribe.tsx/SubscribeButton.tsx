"use client";
import React, { Suspense, lazy, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/app/Components/Common/Loader/Loader";

const SubscribeButton = () => {
  const [Email, setEmail] = useState("");
  const [Loading, setLoading] = useState(false);
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  const SubscriberPut = async () => {
    setLoading(true);
    const subscriberUser = {
      subscriberId: randomNumber.toString(),
      email: Email,
    };
    try {
      const res = await axios.put(
        "https://www.api.99thoughts.com/handlePutBlogNewsletterSubscribers",
        subscriberUser
      );
      if (res.data.success) {
        toast.success("Questions and Answer added !!!");
      } else {
        toast.error("Failed to add questions and answer.");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setEmail("");
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-5 mt-7 shadow-3xl grid grid-cols-4">
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Drop Your Email Here"
          className="py-[10px] px-1 w-full bg-green-200 rounded-s-xl col-span-3"
        />
        {Loading ? (
          <div className="w-full bg-green-300 rounded-e-xl ">
            <Loader />
          </div>
        ) : (
          <button
            onClick={SubscriberPut}
            className="w-full bg-green-300 py-[10px] rounded-e-xl"
          >
            Subscribe
          </button>
        )}
      </div>
    </Suspense>
  );
};

export default SubscribeButton;
