import React from 'react'
import Link from 'gatsby-link'
import '../assets/global.css'
import styled from 'styled-components'

export default ({ children }) => {
    return (
        <div>
            <Header>
                <Link to='/'>首页</Link> &nbsp;
                <Link to='/about'>关于</Link>
            </Header>
            {children()}
        </div>
    )
}

const Header = styled.div`
    line-height: 40px;
    padding: 10px;
    background: #00bcd4;
    a {
        color: white;
    }
`