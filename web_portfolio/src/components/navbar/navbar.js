import style from "./navbar.module.css";
import { FilledButton, CircleButton } from "../button/button.js";

//Import img
import menubars from "../../img/menubars.svg";

function Navbar() {
   return (
      <div className={style.navbar}>
         <CircleButton
            imageSize={"70%"}
            imageUrl={menubars}
            color={"#252423"}
            size={"3rem"}
         />

         <FilledButton
            text="Contact"
            textColor={"#FFF"}
            fontSize={"2rem"}
            color={"#FF6331"}
         />
      </div>
   );
}

export default Navbar;
