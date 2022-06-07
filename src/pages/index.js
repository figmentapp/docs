import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function OldHomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row align-center">
          <div className="col col-6 text-left">
            <h1 className="text-2xl">
              Figment makes creative AI{" "}
              <span className={styles.orange}>fun</span> and{" "}
              <span className={styles.orange}>accessible</span>.
            </h1>
            <p className="text-lg max-w-40">
              It gives you the power to experiment and play with the latest
              tools without getting wrapped up in coding.
            </p>
            <div className="cta__wrapper">
              <a className="cta__button" href="/download/">
                Download Figment
              </a>
            </div>
          </div>
          <div className="col col-6">
            <img
              src="/img/homepage/figment-screenshot-hero.png"
              alt="Screenshot of the Figment app"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatureVisualToolkit() {
  return (
    <section className="homepage__feature section-light">
      <div className="container">
        <div className="row align-center">
          <div className="col col-6">
            <img
              src="/img/homepage/figment-screenshot-lookup.png"
              alt="Screenshot of the Figment app showing the lookup node"
            />
          </div>
          <div className="col col-6">
            <h2 class="text-2xl">A visual toolkit for images</h2>
            <p className="text-lg">
              Load, transform and manipulate images using an intuitive visual
              interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatureMachineLearning() {
  return (
    <section className="homepage__feature section-light">
      <div className="container">
        <div className="row align-center">
          <div className="col col-6">
            <h2 class="text-2xl">Machine Learning built in</h2>
            <p className="text-lg">
              Load, transform and manipulate images using an intuitive visual
              interface.
            </p>
          </div>
          <div className="col col-6">
            <img
              src="/img/homepage/figment-screenshot-ml.png"
              alt="Screenshot of the Figment app demonstrating face detection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatureFast() {
  return (
    <section className="homepage__feature section-light">
      <div className="container">
        <div className="row align-center">
          <div className="col col-6 text-center">
            <img
              class="image-w50"
              src="/img/homepage/logos.svg"
              alt="Screenshot of the Figment app demonstrating face detection"
            />
          </div>
          <div className="col col-6">
            <h2 class="text-2xl">Fast in many ways</h2>
            <p className="text-lg">
              Not only is Figment easy to get started, but all functionality is
              built as hardware accelerated image filters, fully utilizing the
              power of the graphics card for realtime processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Figment" description="Visual toolkit for creative AI">
      <HomepageHeader />
      <main>
        <HomepageFeatureVisualToolkit />
        <HomepageFeatureMachineLearning />
        <HomepageFeatureFast />
      </main>
    </Layout>
  );
}
