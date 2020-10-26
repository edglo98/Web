import React from "react";
import "./styles.css";
import icons from "../../assets/images";
import CircleLoad from "../../components/CircleLoad";
import Divider from "../../components/Divider";
import Emoji from "../../components/Emoji"
import TechIcon from "../../components/TechIcon";

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
            <a className="linkRedirect" href="/">trabajo</a><Emoji e="☕"/>,
            <a className="linkRedirect" href="/">proyectos personales</a><Emoji e="💻"/>
            y un poco de mi vida e intereses a través de mi{" "}
            <a className="linkRedirect" href="/">blog.</a><Emoji e="🌍"/>
            <hr />
            <br /> 
            Encantado de conocerte.
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
              <Emoji e="👨‍💻"/>:
            </h1>
            <div className="abilities-tech__technologies">
              <TechIcon icon={icons.Javascript}/>
              <TechIcon icon={icons.Html}/>
              <TechIcon icon={icons.Css}/>
              <TechIcon icon={icons.Python}/>
              <TechIcon icon={icons.React}/>
              <TechIcon icon={icons.Csharp}/>
              <TechIcon icon={icons.Dart}/>
              <TechIcon icon={icons.Git}/>
              <TechIcon icon={icons.Php}/>
              <TechIcon icon={icons.Sql}/>
            </div>
          </div>
          <div className="abilities-languages">
            <h1>Tambien hablo algunos idiomas:</h1>
            <div className="abilities-languages_item">
              <h3>
                <Emoji e="&#x1f1f2;&#x1f1fd;"/>
                Español (Nativo)
              </h3>
              <CircleLoad porcent={100} />
            </div>
            <div className="abilities-languages_item">
              <h3>
                <Emoji e="&#x1f1eb;&#x1f1f7;"/>
                Frances (B1)
              </h3>
              <CircleLoad porcent={40} />
            </div>
            <div className="abilities-languages_item">
              <h3>
                <Emoji e="&#x1f1fa;&#x1f1f8;"/>
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
