import React, { Component } from "react";

const URL_APOD = "https://api.nasa.gov/planetary/apod?api_key=SQN2WmYfw1ZNBsrUoBaAlRlDtdhJHdUo3K041TC6";

const previousDate = () => {
    let prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    let prevDate1 = prevDate.toISOString().split("T")[0];
    console.log(URL_APOD + '&date=' + prevDate1)
    return prevDate1;
}

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            apodpic: ""
        }
    }


    componentDidMount() {
        fetch(URL_APOD, {
            method: "GET"
        }).then(response => { if (response.ok) { return (response) } else { return fetch(URL_APOD + '&date=' + previousDate()) } }).then(response => response.json()).then(json => this.setState({ apodpic: json }));

    }

    render() {
        const apodpic = this.state;
        //console.log(apodpic);
        const medType = this.state.apodpic.media_type;
        return (

            <div className="home-display">

                {
                    <>
                        <div className="apod-title">APOD NASA : {this.state.apodpic.title}</div>
                        <div className="apod-pic">{medType == "image" ? <img src={this.state.apodpic.url} alt="OOps...Seems like Astronomy Pic Of The Day is not available at this time"></img>
                            : medType == "video" ? <iframe width="80%" height="750px" src={this.state.apodpic.url} > </iframe> : <img className="dummy-image" src=""></img>} </div>
                        <div className="apod-descrip">
                            <div className="desc-text">{this.state.apodpic.explanation}</div>
                        </div>

                    </>
                }
            </div>

        );

    }

}

export default Home;




