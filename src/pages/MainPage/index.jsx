import React from "react"
import "./styles.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import images from "../../assets/images"
import Divider from "../../components/Divider"

export default () => {
    return(
        <>
            <Header/>
            <div className="mainContainer">
                <section id="ME" className="section-me">
                    <div>
                        <h1 className="title-main">
                            Hola, mi nombre es Edgar Lopez. Soy desarrollador de software.
                        </h1>
                        <h1 className="tittle-secondary">
                            Este sitio web es un compendio de lo que he aprendido y creado en los ultimos años. Tambien incluyo cualquier cosa que desee compartir de mi vida. Puedes ver mis proyectos, trabajos y mi vida a traves de mi blog. <hr/><br/> Encantado de conocerte.
                        </h1>
                    </div>
                    <img src={images.Perfile} className="section-me_img"/>
                </section>

                <Divider
                    title="Lenguajes"
                />

                <section id="ME2"> 
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam minima repudiandae corporis culpa inventore quasi modi voluptas, harum officiis rerum. Repellendus consequatur assumenda pariatur vel sequi eum, fugiat ipsam quo earum magni ab dicta blanditiis tempore officiis, at nihil vero eveniet recusandae rem ipsum explicabo, aut tempora laudantium. Sed tenetur praesentium non sapiente? Assumenda tenetur architecto atque minus ducimus explicabo dignissimos quis facere mollitia enim. Aut voluptate consectetur sequi officiis assumenda. At tenetur quis neque possimus itaque earum veritatis architecto odio, quae blanditiis non, deleniti vero dolorem error nihil nulla! Dolores exercitationem in officia, sunt possimus fugit corrupti unde? Facilis nam nobis quae vel et, laudantium rerum repellat illum, temporibus necessitatibus odio labore quam, asperiores vitae excepturi exercitationem. Aliquid ratione, unde doloribus cum magnam hic repellendus sequi dolores fugit eos labore dolorem obcaecati natus dignissimos neque necessitatibus eligendi vel, voluptate fugiat commodi incidunt sunt at eius! Aliquid quod sunt est itaque ducimus dolorum totam adipisci eaque, ipsum, consequatur impedit illum ad vitae necessitatibus rem minima voluptate doloribus suscipit, reprehenderit quia autem enim perferendis pariatur possimus. Deserunt ipsum ea quae quam hic reprehenderit quasi ab corrupti sed distinctio porro molestias recusandae velit minima nam placeat, minus, quis autem veritatis praesentium!</h1>
                </section>
            </div>
            <Footer/>
        </>
    )
}