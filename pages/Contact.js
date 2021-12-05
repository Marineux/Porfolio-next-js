import Navbar from "@/components/Navbar";
import Head from 'next/head'
import React from "react";

export default function Contact() {
  return (
    <div>
      <Head>
          <title>Contact</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            {" "}
            {/* modifaier */}
            <h1 className="title">Contact</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, in. Aliquam quod minima, tempora, voluptatum ullam necessitatibus tenetur, nostrum fugiat repudiandae tempore 
            </p>
            <ul className="contact-links">
                <li className="contact-items">Email   : aefar@gmail.com</li>
                <li className="contact-items">Nomer   : +62243252553</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
