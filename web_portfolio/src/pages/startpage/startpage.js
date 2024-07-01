import styles from "./startpage.module.css";
import Card from "../../components/cards/cards.js";
import Title from "../../components/title/title.js";

//import img
import fabledBackground from "../../img/fabledBackground.svg";

function Startpage() {
   return (
      <section>
         <Title />
         <div>
            <Card
               paperclipBool={true}
               imageUrl={fabledBackground}
               altText="Fabled background"
               header=""
            />
         </div>
      </section>
   );
}

export default Startpage;
