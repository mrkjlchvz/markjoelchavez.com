import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class UsesPage extends React.Component {

  render() {
    const siteTitle = `Uses - ${get(this, 'props.data.site.siteMetadata.title')}`

    return (
      <div>
        <Helmet title={siteTitle} />

        <h3 style={{fontWeight: 'bold'}}> Hardware </h3>
        <ul>
          <li> I have my iPhone XR for everyday use. This phone is supeeer reliable! </li>
          <li> My daily laptop is a 2019 MacBook Pro 16" with 16GB of RAM and a whooping 1TB of SSD storage. </li>
          <li> I use <a href="https://nexstand.eu/products/nexstand-k2">NEXSTAND</a> adjustable stand for my laptop. I bring this wherever I go! </li>
          <li> I type on a <a href="https://www.amazon.com/Logitech-K380-Multi-Device-Bluetooth-Keyboard/dp/B0148NPH9I">K380 Logitech Keyboard</a> which I find to be surprisingly durable and fun to use. </li>
          <li> I use <a href="https://www.amazon.com/Logitech-Master-Wireless-Mouse-High-precision/dp/B00TZR3WRM">Logitech MX Master</a> for all things (e.g. gaming, coding, etc) </li>
          <li> <a href="https://www.amazon.com/Ricoh-GR-II-Digital-Camera/dp/B00ZY9JJEU">Ricoh GR II</a> for photography. I mostly do street check out my <a href="https://www.instagram.com/_markandwhite/">photos</a>! </li>
        </ul>

        <h3 style={{fontWeight: 'bold'}}> Software </h3>
        <ul>
          <li> <a href="https://qsapp.com/">Quicksilver</a> for mapping my keyboard keys to apps. </li>
          <li> <a href="https://1password.com">1Password</a> for storing my secure notes and passwords! </li>
          <li> <a href="https://www.youneedabudget.com">YNAB</a> for managing my expenses and savings. </li>
          <li> <a href="https://www.notion.so">Notion</a> for daily notes and getting things done! </li>
          <li> <a href="https://www.tunnelbear.com">TunnelBear</a> for VPN </li>
        </ul>
      </div>
    )
  }

}

export default UsesPage

export const usesPageQuery = graphql`
  query usesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
