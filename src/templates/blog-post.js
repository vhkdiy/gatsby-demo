import React from 'react'
import Link from "gatsby-link"
import styled from "styled-components"

export default ({ data, pathContext }) => {
    const post = data.markdownRemark
    const { next, prev } = pathContext
    return (
        <Wrap>
            <div className='markdown-content'
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Nav>
                <div>
                    {
                        prev &&
                        <Link to={prev}>Prev</Link>
                    }
                </div>
                <div>
                    {
                        next &&
                        <Link to={next}>Next</Link>
                    }
                </div>
            </Nav>
        </Wrap>
    )
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
        }
    }
`

const Nav = styled.div`
  background: #00bcd4;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  a {
        color: white;
    display: block;
    padding: 10px;
  }
`

const Wrap = styled.div`
  height: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  .markdown-content {
    padding: 20px;
    flex-grow: 1;
  }
`