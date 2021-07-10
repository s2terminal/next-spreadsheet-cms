import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { getContents } from '../lib/spreadsheet';
import { Content } from '../lib/content';

export default function Home({ contents }: { contents: Content[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Spreadsheet CMS</title>
        <meta name="description" content="Next.js Spreadsheet CMS" />
      </Head>

      <main>
        { contents.map(content => {
          return <>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
          </>;
        }) }
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const contents = await getContents();
  return {
    props: { contents },
    revalidate: 3600,
  };
}
