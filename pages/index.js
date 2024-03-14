import { useState } from "react";
import Page from "../components/Page";
import logo from "../core/img/interframe.png";
import Image from "next/image";
import Head from "next/head";
import { INTERFRAME_ALBUMS } from "../configuration/albums.config";

export async function getStaticProps() {
  const albums = INTERFRAME_ALBUMS;

  return { props: { albums } };
}

export default function Home({ albums }) {
  return (
    <>
      <Head>
        <title>Interframe</title>
        <meta name="description" content="Punjabi Canadian producer." />
      </Head>
      <div className="App min-h-full min-w-full">
        <Page>
          <div className="app__content min-w-full min-h-full flex items-center justify-center">
            <div className="app__content_container">
              <div className="app__header mt-[20%]">
                <Image
                  className="app__header__logo"
                  src={logo}
                  height={500}
                  width={300}
                  alt="Interframe Logo"
                  priority={true}
                />
              </div>
              <div className="app__body">
                <div className="app__letter mt-4">
                  {"surrounded by love i do not deserve, selfish isn't it?"}
                </div>
                <hr className="mb-[-2] mt-8"/>
                <div className="app__grid mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {albums.map((album, i) => (
                    <a className={`animate-loadIn flex flex-col items-center text-center hover:underline focus:underline text-white`} href={album.link} aria-description={`A link to Interframe's album ${album.title}`}>
                      <Image
                        src={album.image}
                        height={200}
                        width={200}
                        unoptimized
                        alt={`Cover art of ${album.title}`}
                      ></Image>
                      <p className="mt-2 text-s font-sans font-bold">{album.title}</p>
                      <p className="mt-0 text-xs">
                        {album.artist.map((artist, i) =>
                          album.artist.length > 1 && i != 1
                            ? artist + ", "
                            : artist
                        )}{" "}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Page>
      </div>
    </>
  );
}
