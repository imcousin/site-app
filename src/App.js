import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cusson Cheung</h1>
        <p>Full Stack Developer</p>
        <p>Email</p>
        <p><a href="https://github.com/imcousin" target="_blank">https://github.com/imcousin</a></p>
      </header>
      <main>
        <content>
          <section className="sect-summary">
            <h3>Summary</h3>
            <p>I have been working with web development since 2010, the period during which I have worked in different environments in a start-up. I am a self-motivated and self-taugh professional who likes to solve problems.</p>
            <p>I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. My repertoire includes programming languages and tools such as ReactJS, MobX, Wordpress, MySQL, PostgresSQL, Nginx, and apache server configuration, SASS, LESS, Twitter Bootstra, jQuery, and more.</p>
          </section>
          <section className="sect-experience"><h3>Experience</h3></section>
        </content>
        <aside>
          <section className="sect-technologies">
            <h3>Technologies</h3>
          </section>
          <section className="sect-what-im-proud-of">
            <h3>What I'm Proud Of</h3>
          </section>
          <section className="sect-my-life-philosophy">
            <h3>My Life Philosophy</h3>
          </section>
          <section className="sect-passion">
            <h3>Passion</h3>
          </section>
          <section className="sect-language">
            <h3>Language</h3>
          </section>
          <section className="sect-how-i-spend-my-time">
            <h3>How I Spend My Time</h3>
          </section>
        </aside>
      </main>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
