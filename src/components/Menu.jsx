"use client";

import Image from "next/image";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Menu = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 10,
        y: 50,
      });
  });

  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="menu-left-leaf"
        width={100}
        height={100}
        id="c-left-leaf"
        className="w-32 md:w-64 xl:w-72"
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="menu-right-leaf"
        width={100}
        height={100}
        id="c-right-leaf"
        className="w-32 md:w-64 xl:w-72"
      />

      <div className="list">
        <div className="popular">
          <h2 className="font-playfair-display">Most Popluar Foods:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3 className="font-playfair-display font-bold">{name}</h3>
                  <p className="font-playfair-display">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-playfair-display">{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2 className="font-playfair-display">Most Popluar Drinks:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3 className="font-playfair-display font-bold">{name}</h3>
                  <p className="font-playfair-display">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-playfair-display">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
