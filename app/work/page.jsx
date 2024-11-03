"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from '@radix-ui/react-dialog';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num:'01',
    category:'Full Stack',
    title:'HealthSync',
    description: "HealthSync is an online web application designed to Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free",
    stack:[
      {name: "HTML5"},
      {name:"CSS3"},
      {name:"JS"},
      {name:"React.Js"},
      {name:"MongoDB"},
      {name:"Rest API"},
    ],
    image: '/assets/work/HealthSync.png',
    live: "http://health-sync-five.vercel.app",
    github:"https://github.com/Hari-1005/HealthSync",
  },
  {
    num:'02',
    category:'Full Stack',
    title:'Forever',
    description: 'Our mission at Forever is to empower customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.',
    stack:[
      {name: "HTML5"},
      {name:"CSS3"},
      {name:"JS"},
      {name:"React.Js"},
      {name:"MongoDB"},
      {name:"Rest API"},
    ],
    image: '/assets/work/Forever.png',
    live: "http://forever-frontend-seven-psi.vercel.app",
    github:"https://github.com/Hari-1005/forever",
  },
  {
    num:'03',
    category:'Full Stack',
    title:'My-Results',
    description: 'My-Results is a web application designed for B.Tech students at JNTUH to easily access their results with a smooth and hassle-free experience. The platform offers a clean, user-friendly interface, My-Results makes result checking convenient and straightforward, providing an efficient solution for students.',
    stack:[
      {name: "React.Js"},
      {name:"Node.Js"},
      {name:"Express.Js"},
      {name:"REST"},
      {name:"Tailwind"},
      {name:""},
    ],
    image: '/assets/work/myresults.png',
    live: "https://my-results.vercel.app/",
    github:"https://github.com/Hari-1005/My-results",
  },

];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity:1,
    transition:{delay:2.4, duration:0.4, ease:"easeIn"
    }}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
                <div className="flex items-center gap-4"> 
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              <WorkSliderBtns containerStyles="front flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 x-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div>
                    <Image src={project.image} fill className="object-contain" alt={project.title}/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;