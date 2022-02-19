import React from "react";
import './viewers.scss';

const Viewers = () => {
    return (
        <div id="viewers">
            <div className="viewer-items">
                <div className="item">
                    <img src="/images/viewers-disney.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted type="video" src="/videos/cards_1.mp4"></video>
                </div>
                <div className="item">
                    <img src="/images/viewers-pixar.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted type="video" src="/videos/cards_2.mp4"></video>

                </div>
                <div className="item">
                    <img src="/images/viewers-marvel.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted type="video" src="/videos/cards_3.mp4"></video>

                </div>
                <div className="item">
                    <img src="/images/viewers-starwars.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted type="video" src="/videos/cards_4.mp4"></video>

                </div>
                <div className="item">
                    <img src="/images/viewers-national.png" alt="" />
                    <video autoPlay={true} loop={true} playsInline={true} muted type="video" src="/videos/cards_5.mp4"></video>

                </div>
            </div>

        </div>
    )
}

export default Viewers;