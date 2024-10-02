import Startpage from "./startpage/startpage.js";
import ProjectSelector from "./projectSelector/projectSelector.js";
import Navbar from "../../components/navbar/navbar.js";

function HomePage() {
   return (
      <main>
         <Navbar />
         <Startpage />
         <ProjectSelector />
      </main>
   );
}

export default HomePage;
