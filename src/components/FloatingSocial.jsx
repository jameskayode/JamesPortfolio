import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import {Tooltip} from "react-tooltip";

const FloatingSocial = () => {
  return (
    <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white p-5 gap-20 rounded-full flex justify-center">
      {/* LinkedIn */}
      <div className="float-icon" data-tip="LinkedIn">
        <a href="https://www.linkedin.com/in/jameskayode" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#3A1078" />
        </a>
      </div>

      {/* Github */}
      <div className="float-icon" data-tip="GitHub">
        <a href="https://github.com/jameskayode" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#3A1078" />
        </a>
      </div>

      {/* WhatsApp */}
      <div className="float-icon" data-tip="WhatsApp">
        <a href="https://wa.link/5dygpl" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} color="#3A1078" />
        </a>
      </div>

      {/* Email */}
      <div className="float-icon" data-tip="Email">
        <a href="mailto:jameskayode39@gmail.com">
          <FaEnvelope size={30} color="#3A1078" />
        </a>
      </div>

      {/* Phone */}
      <div className="float-icon" data-tip="Phone">
        <a href="tel:+2347067810860">
          <FaPhone size={30} color="#3A1078" />
        </a>
      </div>

      <Tooltip effect="solid" place="left" />
    </div>
  );
};

export default FloatingSocial;
