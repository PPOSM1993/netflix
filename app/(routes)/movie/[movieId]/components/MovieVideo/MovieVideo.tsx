"use client";
import { MovieVideoProps } from './MovieVideo.type';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function MovieVideo(props: MovieVideoProps) {
  const { currentMovie } = props;

  return (
    <ReactPlayer
      src={currentMovie}
      loop={true}
      width="100%"
      height="100%"
      playing={true}
      muted={true}
      controls={false}
    />
  );
}