import Link from "next/link";
import Image from "next/image";
import nextjs from "public/nextjs.svg"
import Navbar from "@/components/Navbar";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Personal</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya Aefar Firman</h1>
            <p className="description">
              Saya seorang Pengembang Web Junior Front End Developer, Back End
              Developer dan Desainer UI/UX
            </p>
            <Link href="/contact">
              <a className="cta">Contact Me</a>
            </Link>
          </div>
          <div className="image-wrapper">
            <Image src="/undraw.svg" alt="human" width={500} height={500} />
          </div>
        </div>
      </section>
      <footer>
        <div className="icon-items">
          <div className="icon-item">
            <Link href="https://github.com/Marineux">
            <a target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
            </a>
            </Link>
          </div>
          <div className="icon-item">
            <Link href="/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
            </a>
            </Link>
          </div>
          <div className="icon-item">
            <Link href="https://nextjs.org/">
            <a target="_blank">
              <Image
                src={nextjs}
                alt="Next.js"
                width={45}
                height={45}
              />
            </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
