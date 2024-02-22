
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left pr-5 ">
                    <h1 className="text-[#655437] mb-4 text-4xl sm:text-5xllg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text text-[#121212] bg-[#121212]">Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[

                            'Icy.',
                            1000, 
                            'a Frontend Developer.',
                            1000,
                            'a Graphic Designer.',
                            1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#262717] text-base sm:text-lg mb-6 lg:text-xl ">Junior frontend developer deeply committed to crafting exceptional and elevated user experiences through meticulous UX/UI design.</p>
                <div>
                    <Link href="/#contact" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#655437] hover:text-[#EDEDE3] hover:bg-[#AFAD8B]  text-[#EDEDE3] border">Hire Me</Link>
                  
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:text-[#EDEDE3] text-[#EDEDE3] mt-3">
                        <span className="block bg-[#655437] hover:bg-[#AFAD8B] rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 pb-20">
                    <div className="rounded-full bg-[#AFAD8B] w-[500px] h-[500px] lg:w-[450px] lg:h-[450px] relative bg-opacity-75 hover:bg-opacity-50">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pr-10"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
       </section>
    );
};

export default HeroSection;

