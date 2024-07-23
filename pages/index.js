import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a software developer mastering JavaScript and Python, specializing
          in spatial technology with PostGIS, GDAL, etc. I excel at managing
          terabytes of spatial data and complex operations. With expertise in
          AWS and GCP, I create scalable, cloud-based solutions.
        </p>
        <p>
          Interested in collaborating on innovative projects? Let's{" "}
          <a href="https://linkedin.com/in/hermawanwiwit/">connect!</a>
        </p>
      </section>
    </Layout>
  );
}
