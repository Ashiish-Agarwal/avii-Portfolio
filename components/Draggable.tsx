import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Courses Era my first Project",
      image:
        "/coursesera.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      link:'https://courses-era.netlify.app'
    },
    {
      title: "Hivelinks",
      image:
        "/hivelinks.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
   link:'https://hivelinks.netlify.app'
    },
    {
      title: "Deal option",
      image:
        "/dealoption.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      link:'https://deal-option.app.dorny.site'
    },
    {
      title: "MetaVerse",
      image:
        "/vesuion.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    link:'https://bnbnbasdwdfvb.netlify.app/'
    },
    {
      title: "Ai",
      image:
        "/ai.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      link:'https://ai-ontop.netlify.app'
    },
    {
      title: "Gaming world!!",
      image:
        "/Gaming.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      link:'https://gaminginin.netlify.app'
    },
    
   
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        IF your Breath oxygen. so its a fair game !!
      </p>
      {items.map((item) => (
        <DraggableCardBody className={cn( '  ', item.className)}>
            <Link href={item.link}>
          <Image
          width={100}
          height={100}
          unoptimized
          
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-[200px] w-[450px] object-cover"
            />
            </Link>
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
      
    </DraggableCardContainer>
  );
}
