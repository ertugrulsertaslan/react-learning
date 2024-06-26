import React, { useState, useRef, useEffect } from "react";
import nextBtn from "/src/assets/next-arrow-107-24.png";
import prevBtn from "/src/assets/arrow-107-24.png";
import playBtn from "/src/assets/play-24.png";
import pauseBtn from "/src/assets/pause-24.png";

const musicData = [
  {
    id: 1,
    title: "The Drum",
    artist: "Artist Name 1",
    album: "Album Name 1",
    duration: "3:45",
    cover: "/src/assets/TheDrums-days.jpg",
    file: "/src/assets/TheDrum-Days.m4a",
  },
  {
    id: 2,
    title: "Imagine Dragons",
    artist: "Artist Name 2",
    album: "Album Name 2",
    duration: "4:20",
    cover: "/src/assets/Imagine-Dragons-album-photo.jpg",
    file: "/src/assets/ImagineDragonsBirds.m4a",
  },
  {
    id: 3,
    title: "Michigan Cherry",
    artist: "Artist Name 2",
    album: "Album Name 2",
    duration: "4:20",
    cover: "/src/assets/MichiganCherry.jpg",
    file: "/src/assets/River Whyless Michigan Cherry (Official Music Video).m4a",
  },
];

function MusicPlayer() {
  const [currentTrackIndex, SetCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(musicData[currentTrackIndex].file));

  const playingButton = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    SetCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicData.length);
    setIsPlaying(true);
  };
  const prevTrack = () => {
    SetCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? musicData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(musicData[currentTrackIndex].file);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="bg-orange-400 rounded">
      <div className="text-center justify-center ms-9 me-9">
        <h2 className="text-lg text-stone-100 mt-1 font-bold">
          {musicData[currentTrackIndex].title}
        </h2>
        <img
          className="max-w-36 max-h-22 p-1 object-cover m-2"
          src={musicData[currentTrackIndex].cover}
          alt=""
        />
        <div className="flex text-center justify-between items-center mt-4 mb-4">
          <button onClick={prevTrack}>
            <img src={prevBtn} alt="" />
          </button>
          <button onClick={playingButton}>
            <img src={!isPlaying ? playBtn : pauseBtn} alt="" />
          </button>
          <button onClick={nextTrack}>
            <img src={nextBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
