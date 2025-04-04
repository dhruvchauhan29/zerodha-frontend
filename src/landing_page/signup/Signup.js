import React from 'react';
import Sign from './Sample';
 function Signup() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h1 className='' style={{marginTop:"4rem",fontSize:"2.8rem"}}>Open a trading and demat account</h1>
                <h3 className='text-muted fs-4' style={{fontWeight:"initial"}}>Start investing brokerage free and join a community of 1+ crore investors and traders</h3>
            </div>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src='media\images\account_open.png'></img>
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5'>
                    <Sign/>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}
 
 export default Signup;