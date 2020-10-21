import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData, getAllUsers} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData, users }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hi, all! I am Dima, and I am java sofware enginer</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>

              <ul className={utilStyles.list}>
                  {users.map(({ userId, firstName, lastName }) => (
                      <li className={utilStyles.listItem} key={userId}>
                          <p>{userId }. { firstName } { lastName};</p>

                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const users = await getAllUsers()
    return {
        props: {
            allPostsData,
            users
        }
    }
}

// export async function getStaticPaths() {
//     const users = getAllUsers()
//     return {
//         users,
//         fallback: false
//     }
// }