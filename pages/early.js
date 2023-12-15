import { useState } from "react";
import Page from "../components/Page";
import logo from "../core/img/iframe_logo.png";
import Image from "next/image";
import Head from "next/head";

export default function Early({ FooterContent }) {
  return (
    <>
      <Head>
        <title>Interframe – Whoops.</title>
        <meta name="robots" content="noindex" />
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
              <hr />
              <div className="app__body">
                <div className="app__letter">
                  <b>
                    <h1 className="normalize">Whoops!</h1>
                  </b>
                  <p>
                    {
                      "Looks like you're early to a release (or you figured out a release link). This release will be up soon! Love you."
                    }
                  </p>
                  <br />
                  <p className="light-sans">{FooterContent}</p>
                  <h4>-###-</h4>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;

  return {
    props: {
      FooterContent: new Date().toISOString() + " @ " + ip,
    }, // will be passed to the page component as props
  };
}
