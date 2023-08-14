import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import Footer from "../Pages/Shared/Footer";
import Navber from "../Pages/Shared/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;