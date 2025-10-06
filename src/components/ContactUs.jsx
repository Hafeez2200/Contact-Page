import React from "react";

import ContactCard from "../common/ContactCard";
import Socialmedia from "../common/Socialmedia";
import FormTemplate from "../common/FormTemplate";

const ContactUs = () => {
  return (
    <section className=" px-2 gradient-bg min-h-screen overflow-hidden ">
      <div className=" container mx-auto px-6 py-16 relative z-10">
        <div className=" text-center mb-16">
          <h1
            className=" text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400
           bg-clip-text text-transparent "
          >
            Contact us
          </h1>
          <p className=" text-lg text-gray-300 max-w-2xl mx-auto">
            Start the conversation to established good relationship and
            business.
          </p>
        </div>

        <div className=" grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className=" space-y-6">
            <div className=" max-w-2xl">
              <h2 className=" text-3xl font-bold text-white mb-4 leading-snug">
                Seamless Communication, Global Impact.
              </h2>
              <p className=" text-gray-300 leading-relaxed">
                We’re committed to creating meaningful connections across
                borders and industries. Whether you have a question, proposal,
                or partnership opportunity, our team is here to ensure your
                message reaches the right people efficiently and professionally.
              </p>
            </div>

            <ContactCard />

            <div>
              <h3 className=" text-white font-semibold">
                Follow our social media
              </h3>
              <Socialmedia />
            </div>
          </div>

          <div className=" glass-effect rounded-3xl p-8">
            <h2 className=" text-2xl font-bold mb-4 text-white">
              Send us a message
            </h2>

            <FormTemplate/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
