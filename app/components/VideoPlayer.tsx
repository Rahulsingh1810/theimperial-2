"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  src: string
  title: string
  description: string
  footerContent: string
}

export default function VideoPlayer({ src, title, description, footerContent }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-[664px] bg-white text-white w-[1400px]">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <button
        onClick={togglePlay}
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-30"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <div className="absolute top-0 left-0 z-10 p-6">
        <div className="max-w-2xl">
          <h1 className="md:text-6xl text-4xl  mb-6 !leading-snug">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute md:w-[97%] bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 backdrop-blur-lg py-8 z-20">
        <div className="container mx-auto px-6">
          <div className="md:pl-10">
            <p className="md:text-lg" dangerouslySetInnerHTML={{ __html: footerContent }} />
          </div>
        </div>
      </div>
    </section>
  )
}

