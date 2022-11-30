import { useState } from 'react';
import Page from '../components/Page';
import logo from '../core/img/iframe_logo.png';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [onHeaderComplete, setOnHeaderComplete] = useState(false);
  const [onBodyComplete, setOnBodyComplete,] = useState(false);

  return (
    <>
    <Head>
      <title>Interframe – Everything Will Be OK EP, out now!</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="theme-color" content="#101010" />
      <meta
        name="description"
        content="Punjabi Canadian producer. Everything Will Be OK, EP - out now!"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,500&family=Source+Code+Pro:wght@200;300;400&display=swap"
        rel="stylesheet"/>
    </Head>
     <div className="App">
      <Page>
        <div className="app__content">
          <div className="app__content_container">
            <div className="app__header" style={{ opacity: onHeaderComplete ? 1 : 0, animationDelay: 200 + 'ms' }} onAnimationEnd={() => setOnHeaderComplete(true)}>
              <Image className="app__header__logo" src={logo} alt="Interframe Logo" loading='eager'/>
            </div>
            <hr/>
            <div className="app__body" style={{ opacity: onBodyComplete ? 1 : 0, animationDelay: 500 + 'ms' }} onAnimationEnd={() => setOnBodyComplete(true)}>
              <h4>-Jun 12 2021, 00:00:00 EST-</h4>
              <h1>a year later.</h1>
              <div className="app__letter">
                <p>Helloooo!</p>
                <p>First and for most, I want to thank each and everyone of you for all the support <i><a href='https://fanlink.to/ewbok'>Everything Will Be Ok</a></i> has received this year!
                  This was my first major/"real" release I've ever done, and it has exceeded all my expectations!</p>
                <p>If you're seeing this, you are beyond integral to that, me and my journey, and for that I love you, beyond words. For real. ❤️</p>
                <p>I want to give a special shout out to <a href="https://twitter.com/Jpreet_">Jpreet</a>, for all his amazing design work, 
                the <a href="https://beardgel.ca">Beardgel Crew</a> for hyping up and supporting this release, and of course all of my amazing friends, family, and most of all, listeners.</p>
                <br/>
                <p><strong>Y'all truly make dreams come true.</strong></p>
                <br/>
                <p className="light-sans">- Interframe</p>
                <h4>-###-</h4>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
    </>
  )
}
