import React, { useEffect, useState, memo } from "react";
import { db } from "../firebase"; // Assure-toi que Firebase est bien configuré
import { collection, getDocs } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import * as PropTypes from "prop-types";
import {ChevronRight, ChevronsDown} from "lucide-react";
import { ChevronDown } from "lucide-react";

const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
        >
            Mon Parcours
        </h2>
        <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            data-aos="zoom-in-up"
            data-aos-duration="800"
        >
            Le chemin qui m&apos;amène à vos portes.
        </p>
    </div>
));

const ParkourPage = () => {
    const [parcours, setParcours] = useState([]);

    useEffect(() => {
        const fetchParcours = async () => {
            const querySnapshot = await getDocs(collection(db, "parcours"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setParcours(data.reverse()); // Inverser l'ordre des éléments
        };

        fetchParcours();
    }, []);

    const [hoveredStep, setHoveredStep] = useState(null);

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-30" id="Parkour">
            <Header />

            {/* Conteneur horizontal */}

            <div className={`grid xl:grid-cols-${parcours.length+1} grid-rows-${parcours.length+1} gap-2 mt-10 justify-center items-start`}>
                {parcours.map((step, index) => (
                    <>
                        <div className="flex xl:flex-row flex-col items-center" >
                            <div data-aos="fade-up" data-aos-duration={1300} className="relative group">
                                <div
                                    key={step.id}
                                    className={`
                                        relative z-10 group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                                        overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                                        flex flex-col justify-between
                                        ${hoveredStep === index ? "max-h-[500px]" : "max-h-[260px]"}
                                      `}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <div className="m-4 transition-transform duration-300 transform scale-105">
                                        <div className="flex flex-row gap-2">
                                            <h3 className="text-lg font-semibold">{step.title}</h3>
                                            <h4 className="text-lg font-semibold">{step.date}</h4>
                                        </div>

                                        {hoveredStep === index && (
                                            <div className="mt-4 text-gray-300 transition-opacity duration-300">
                                                {step.description}
                                            </div>
                                        )}

                                        <div className="flex flex-row justify-center items-center gap-3 mt-8">
                                            {step.languages.map((language) => (
                                                <img src={`${language}.svg`} alt={`${language} logo`} className="w-6 h-6" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <ChevronDown className="w-14 h-14 text-gray-400 ml-3 xl:hidden" />

                                <ChevronRight className="w-14 h-14 text-gray-400 ml-3 hidden xl:block" />

                        </div>
                    </>
                ))}
                <div
                    className="relative z-10 bg-white backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between "
                    data-aos="fade-up"
                    data-aos-delay={800}
                >
                    <div className="m-11 justify-center items-center">
                            <h3 className=" text-2xl text-black font-semibold">Votre projet ?</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default memo(ParkourPage);
