import { useState } from "react";
import Page from "../components/Page";
import logo from "../core/img/interframe.png";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Interframe</title>
        <meta name="description" content="Punjabi Canadian producer." />
      </Head>
      <div className="App">
        <Page>
          <div className="app__content">
            <div className="app__content_container">
              <div className="app__header">
                <Image
                  className="app__header__logo"
                  src={logo}
                  alt="Interframe Logo"
                  priority={true}
                />
              </div>
              <div className="app__body">
                <div className="app__letter">
                  {"surrounded by love i do not deserve, selfish isn't it?"}
                </div>
              </div>
            </div>
          </div>
        </Page>
      </div>
    </>
  );
}
