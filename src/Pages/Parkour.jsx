import React, { useEffect, useState, memo } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "aos/dist/aos.css";
import { ChevronRight, ChevronDown, ChevronsLeft } from "lucide-react";
import { Sidebar } from 'primereact/sidebar';


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

Header.displayName = 'Header';

const ParkourPage = () => {
    const [parcours, setParcours] = useState([]);
    const [hoveredStep, setHoveredStep] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [selectedStep, setSelectedStep] = useState(null);

    useEffect(() => {
        const fetchParcours = async () => {
            const querySnapshot = await getDocs(collection(db, "parcours"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setParcours(data.reverse());
        };

        fetchParcours();
    }, []);

    const handleStepClick = (step) => {
        setSelectedStep(step);
        setSidebarVisible(true);
    };

    return (
        <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-30" id="Parkour">
            <Header />

            {/* Conteneur horizontal */}
            <div className={`flex flex-col gap-2 mt-10 justify-center items-center `}>
                {parcours.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center">
                            <div data-aos="fade-up" data-aos-duration={1300} className="relative group">
                                <div
                                    className={`
                                        relative z-10 group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                                        overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                                        flex flex-col justify-between cursor-pointer min-w-80
                                        ${hoveredStep === index ? "max-h-[500px]" : "max-h-[260px]"}
                                      `}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                    onClick={() => handleStepClick(step)}
                                >
                                    <div className="m-4 transition-transform duration-300 transform scale-105">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-lg font-semibold">{step.title}</h2>
                                            <p className="text-gray-300">{step.date}</p>
                                        </div>

                                        <div className="flex flex-row justify-center items-center gap-3 mt-8">
                                            {step.languages.map((language) => (
                                                <img key={language} src={`${language}.svg`} alt={`${language} logo`} className="w-6 h-6" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ChevronDown className="w-14 h-14 text-gray-400 ml-3"/>

                        </div>
                    </React.Fragment>
                ))}
                <div
                    className="relative z-10 bg-white backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between "
                    data-aos="fade-up"

                >
                    <div className="m-12 justify-center items-center ">
                        <h3 className=" text-2xl text-black font-semibold">Votre projet ?</h3>
                    </div>
                </div>
            </div>

            <Sidebar
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
                className="p-4 bg-gray-900/90 backdrop-blur-xl border-l border-white/10"
                style={{ width: '30rem' }}
                closeIcon={<ChevronsLeft className="w-6 h-6 text-white" />}
            >
                {selectedStep && (
                    <div className="text-white">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">{selectedStep.title}</h2>
                            <p className="text-gray-300">{selectedStep.date}</p>
                        </div>

                        <div className="flex gap-3 mb-6">
                            {selectedStep.languages.map((language) => (
                                <img key={language} src={`${language}.svg`} alt={`${language} logo`} className="w-8 h-8" />
                            ))}
                        </div>

                        <div className="prose prose-invert">
                            <p>{selectedStep.description}</p>
                        </div>
                    </div>
                )}
            </Sidebar>
        </div>
    );
};

export default memo(ParkourPage);