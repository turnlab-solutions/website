import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    <Link to="/100-days-of-code-challenge/">100 Days of Code Challenge</Link>
  </Layout>
)

export default IndexPage
