import { useEffect } from "react";
import "./carousel.css";
import Navbar from "./Navbar";
function Carousel() {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/18114939/pexels-photo-18114939/free-photo-of-ciudad-francia-punto-de-referencia-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Slide 1",
      title: "DESIGN SLIDER",
      topic: "SERVICIO 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam",
    },
    {
      image:
        "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-ciudad-paisaje-puesta-de-sol-panorama-urbano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Slide 2",
      title: "DESIGN SLIDER",
      topic: "SERVICIO 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam",
    },
    {
      image:
        "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Slide 3",
      title: "DESIGN SLIDER",
      topic: "SERVICIO 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam",
    },
  ];

  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom.querySelector(".carousel .list");
    const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    const timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelector(".item"));

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="carousel">
        <div className="list">
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={slide.alt} />
              <div className="content">
                <div className="title">{slide.title}</div>
                <div className="topic">{slide.topic}</div>
                <div className="des">{slide.description}</div>
                <div className="buttons">
                  <button>IR AL SERVICIO</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={slide.alt} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
}

export default Carousel;
