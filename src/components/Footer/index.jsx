import React from "react";
import "./styles.css";
import icons from "../../assets/images";

export default () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socialmedia">
          <p className="footer-Social_text">Enlaces sociales:</p>
          <div className="futter-social">
            <a
              href="https://github.com/edglo98"
              className="footer-social_linksanimation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  mask: `url(${icons.Github})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Github})`,
                  WebkitMaskSize: "cover",
                }}
                className="footer-socials_links"
                alt="Github"
              />
            </a>
            <a
              href="www.linkedin.com/in/edglo"
              className="footer-social_linksanimation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  mask: `url(${icons.Linkedin})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Linkedin})`,
                  WebkitMaskSize: "cover",
                }}
                className="footer-socials_links"
                alt="Linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/edglo98/"
              className="footer-social_linksanimation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  mask: `url(${icons.Instagram})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Instagram})`,
                  WebkitMaskSize: "cover",
                }}
                className="footer-socials_links"
                alt="Instagram"
              />
            </a>
            <a
              href="https://twitter.com/imnotpeace"
              className="footer-social_linksanimation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  mask: `url(${icons.Twitter})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Twitter})`,
                  WebkitMaskSize: "cover",
                }}
                className="footer-socials_links"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNNpd_fcLDoQ1D3Pg2RR4pQ?view_as=subscriber"
              className="footer-social_linksanimation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  mask: `url(${icons.Youtube})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Youtube})`,
                  WebkitMaskSize: "cover",
                }}
                className="footer-socials_links"
                alt="Youtube"
              />
            </a>
          </div>
        </div>
        <form className="footer-form">
          <h4>Contactate conmigo a travez de tu correo electronico</h4>
          <input type="text" className="footer-inputs" placeholder="Correo" />
          <textarea
            className="footer-textarea footer-inputs"
            placeholder="Razón de contacto"
          />
          <button className="footer-form_button">Enviar</button>
        </form>
      </div>
      <div>
        <p className="footer-copy">
          Copyright © 2020 Edgar López. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
