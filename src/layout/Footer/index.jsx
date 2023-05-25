import React, { Component } from "react";
import logo from '../../assets/logo.png'
import './footer.css'
 class Footer extends Component {
    constructor(){
        super();
        this.state = {
            company:['Home','Placements','Corporate Training','Contact US'],
            tending:[],
            contact:[],
        }
    }
    render() {
        let cMenu = this.state.company?.map((item)=> {
            return <li><a href="#">{item}</a></li>
        })
        console.log(cMenu);
        return(
            <footer className="footer">
                <section>
                    <img src={logo} alt="AchieversIT-logo" />
                    <p>AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
                </section>
                <section>
                    <h2>Company</h2>
                    <ul>                
                        {cMenu}
                    </ul>
                </section>
                <section>
                <h2>Trending Course</h2>
                    <ul>
                        <li>
                            <a href="/">UI Development Course</a>
                        </li>
                        <li>
                            <a href="/">Angular JS Course</a>
                        </li>
                        <li>
                            <a href="/">React JS Course</a>
                        </li>
                        <li>
                            <a href="/">Digital Marketing Course</a>
                        </li>
                        <li>
                            <a href="/">Python Course</a>
                        </li>
                    </ul>
                </section>
                <section>
                <h2>contact info</h2>
                    <ul>
                        <li>
                            <a href="/">#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</a>
                        </li>
                        <li>
                            <a href="/">India : +91 8431-040-457</a>
                        </li>
                        <li>
                            <a href="/"> info@achieversit.com</a>
                        </li>
                    </ul>
                </section>
                    
                    
            </footer>
        )
    }
}
export default Footer