import Navbar from "@/components/Navbar";
import React from "react";
import Head from 'next/head';

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar  />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full"> {/* modifaier */}
            <h1 className="title">About</h1>
            <p className="description">
              Perkenalkan saya Aefar Firman Seorang Junior Web developer dan Desainer yang sedang menempuh perkuliahan semester 1 saat ini daerah Jawa Tengah. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
