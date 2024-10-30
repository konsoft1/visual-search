import Link from 'next/link'
import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const data = await payload.find({
    collection: 'users',
  })
  return (
    <>
      <main>
        <article>
          <h1>Visual Search</h1>{' '}
          <p>
            This is visual search site.{' '}
            <Link href="/visual-search">
              Go to visual search.
            </Link>
          </p>
        </article>
      </main>
    </>
  )
}

export default Page