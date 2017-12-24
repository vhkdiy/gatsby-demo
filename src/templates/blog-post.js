import React from 'react'

export default ({ pathContext }) => {
    const { slug } = pathContext
    return (
        <div>
            模版文件 {slug}
        </div>
    )
}