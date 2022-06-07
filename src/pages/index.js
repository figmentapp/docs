import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Mailchimp from "../components/Mailchimp";
import styles from "./index.module.css";

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

function FeatureVisualToolkit() {
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

function FeatureMachineLearning() {
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

function FeatureFast() {
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

function AlgorithmicGaze() {
  return (
    <section className="homepage__feature section-dark">
      <div className="container flex flex-col items-center">
        <figure className="mb-5">
          <img
            src="/img/homepage/hunger-of-the-pine-cover.jpeg"
            alt="Hunger of the Pine project"
          />
          <figcaption>
            Hunger of the Pine. Kristof Vrancken and Lieven Menschaert (2021)
          </figcaption>
        </figure>
        <p className="text-lg max-w-40 text-center">
          Figment is developed as part of{" "}
          <a
            class="color-reverse"
            href="https://algorithmicgaze.com"
            target="_blank"
          >
            The Algorithmic Gaze
          </a>
          , a research project exploring the impact of AI through interesting
          projects and democratizing the tools of machine learning.
        </p>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="homepage__feature section-light">
      <div className="container flex flex-col items-center">
        <p className="text-lg max-w-40 text-center">
          Sign up for the Figment mailing list to get all the latest news about
          our software and other projects.
        </p>
        <Mailchimp
          action="https://figmentapp.us19.list-manage.com/subscribe/post?u=baf8a54a2a72cf8040e710a96&amp;id=9d18a1a553"
          className="mailchimp"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
        />
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
        <FeatureVisualToolkit />
        <FeatureMachineLearning />
        <FeatureFast />
        <AlgorithmicGaze />
        <Newsletter />
      </main>
    </Layout>
  );
}
