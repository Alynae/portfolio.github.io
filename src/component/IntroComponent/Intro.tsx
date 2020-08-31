import React from "react";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";
import { Carousel } from "react-responsive-carousel";
import Typer from "./Typer/Typer";

import "./IntroComp.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Intro() {
  return (
    <section>
      <div className="opacity">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          dynamicHeight={true}
          autoPlay={true}
          thumbWidth={0}
          infiniteLoop={true}
          interval={2500}
          swipeable={true}
        >
          <div>
            <img src={banner1} alt="banner1" className="bannerSize" />
          </div>
          <div>
            <img src={banner2} alt="banner2" className="bannerSize" />
          </div>
          <div>
            <img src={banner3} alt="banner3" className="bannerSize" />
          </div>
        </Carousel>
      </div>

      <div className="container" id="overlay">
        <div className="row">
          <div className="col-md-12">
            <div className="intro-content">
              <span style={{ textShadow: "black -3px 3px 4px"}}>
                <h1> Bonjour, je suis Jérémy Le bricquer</h1>
                <h4 className ="typer">
                  <Typer
                    title={""}
                    dataText={[" Dev junior", " Frontend & Backend"]}
                  />
                </h4>
              </span>
            </div>
            <a href="/resume">
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
