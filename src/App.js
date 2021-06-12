import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import logo from './core/img/iframe_logo.png';

function App() {
  const [onHeaderComplete, setOnHeaderComplete] = useState(false);
  const [onBodyComplete, setOnBodyComplete,] = useState(false);

  return (
    <div className="App">
      <Page>
        <div className="app__content">
          <div className="app__content_container">
            <div className="app__header" style={{ opacity: onHeaderComplete ? 1 : 0, animationDelay: 200 + 'ms' }} onAnimationEnd={() => setOnHeaderComplete(true)}>
              <img className="app__header__logo" src={logo} alt="Interframe Logo"/>
            </div>
            <hr/>
            <div className="app__body" style={{ opacity: onBodyComplete ? 1 : 0, animationDelay: 500 + 'ms' }} onAnimationEnd={() => setOnBodyComplete(true)}>
              <h4>-Jun 12 2021, 00:00 GMT-</h4>
              <h1>a year later.</h1>
              <div className="app__letter">
                <p>Helloooo!</p>
                <p>First and for most, I want to thank each and everyone of you for all the support everything will be ok has received this year!
                  This was my first major & "real" release, and it has exceeded all my expectations!</p>
                <p>If you're seeing this, you are beyond integral to that, and I love you. For real. ❤️</p>
                <p>I want to give a special shout out to <a href="https://twitter.com/Jpreet_">Jpreet</a>, for all his amazing design work, 
                the <a href="https://beardgel.ca">Beardgel Crew</a> for hyping up and supporting this
                  release. Much love to all my friends, family, and the fans.</p>
                <br/>
                <p className="light-sans">- Interframe</p>
                <h4>-###-</h4>
              </div>
            </div>
          </div>
        
        </div>
      </Page>
    </div>
  );
}

export default App;
