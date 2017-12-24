import React from 'react'

export default ({ data }) => {
    const { html } = data.markdownRemark
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export const pageQuery = graphql`
    query BlogPostQuery {
        markdownRemark {
            html
        }
    }
`