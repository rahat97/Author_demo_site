import React from "react";
import appointment from '../../assets/images/appointment.png';
import Footer from "../Shared/Footer";

const Contact = () => {
  return (
    <>
    <div style={{
        background:`url(${appointment})`
    }}  class='bg-primary px-10 py-14 '>
      <div  class='text-center pb-14 text-white'>
        <p  class='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1  class='text-4xl'>Stay connected with us</h1>
      </div>
      <div  class='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
           class='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
           class='input w-full max-w-md'
        />
        <textarea
           class='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button  className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Contact;