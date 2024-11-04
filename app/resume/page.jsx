"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs,FaWordpress,FaShopify,FaPython,FaPhp,FaBootstrap,FaJava} from 'react-icons/fa';
import {SiTailwindcss,SiMongodb,SiExpress,SiMysql,SiCanva,SiPostman,SiNextdotjs} from 'react-icons/si';
import Social from '@/components/Social';

// about data

const about = {
  title: 'About me',
  description: "I’m a full-stack developer with experience in building responsive, efficient web applications using the MERN stack. I’m passionate about creating impactful projects and continuously growing my skills in web development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kasani Hariteja"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7095122042"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Address",
      fieldValue: "Hyderabad, Telangana"
    },
    {
      fieldName: "Email",
      fieldValue: "hariteja.in@gmail.com"
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:"As a Full Stack Web Developer with over One year of experience, I've specialized in crafting secure, high-quality web solutions that prioritize user experience and system performance. My expertise spans a wide range of technologies, including JavaScript (React.js, Node.js, Express.js), MySQL, and more.", 
  items:[
    {
      company: "Self-Employed",
      position: "Full Stack Web Developer",
      duration: "OCT 2024 - Present"
    },
    {
      company: "InnoByte Services",
      position: "Backend Developer",
      duration: "Aug 2024 - Oct 2024"
    },
    {
      company: "Oasis Infobyte",
      position: "Full Stack Web Developer",
      duration: "MAR 2024 - Jun 2024"
    },
    {
      company: "Cyber Secured India",
      position: "Cyber Security & Digital Forensics",
      duration: "Nov 2022 - Feb 2023"
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description:"I am current Intern at Codtech IT Solutions With Role of Full Stack Developer. With a solid foundation in software engineering and over one year of industry experience, I specialize in web development, and innovative tech solutions. My academic journey and hands-on experience enable me to stay at the forefront of emerging technologies.", 
  items:[
    {
      institution: "Annamacharya institute of technology and sciences",
      degree: "Diploma in CSE",
      duration: "2018-2021"
    },
    {
      institution: "Annamacharya institute of technology and sciences",
      degree: "Bachelors in CSE",
      duration: "2021-2024"
    } 
  ]
}

const skills = {
  icon: '/assets/resume/cap.svg',
  title: "My skills",
  description:"Expert in Full Stack Development with proficiency in PHP, Python, JavaScript, and frameworks like ReactJs. Skilled in cloud platforms (AWS) and UI/UX Design for Better User Experience.", 
  skilllist:[
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon:<SiExpress />,
      name: "Express.js"
    },
    {
      icon:<SiMongodb />,
      name: "Mongodb"
    },
    {
      icon:<SiMysql />,
      name: "Mysql"
    },
    {
      icon:<FaPhp />,
      name: "Php"
    },
    {
      icon:<FaPython />,
      name: "Python"
    },
    {
      icon:<FaJava />,
      name: "Java"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon:<SiCanva />,
      name: "Canva"
    },
    {
      icon:<SiPostman />,
      name: "Postman"
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import {motion} from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{ delay: 2.4, duration:0.4, ease: 'easeIn'}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
          </div>
          </TabsList>
          

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span>{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>

            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span>{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>  
                          </Tooltip>
                        </TooltipProvider>
                        </li>
                    })}
                  </ul>

              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
        
      </div>
    </motion.div>
  )
}

export default Resume;