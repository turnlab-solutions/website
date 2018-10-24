import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>#100DaysOfCode challenge - Activity log</h1>
    <h3>Day 1 - October 23, Tuesday, 2018</h3>
    <strong>Today's Progress</strong>: Deploy Gatsby Website for my Turnlab Solutions website (portfolio) using Netlify<br />
    <strong>Thoughts:</strong> For the first 30 days I'll do Javascript 30 and publish my projects on this website<br />
    <strong>Link to work:</strong> <a href="https://turnlab.solutions">https://turnlab.solutions</a><br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
