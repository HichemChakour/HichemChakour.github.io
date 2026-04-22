import React, { useEffect, useState, memo, useRef } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "aos/dist/aos.css";
import { ChevronsLeft, ChevronRight, ChevronsDown } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = memo(() => (
    <div className="text-center lg:mb-6 mb-2 px-[5%]">
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

Header.displayName = "Header";

const ParkourPage = () => {
    const [parcours, setParcours] = useState([]);
    const [hoveredStep, setHoveredStep] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [selectedStep, setSelectedStep] = useState(null);

    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const fetchParcours = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "parcours"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setParcours(data.reverse());
            } catch (error) {
                console.error("Erreur lors du chargement du parcours :", error);
            }
        };

        fetchParcours();
    }, []);

    useEffect(() => {
        if (!parcours.length) return;
        if (window.innerWidth < 768) return;

        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const startPause = 200;
        const endPause = 200;

        const getScrollAmount = () => {
            const trackWidth = track.scrollWidth;
            const viewportWidth = window.innerWidth;

            // marge de sécurité pour les paddings + gaps
            const extraOffset = 400;

            return Math.max(0, trackWidth - viewportWidth + extraOffset);
        };

        const ctx = gsap.context(() => {
            gsap.set(track, { x: 0, force3D: true });

            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                force3D: true,
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: () => `+=${startPause + getScrollAmount() + endPause}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.create({
                trigger: section,
                start: "center center",
                end: () => `+=${startPause + getScrollAmount() + endPause}`,
                onUpdate: (self) => {
                    const total = startPause + getScrollAmount() + endPause;
                    const raw = self.progress * total;

                    let progress = 0;

                    if (raw <= startPause) {
                        progress = 0;
                    } else if (raw >= startPause + getScrollAmount()) {
                        progress = 1;
                    } else {
                        progress = (raw - startPause) / getScrollAmount();
                    }

                    gsap.set(track, {
                        x: -getScrollAmount() * progress,
                        force3D: true,
                    });
                },
            });
        }, section);

        const handleRefresh = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleRefresh);

        return () => {
            window.removeEventListener("resize", handleRefresh);
            ctx.revert();
        };
    }, [parcours]);

    const handleStepClick = (step) => {
        setSelectedStep(step);
        setSidebarVisible(true);
    };

    return (
        <div
            className="h-auto text-white overflow-hidden mt-30"
            id="Parkour"
            ref={sectionRef}
        >
            <div className="block md:hidden px-[5%] lg:px-[10%] ">
                <Header />
            </div>

            {/* Mobile */}
            <div className="block md:hidden px-[5%] lg:px-[10%] pb-[10%]">
                <div className="flex flex-col gap-2 mt-6 justify-center items-center">
                    {parcours.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="flex flex-col items-center w-full">
                                <div className="relative group w-full max-w-[22rem]">
                                    <div
                                        className="
                      relative z-10 group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                      overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                      flex flex-col justify-between cursor-pointer min-h-[240px]
                    "
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                        onClick={() => handleStepClick(step)}
                                    >
                                        <div className="m-4">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-lg font-semibold">{step.title}</h2>
                                                <p className="text-gray-300">{step.date}</p>
                                            </div>

                                            <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-8">
                                                {step.languages?.map((language) => (
                                                    <img
                                                        key={language}
                                                        src={`${language}.svg`}
                                                        alt={`${language} logo`}
                                                        className="w-6 h-6"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {index < parcours.length  && (
                                <ChevronsDown className="w-10 h-10 text-gray-500 my-3" />
                            )}
                        </React.Fragment>
                    ))}

                    <div className="relative z-10 bg-white rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between">
                        <div className="m-12 justify-center items-center">
                            <h3 className="text-2xl text-black font-semibold">Votre projet ?</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <div className="sticky top-0 h-[70vh] flex flex-col justify-start px-[5%] lg:px-[10%] mt-20 overflow-hidden">
                    <Header />

                    <div className="mt-10">
                        <div
                            ref={trackRef}
                            className="flex items-center gap-10 w-max will-change-transform"
                        >
                            {parcours.map((step, index) => (
                                <React.Fragment key={step.id}>
                                    <div className="relative group shrink-0">
                                        <div
                                            className="
                  relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10
                  overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  flex flex-col justify-between cursor-pointer
                  w-[30vw] h-[40vh]
                "
                                            onClick={() => handleStepClick(step)}
                                        >
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <h2 className="text-2xl font-bold">{step.title}</h2>
                                                    <p className="text-gray-300 mt-2">{step.date}</p>
                                                </div>

                                                <p className="text-gray-400 mt-6 line-clamp-4 text-lg">
                                                    {step.description}
                                                </p>

                                                <div className="flex flex-wrap gap-3 mt-6">
                                                    {step.languages?.map((language) => (
                                                        <img
                                                            key={language}
                                                            src={`${language}.svg`}
                                                            alt={language}
                                                            className="w-8 h-8"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {index < parcours.length && (
                                        <ChevronRight className="w-12 h-12 text-gray-500 shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}

                            <div className="w-[30vw] h-[40vh] bg-white rounded-2xl flex items-center justify-center shrink-0">
                                <h3 className="text-3xl text-black font-bold">Votre projet ?</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar
                visible={sidebarVisible}
                onHide={() => setSidebarVisible(false)}
                className="p-4 bg-gray-900/90 backdrop-blur-xl border-l border-white/10"
                style={{ width: "30rem" }}
                closeIcon={<ChevronsLeft className="w-6 h-6 text-white" />}
            >
                {selectedStep && (
                    <div className="text-white">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-2">{selectedStep.title}</h2>
                            <p className="text-gray-300">{selectedStep.date}</p>
                        </div>

                        <div className="flex gap-3 mb-6 flex-wrap">
                            {selectedStep.languages?.map((language) => (
                                <img
                                    key={language}
                                    src={`${language}.svg`}
                                    alt={`${language} logo`}
                                    className="w-8 h-8"
                                />
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