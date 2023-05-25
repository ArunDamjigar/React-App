import { Link, Outlet } from "react-router-dom";

const Services = () => {
    return (
        <section className ="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li>
                            <Link to="/services/hybrid-app-development">Hybrid Application Development</Link>
                        </li>
                        <li>
                            <Link to="/services/web-app-development">Web Application Development</Link>
                        </li>
                        <li>
                            <Link to="/services/cloud-computing">Cloud Computing </Link>
                        </li>
                    </ul>

                </div>
            <div className="col-md-3"><Outlet/></div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}
export default Services;