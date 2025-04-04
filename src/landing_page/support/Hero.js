import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid'id="supportHero">
            <div  id="supportWrapper" >
                <h4 className='mt-5'>Support portal</h4>
                <a href="" className='mt-5'>Track tickets</a>
            </div>
            <div className='row m-5 p-5'>
                <div className='col-6 mb-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg:how do i activate F&O,why is my order getting rejected..'/>
                    <br/>
                    <a href=""style={{fontSize:"18px",padding:"10px",lineHeight:"1.5"}}>Track account opening </a>
                    <a href=""style={{fontSize:"18px",padding:"10px",lineHeight:"1.5"}}>Track segment activation </a>
                    <a href=""style={{fontSize:"18px",padding:"10px",lineHeight:"1.5"}}>Intraday margins </a><br/>
                    <a href=""style={{fontSize:"18px",padding:"10px",lineHeight:"1.5"}}>Kite user manual</a>
                </div>
                <div className='col-6 ml-5'>
                    <h1>Featured</h1>
                    <ol className='ml-5'>
                        <li className='mb-3'><a href="">Surveillance measure on scrips - July 2024</a></li>
                        <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;