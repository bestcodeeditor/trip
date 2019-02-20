import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "gatsby-image";
import SEO from "../components/seo";

export const qurey = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Trip Blogger</h1>
    <ul>
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li key={project.slug.current}>
          <h2>{project.title}</h2>
          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
