import { useEffect, useState } from "react";

const options = {
  root: document.querySelector("main"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new window.IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      target._handleIntersect(isIntersecting);
    });
  },
  [options]
);

export default function useVideoPlayer({ videoRef, isVisibleMenu=false }) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const { current: video } = videoRef;

    if (isVisibleMenu && playing) {
      video.pause();
      setPlaying(false);
      return;
    }
    if (playing && !isVisibleMenu) {
      video.pause();
      setPlaying(!playing);
    }
    if (!playing && !isVisibleMenu) {
      setPlaying(!playing);
      video.play();
    }
     if (!playing && isVisibleMenu) {
      video.play();
      setPlaying(true);
      return;
    }
  };

  useEffect(() => {
    observer.observe(videoRef.current);
    videoRef.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = videoRef;

      isIntersecting? videoEl.play() : videoEl.pause();
      setPlaying(!videoEl.paused);
    };
  }, []);

  return { handlePlay, playing };
}
