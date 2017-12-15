import React from "react"
import Container from "../components/container";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Container>
            <div>
                <h3>{ post.frontmatter.title }</h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
        </Container>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
            }
        }
    }
`;