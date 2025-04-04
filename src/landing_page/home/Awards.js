function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div class="col-6 p-5">
                    <img src="media/images/largestBroker.svg"></img>
                </div>
                <div class="col-6 p-5 mt-5">
                    <h1>Largest stock brocker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all volumes in indian daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Future and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;