/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// Favicons
import favicon from "../images/favicon.ico";
import safariPinnedTab from "../images/safari-pinned-tab.svg";
import favicon32 from "../images/favicon-32x32.png";
import favicon16 from "../images/favicon-16x16.png";
import appleTouchIcon from "../images/apple-touch-icon.png";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            town {
              name
              tagLine
            }
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.town.tagLine;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.town.name}`}
      link={[
        // favicons
        { rel: "icon", href: favicon },
        { rel: "mask-icon", href: safariPinnedTab, color: "#0066CC" },
        { rel: "icon", sizes: "32x32", type: "image/png", href: favicon32 },
        { rel: "icon", sizes: "16x16", type: "image/png", href: favicon16 },
        { rel: "apple-touch-icon", href: appleTouchIcon },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // Facebook
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `website`,
        },
        // Twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
