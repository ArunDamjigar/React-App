import pnf from '../../assets/404.png'
const PageNotFound = () => {
    return (
        <section className ="container">
            <div className="row">
                <div className="col-md-9">
                <img src={pnf} alt='Resource not found..! Please go back'/>
                </div>
                <div className="col-md-3"> </div>
            </div>
        </section>
    )
}
export default PageNotFound;