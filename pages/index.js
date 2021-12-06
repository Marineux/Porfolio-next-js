import Link from "next/link";
import Image from "next/image";
import github from "public/github.svg"
import instagram from "public/instagram.svg"
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
              <Image
                src={github}
                alt="Github"
                width={25}
                height={25}
              />
            </a>
            </Link>
          </div>
          <div className="icon-item">
            <Link href="/">
            <a>
              <Image
                src={instagram}
                alt="Instagram"
                width={25}
                height={25}
              />
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
