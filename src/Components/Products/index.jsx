import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <section className ="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li>
                            <Link to="/products/mac">Apple 2020 MacBook Air Laptop-Apple 2021 iMac-Apple Pro Display XDR</Link>
                        </li>
                        <li>
                            <Link to="/products/dell">Dell-Vostro-Dell-MS1162-Inspiron-Dell Professional-Dell-Lattitude</Link>
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
export default Products;