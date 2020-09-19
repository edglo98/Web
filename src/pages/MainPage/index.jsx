import React from "react";
import "./styles.css";
import icons from "../../assets/images";
import Divider from "../../components/Divider";
import CircleLoad from "../../components/CircleLoad";

export default () => {
  return (
    <>
      <div className="mainContainer">
        <section className="section-me">
          <h1 className="title-main">
            Hola, mi nombre es Edgar Lopez. Soy desarrollador de software.
          </h1>
          <h1 className="tittle-secondary">
            Este sitio web es un compendio de lo que he aprendido y creado en
            los ultimos años. Tambien incluyo cualquier cosa que desee compartir
            de mi vida. Puedes ver mi{" "}
            <a className="linkRedirect" href="/">
              trabajo
            </a>
            <span role="img" aria-label="">
              ☕
            </span>
            ,{" "}
            <a className="linkRedirect" href="/">
              proyectos
            </a>{" "}
            <span role="img" aria-label="">
              💻
            </span>{" "}
            y un poco de mi vida a traves de mi{" "}
            <a className="linkRedirect" href="/">
              blog.
            </a>{" "}
            <span role="img" aria-label="">
              🌍
            </span>{" "}
            <hr />
            <br /> Encantado de conocerte.
          </h1>
          <div className="section-me_containerImg">
            <img src={icons.Perfile} className="section-me_img" alt="Perfile" />
          </div>
        </section>

        <Divider title="Habilidades" />

        <section className="section-abilities">
          <div className="abilities-tech">
            <h1>
              He desarrollado en diferentes lenguajes de programacion y
              tecnologias desde los 19 años, algunos de ellos son los siguientes
              <span role="img" aria-label="">
                👨‍💻
              </span>
              :
            </h1>
            <div className="abilities-tech__technologies">
              <span
                style={{
                  mask: `url(${icons.Javascript})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Javascript})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Html})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Html})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Css})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Css})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Python})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Python})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.React})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.React})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Csharp})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Csharp})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Dart})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Dart})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Git})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Git})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Php})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Php})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
              <span
                style={{
                  mask: `url(${icons.Sql})`,
                  maskSize: "cover",
                  WebkitMaskImage: `url(${icons.Sql})`,
                  WebkitMaskSize: "cover",
                }}
                className="abilities-tech__item"
              />
            </div>
          </div>
          <div className="abilities-languages">
            <h1>Tambien hablo algunos idiomas:</h1>
            <div className="abilities-languages_item">
              <h3>
                {" "}
                <span role="img" aria-label="">
                  &#x1f1f2;&#x1f1fd;
                </span>{" "}
                Español (Nativo)
              </h3>
              <CircleLoad porcent={90} />
            </div>
            <div className="abilities-languages_item">
              <h3>
                <span role="img" aria-label="">
                  &#x1f1eb;&#x1f1f7;
                </span>{" "}
                Frances (B1)
              </h3>
              <CircleLoad porcent={45} />
            </div>
            <div className="abilities-languages_item">
              <h3>
                <span role="img" aria-label="">
                  &#x1f1fa;&#x1f1f8;
                </span>{" "}
                Ingles (B1)
              </h3>
              <CircleLoad porcent={40} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
