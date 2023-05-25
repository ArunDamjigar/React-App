import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react-hooks/rules-of-hooks
const Hybrid = (props) => {
    console.log(props);
const navigate = useNavigate();

    return (
        <section className ="container">
            <div className="row">
                <h1>{props.title}</h1>
                <div className="col-md-9">Hybrid App Design</div>
                <button onClick={()=>navigate('/products-list')}>Products</button>
                <div className="col-md-3">Recent Posts</div>
            </div>
        </section>
    )
}
export default Hybrid;