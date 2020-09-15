import React from "react";
import "./styles.css";
import images from "../../assets/images";
import Divider from "../../components/Divider";
import CircleLoad from "../../components/CircleLoad";

export default () => {
  return (
    <>
      <div className="mainContainer">
        <section className="section-me">
          <div>
            <h1 className="title-main">
              Hola, mi nombre es Edgar Lopez. Soy desarrollador de software.
            </h1>
            <h1 className="tittle-secondary">
              Este sitio web es un compendio de lo que he aprendido y creado en
              los ultimos años. Tambien incluyo cualquier cosa que desee
              compartir de mi vida. Puedes ver mi{" "}
              <a className="linkRedirect">trabajo</a>☕,{" "}
              <a className="linkRedirect">proyectos</a>💻 y un poco de mi vida a
              traves de mi <a className="linkRedirect">blog.</a>🌍 <hr />
              <br /> Encantado de conocerte.
            </h1>
          </div>
          <img src={images.Perfile} className="section-me_img" alt="Perfile" />
        </section>

        <Divider title="Habilidades" />

        <section className="section-abilities">
            <div className="abilities-tech">
                <h1>
                    He desarrollado en diferentes lenguajes de programacion y tecnologias desde los 19 años, algunos de ellos son los siguientes 👨‍💻:
                </h1>
                <div className="abilities-tech__technologies">
                    <span style={{mask: `url(${images.Javascript})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Html})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Css})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Python})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.React})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Csharp})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Dart})`}} className="abilities-tech__item"/>
                    <span style={{mask: `url(${images.Git})`}} className="abilities-tech__item"/>
                </div>
            </div>
            <div className="abilities-languages">
                <h1>
                    Tambien hablo algunos idiomas:
                </h1>
                <div className="abilities-languages_item">
                    <h3>&#x1f1f2;&#x1f1fd; Español (Nativo)</h3>
                    <CircleLoad porcent={90} />
                </div>
                <div className="abilities-languages_item">
                    <h3>&#x1f1eb;&#x1f1f7; Frances (B1)</h3>
                    <CircleLoad porcent={45} />
                </div>
                <div className="abilities-languages_item">
                    <h3>&#x1f1fa;&#x1f1f8; Ingles (B1)</h3>
                    <CircleLoad porcent={40} />
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
