import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      display: 'flex'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
   >
     <h1 style={{margin: 0, textAlign: 'center',fontSize: '18px'}}>
        <Link
          style={{
            color: 'black',
            textDecoration: 'none',
          }}

          onClick={() => window.open("http://azbo400.github.io")}
        >
          Ryan A
        </Link>
      </h1>
    </div>
  </div>
);

export default Header
