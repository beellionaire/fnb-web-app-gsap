"use client";

import Image from "next/image";
import gsap from "gsap";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">HanzArt</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/images/check.png"
                  alt="check-image"
                  height={10}
                  width={10}
                />
                <p className="font-playfair-display">{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <Image
              src="/images/under-img.jpg"
              alt="cocktail"
              width={10}
              height={10}
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <Image
                  src="/images/check.png"
                  width={10}
                  height={10}
                  alt="images"
                />
                <p className="md:w-fit w-60 font-playfair-display">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Lorem ipsum dolor sit</h2>
          <div id="masked-content">
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
