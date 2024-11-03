import {Button} from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
// import Photo from '@/components/Photo';
import Stats from '@/components/Stats ';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 py-7">Hello I&lsquo;m <span className="text-accent">Hariteja</span></h1>
            <p className=" mb-9 mt-1 text-center text-white/80">Full-stack developer with hands-on experience in creating responsive, efficient web applications using the MERN stack. Eager to join a collaborative team where I can contribute to impactful projects and grow my skills in web development.</p>
            
            <div className="flex flex-col items-center gap-8">
              
              <Link href="/assets/hariteja.pdf" target="_blank">
              <Button download variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* <Photo /> */}
          </div>
        </div>
      </div>
      <Stats /> 
    </section>
  )
}

export default Home;
