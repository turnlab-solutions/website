import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <p>Maxime Letourneur</p>
    <p>Software engineer with 8+ years of experience building progressive web applications.</p>
    <ul>
        <li><a href="http://linkedin.com/in/maximeletourneur" target="_blank">Linkedin</a></li>
        <li><a href="http://twitter.com/maxletou" target="_blank">Twitter</a></li>
        <li><a href="http://github.com/maxletourneur" target="_blank">Github</a></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
