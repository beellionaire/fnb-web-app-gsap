"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: 200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">HANZYTO</h1>

        <Image
          src="/images/hero-left-leaf.png"
          className="left-leaf w-32 md:w-64 xl:w-72"
          width={100}
          height={100}
          alt="left-leaf"
        />

        <Image
          src="/images/hero-right-leaf.png"
          className="right-leaf w-32 md:w-64 xl:w-72"
          width={100}
          height={100}
          alt="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="font-playfair-display">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                dicta.
              </p>
              <p className="subtitle">
                Burn Spirit In <br />
                Summer Series
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle font-playfair-display">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                tempore provident aut reiciendis, magni ad
              </p>
              <a
                href="#cocktails"
                className="cursor-pointer font-playfair-display"
              >
                View Drink
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
