import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="logo">Matrix Gym</div>
        <div>Síguenos</div>
        <div className="social-icons">
          {/* Replace these with your actual icons */}
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>YouTube</span>
          <span>TikTok</span>
        </div>
        <div>Todos los derechos reservados 2021 / Bodytech Corp</div>
        <div>Colombia Peru Chile</div>
      </div>
      <div className="footer-col">
        <div>General</div>
        <div>Sedes</div>
      </div>
      <div className="footer-col">
        <div>Legal</div>
        <div>Terminos</div>
        <div>Libros</div>
        <div>Conócenos</div>
        <div>Trabaja con nosotros</div>
      </div>
    </div>
  );
};

export default Footer;
