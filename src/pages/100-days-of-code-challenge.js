import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>#100DaysOfCode challenge - Activity log</h1>
    <h3>Day 1 - October 23, Tuesday, 2018</h3>
    <p><strong>Today's Progress</strong>: Deploy Gatsby Website for my Turnlab Solutions website (portfolio) using Netlify<br />
    <strong>Thoughts:</strong> For the first 30 days I'll do Javascript 30 and publish my projects on this website<br />
    <strong>Link to work:</strong> <a href="https://turnlab.solutions">https://turnlab.solutions</a><br />
    </p>
    <h3>Day 2 - October 24, Tuesday, 2018</h3>
    <p>
    <strong>Today's Progress</strong>: Did the first challenge of Javascript 30<br />
    <strong>Thoughts:</strong> That was fun I had never needed the audio html element before<br />
    <strong>Link to work:</strong> <a href="https://maxletourneur.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/">https://maxletourneur.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/</a><br />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
