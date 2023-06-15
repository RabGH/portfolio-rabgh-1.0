import React from 'react'
import Link from 'next/link'

function Custom500() {
  return (
    <div className="container">
      <h1>500 - Server-side error occurred</h1>
      <p>Sorry, something went wrong while loading this page.</p>
      <p>Please try refreshing the page or go back to the home page.</p>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  )
}

export default Custom500