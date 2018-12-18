import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Container from "../components/container";

const BlogWrapper = styled.div`
    margin: .5rem 0;
    &:last-child {
        border-bottom: 1px solid black;
        margin-bottom: 0;
        padding-bottom: 3rem
    }
`;

const Title = styled.h3`
    padding:0;
    margin
`;

const Date = styled.span`
    
`;

const Excerpt = styled.div`
    margin: .5rem 0;
`;

const BlogPost = props => (
    <BlogWrapper>
        <Link to={ props.to }>
            <Title>{ props.title }</Title>
        </Link>
        <Excerpt>{ props.excerpt }</Excerpt>
        <Date>{ props.date }</Date>
    </BlogWrapper>
);

export default ({ data }) => (
    <Container>
        <p>A <em>very</em> rudimentary "Today I Learned" log with { data.allMarkdownRemark.totalCount } posts to date.</p>

        {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogPost key={ node.id }
                title={ node.frontmatter.title }
                excerpt={ node.excerpt }
                to={ node.fields.slug }
                date={ node.frontmatter.date }
            />
        ))}

        

        {/* <BlogPost 
            title="Testing 2"
            excerpt="This is the excerpt!"
        /> */}

    </Container>
);

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD/MM/YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
