import { Target } from "../components/templates/target"
import { Footer } from "../components/templates/footer"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export function Index() {
    return(
        <>
            <div className="flex w-full h-[80vh] overflow-hidden z-10 justify-center items-center text-white font-serif">
                <div className="flex flex-col h-[80%] w-full absolute bg-gray-500 z-10 opacity-70 text-center items-center justify-center"></div>
                <img src="../../src/assets/img/index.webp" alt="" className="w-full object-fill -z-10"/>
                <h1 className="absolute z-20 text-8xl font-serif mb-[10%]">Empresa ABC</h1>
                <p className="absolute z-20 mt-[8%] w-[80%] text-center text-3xl">
                    Los libros son faros en la oscuridad, guiándonos hacia la sabiduría y la comprensión.
                </p>
            </div>
            <section className="flex flex-col items-center w-full h-[40vh] mt-14">
                <h1 className="font-serif text-3xl ">Equipo de desarrollo</h1>
                <Target name="David Santiago Úsuga"/>
            </section>
            <Footer />
        </>
    )
}