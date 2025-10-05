"use client";

import Image from "next/image";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, SplitText);

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <Image
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        width={300}
        height={300}
      />
      <Image
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        width={300}
        height={300}
      />

      <div className="content">
        <h2>Where to find Us</h2>

        <div>
          <h3>Visit our store</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
