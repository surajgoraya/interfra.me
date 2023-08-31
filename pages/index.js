import { useState } from 'react';
import Page from '../components/Page';
import logo from '../core/img/iframe_logo.png';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [onHeaderComplete, setOnHeaderComplete] = useState(false);
  const [onBodyComplete, setOnBodyComplete] = useState(false);

  return (
    <>
      <Head>
        <title>Interframe – Everything Will Be OK EP, out now!</title>
        <meta
          name="description"
          content="Punjabi Canadian producer. Everything Will Be OK, EP - out now!"
        />

      </Head>
      <div className="App">
        <Page>
          <div className="app__content">
            <div className="app__content_container">
              <div className="app__header" style={{ opacity: onHeaderComplete ? 1 : 0, animationDelay: 200 + 'ms' }} onAnimationEnd={() => setOnHeaderComplete(true)}>
                <Image className="app__header__logo" src={logo} alt="Interframe Logo" priority={true}/>
              </div>
              <hr />
              <div className="app__body" style={{ opacity: onBodyComplete ? 1 : 0, animationDelay: 500 + 'ms' }} onAnimationEnd={() => setOnBodyComplete(true)}>
                <h4>-{''}-</h4>
                <h1></h1>
                <div className="app__letter">
                  {'everything was temporary.'}
                </div>
              </div>
            </div>
          </div>
        </Page>
      </div>
    </>
  )
}
