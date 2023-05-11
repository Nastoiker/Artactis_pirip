import { ReviewContainerProps } from "./ReviewsContainer.props.ts";
import { Review } from "./Review.tsx";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Htag } from "../Htag/Htag.tsx";
import {useState} from "react";
import './review.container.module.css';
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            width={30}
            height={30}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={'white'}
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
const AdaptiveHeight = (slider) => {
    function updateHeight() {
        slider.container.style.height =
            slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
}

export const ReviewContainer = ({ reviews }: ReviewContainerProps) => {
  const [sliderRef, instanceRef] = useKeenSlider(
      {
          initial: 0,
          slideChanged(s) {
              setCurrentSlide(s.track.details.rel)
          },
          created() {
              setLoaded(true)
          },
      },
      [AdaptiveHeight]
  );
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
  return (
      <>
          <div className="navigation-wrapper max-w-[99vw] ">
              <div ref={sliderRef} className="keen-slider  ">
                  {reviews.map((r, index) => (
                      <div className="keen-slider__slide">
                          <Review key={index} name={r.name} img={r.img} comment={r.comment} />{" "}
                      </div>
                  ))}
              </div>
              {loaded && instanceRef.current && (
                  <div className={"flex my-10 justify-around "}>
                      <Arrow
                          left
                          onClick={(e) =>
                              e.stopPropagation() || instanceRef.current?.prev()
                          }
                          disabled={currentSlide === 0}
                      />

                      <Arrow
                          onClick={(e) =>
                              e.stopPropagation() || instanceRef.current?.next()
                          }
                          disabled={
                              currentSlide ===
                              instanceRef.current.track.details.slides.length - 1
                          }
                      />
                  </div>
              )}
          </div>
          {loaded && instanceRef.current && (
              <div className="dots w-20 h-20">
                  {[
                      ...Array(instanceRef.current?.track.details.slides.length).keys(),
                  ].map((idx) => {
                      return (
                          <button
                              key={idx}
                              onClick={() => {
                                  instanceRef.current?.moveToIdx(idx)
                              }}
                              className={"dot" + (currentSlide === idx ? " active" : "")}
                          ></button>
                      )
                  })}
              </div>
          )}
      </>
  )
}
