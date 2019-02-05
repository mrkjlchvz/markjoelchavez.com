import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class ProjectsPage extends React.Component {
  render() {
    const siteTitle 
      = `Projects - ${get(this, 'props.data.site.siteMetadata.title')}`
    const githubUrl 
      = get(this, 'props.data.site.siteMetadata.githubUrl')
    const githubClient 
      = get(this, 'props.data.site.siteMetadata.projects.github_client')
    const cryptoContributors 
      = get(this, 'props.data.site.siteMetadata.projects.crypto_contributors')
    const bitcoinIndex 
      = get(this, 'props.data.site.siteMetadata.projects.bitcoin_index')
    const yamda 
      = get(this, 'props.data.site.siteMetadata.projects.yamda')
    const ytDownloader 
      = get(this, 'props.data.site.siteMetadata.projects.yt_downloader')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div>
          <h3 style={{fontWeight: 'bold'}}> GitHub Client </h3>
          <p>
            My focus right now is working on <a href={`${githubClient}`}>github_client-ruby</a> — an open-source GitHub api wrapper for ruby applications. I want to make the gem as simple as possible for 
            developers to use and understand.
          </p>
          <p>
            I started this project because I want to be more proficient in developing open-source libraries. It also gives
            me the responsibility to keep myself updated of changes in the API.
          </p>
          <p>
            As a maintainer you get to experience another side of programming. You don't write code for yourself anymore 
            but you also start to think about the stuffs that you can contribute to the whole ecosystem.
          </p>
          <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}></div>
        </div>

        <div>
          <h3 style={{fontWeight: 'bold'}}> Crypto Contributors </h3>
          <p>
            This website lists the people who made significant contributions to crypto or more specifically, the 
            software that empowers them.
          </p>
          <p>
            <a href={`${cryptoContributors}`}> visit website </a>
          </p>
          <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}></div>
        </div>

        <div>
          <h3 style={{fontWeight: 'bold'}}> Bitcoin Price Index </h3>
          <p>
            This website shows the current price of bitcoin against different currencies.
          </p>
          <p>
            <a href={`${bitcoinIndex}`}> visit website </a>
          </p>
          <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}></div>
        </div>

        <div>
          <h3 style={{fontWeight: 'bold'}}> Yet Another Movie Database App </h3>
          <p>
            Shows a listing of movies and films by categories. You can browse popular, top rated and upcoming 
            films.
          </p>
          <p>
            <a href={`${yamda}`}> visit website </a>
          </p>
          <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}></div>
        </div>

        <div>
          <h3 style={{fontWeight: 'bold'}}> Youtube Downloader </h3>
          <p>
            I developed this website because of my own personal need. This website helps my girlfriend's father to download 
            songs or videos from his Android device.
          </p>
          <p>
            <a href={`${ytDownloader}`}> visit website </a>
          </p>
          <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}></div>
        </div>

        <p style={{marginTop: rhythm(2)}}> 
          You can check most of my projects on <a href={`${githubUrl}`}>GitHub</a>. 
        </p>
      </div>
    )
  }
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
        githubUrl
        projects {
          github_client
          crypto_contributors
          bitcoin_index
          yamda
          yt_downloader
        }
      }
    }
  }
`