import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>#100DaysOfCode challenge - Activity log</h1>
    <h3>Day 1 - October 23, Tuesday, 2018</h3>
    <p><strong>Today's Progress</strong>: Deploy Gatsby Website for my Turnlab Solutions website (portfolio) using Netlify<br />
    <strong>Thoughts:</strong> For the first 30 days I'll do Javascript 30 and publish my projects on this website<br />
    <a href="https://turnlab.solutions">Link to work</a><br />
    </p>
    <h3>Day 2 - October 24, Wednesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Did the first challenge of Javascript 30<br />
    <strong>Thoughts:</strong> That was fun I had never needed the audio html element before<br />
    <a href="https://maxletourneur.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/">Link to work</a><br />
    </p>
    <h3>Day 3 - October 25, Thursday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Made a JS clockface day for #2 of Javascript 30<br />
    <strong>Thoughts:</strong> Reminded me that CSS transform/animations are the fundations for a UI where nothing is created, everything is transformed from one view to the next...<br />
    <a href="https://maxletourneur.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/">Link to work</a><br />
    </p>
    <h3>Day 4 - October 26, Friday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Played with CSS variables and image filter for #3 of Javascript 30<br />
    <strong>Thoughts:</strong>HTML color picker is still not supported on iOS (displays as input text) Shout out to Android for handling it beautifully!<br />
    <a href="https://maxletourneur.github.io/JavaScript30/03%20-%20CSS%20Variables/">Link to work</a><br />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
