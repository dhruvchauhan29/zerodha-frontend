import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <img src="media/images/homeHero.png" alt="Hero Image" class="mb-5"></img> 
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online plateform to invest in stocks,derivatives,mutual funds,and more</p> 
                <Link to="/signup"><button className='p-2 fs-5 btn btn-primary' style={{width:"20%", margin:"0 auto"}}>Signup now</button></Link>       
            </div>
        </div>
     );
}

export default Hero;