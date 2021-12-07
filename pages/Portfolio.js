import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import clone from "public/clone.png";
import keren from "../public/keren.jpeg";
import portfolio from "../public/portfolio.jpeg";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            {" "}
            {/* modifaier */}
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Image src={keren} alt="foto" />
                <h4 className="portfolio-name">Minimalis Digital Libery</h4>
                <div className="portfolio-category">Website Dev</div>
              </div>
              <div className="portfolio-item">
                <Image className="portfolio-image" src={portfolio} alt="foto" />
                <h4 className="portfolio-name">Minimalis Destinasi </h4>
                <div className="portfolio-category">Website Dev</div>
              </div>
              <div className="portfolio-item">
                <Image className="portfolio-image" src={clone} alt="foto" />
                <h4 className="portfolio-name">CALL OF DUTY</h4>
                <div className="portfolio-category">Website Dev</div>
              </div>
              <div className="portfolio-item">
                <Image className="portfolio-image" src={portfolio} alt="foto" />
                <h4 className="portfolio-name">Minimalis Destinasi </h4>
                <div className="portfolio-category">Website Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
