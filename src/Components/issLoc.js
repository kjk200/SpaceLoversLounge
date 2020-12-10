import React from "react";

const ISSLoc = () => {
    return (
        <div className="iss-widget-display" >
            <div className="widget-div">

                <iframe className="widget-frame" width="800" height="750" src="https://www.n2yo.com/widgets/widget-tracker.php?s=25544&amp;size=large&amp;all=1&amp;me=5&amp;map=2&amp;foot=0" scrolling="no" style={{ border: "none", overflow: "hidden" }}></iframe>
                <div className="map-descrip">
                    <ul><li>240 individuals from 19 countries have visited the International Space Station</li>
                        <li>An international crew of six people live and work while traveling at a speed of five miles per second, orbiting Earth about every 90 minutes.</li>
                        <li>In 24 hours, the space station makes 16 orbits of Earth, traveling through 16 sunrises and sunsets</li>
                        <li>The acre of solar panels that power the station means sometimes you can look up in the sky at dawn or dusk and see the spaceship flying over your home, even if you live in a big city. Find sighting opportunities at <a href="http://spotthestation.nasa.gov" target="_blank">http://spotthestation.nasa.gov</a></li>
                        <li>More than 3 million lines of software code on the ground support more than 1.5 million lines of flight software code.</li>
                        <li>In the International Space Station’s U.S. segment alone, more than 1.5 million lines of flight software code run on 44 computers communicating via 100 data networks transferring 400,000 signals (e.g. pressure or temperature measurements, valve positions, etc.)</li>
                    </ul>
                    <p>Source : <a href="https://www.nasa.gov/feature/facts-and-figures" target="_blank" color="#F8B5EE">https://www.nasa.gov/feature/facts-and-figures</a></p>
                </div>
            </div>


            <div className="links-wrapper-div">
                <a className="who-iss" href="https://www.nasa.gov/mission_pages/station/expeditions/index.html" target="_blank"><span>People on ISS right now </span></a>
                <a className="astro-bios" href="https://www.nasa.gov/astronauts" target="_blank"><span>Astronaut Biographies </span></a>
                <a className="iss-news" href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank"><span>Latest ISS News </span></a>
            </div>
        </div>
    );
}

export default ISSLoc;

