import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Menu from '../components/menu'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'This is NTV Garden' },
        { name: 'keywords', content: 'NTV, Garden' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Menu/>
    <div
      style={{
        margin: '0',
        maxWidth: '100%',
        padding: '0px',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
