import React, { useEffect } from "react";
import Image from "next/image";
import Visibility from "@components/visibility";
import InProgressIcon from "@img/inprogress.svg";
import { Anton } from "@next/font/google";

const anton = Anton({ weight: "400", display: "swap" });

const Home: React.FC = () => {
    useEffect(() => {
        document.title = "react-app";
    }, []);

    return (
        <>
            <section className="bg-cover bg-repeat-y bg-bg bg-red flex grow flex-col justify-center items-center ">
                <Visibility />
                <div className="bg-maincontainer bg-repeat-y sm:w-full bg-contain p-5 flex grow justify-center items-center ">
                    <div className="w-[200px] pt-20 relative">
                        <Image
                            src="/img/graph.png"
                            fill
                            priority
                            style={{ objectFit: "contain" }}
                            sizes="(max-width: 94px) 33vw,
                                           (max-width: 157px) 22vw"
                            alt="graph"
                            className="mx-auto"
                        ></Image>
                    </div>
                    <div className={`bg-black text-white ${anton.className}`}>
                        <div
                            className={`grid grid-cols-2 space-y-2 border-solid border-4 border-white p-5 space-x-2`}
                        >
                            <div className="md:text-2xl">Next.js template</div>
                            <InProgressIcon className="fill-white" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
