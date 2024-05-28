import { highlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div key={list.id} id="slider">
            <div className="video-carousel_container">TEST</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
