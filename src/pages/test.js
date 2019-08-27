import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/MainLayout"
import Image from "../components/image"
import SEO from "../components/seo/YoastSEO"

import Theme from '../vars/ThemeOptions'

const IndexPage = ({pageContext}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{background: Theme.lighten('primary',50)}}>
      {Theme.lighten('primary',50)} 
    </div>
    <div style={{background: Theme.lighten('primary',40)}}>
      {Theme.lighten('primary',40)} 
    </div>
    <div style={{background: Theme.lighten('primary',30)}}>
      {Theme.lighten('primary',30)} 
    </div>
    <div style={{background: Theme.lighten('primary',20)}}>
      {Theme.lighten('primary',20)} 
    </div>
    <div style={{background: Theme.lighten('primary')}}>
      {Theme.lighten('primary')} 
    </div>
    <div style={{background: Theme.hex('primary')}}>
      {Theme.hex('primary')} 
    </div>
    <div style={{background: Theme.darken('primary')}}>
      {Theme.lighten('primary')} 
    </div>
    <div style={{background: Theme.darken('primary',20)}}>
      {Theme.darken('primary',20)} 
    </div>
    <div style={{background: Theme.darken('primary',30)}}>
      {Theme.darken('primary',30)} 
    </div>
    <div style={{background: Theme.darken('primary',40)}}>
      {Theme.darken('primary',40)} 
    </div>
    <div style={{background: Theme.darken('primary',50)}}>
      {Theme.darken('primary',50)} 
    </div>
    {console.log(Theme)}
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
