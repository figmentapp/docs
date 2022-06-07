import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function DownloadHeader() {
  const platform = window.navigator.platform;
  let platformName;
  let version = "0.3.8";
  let downloadUrl;
  if (platform === "MacIntel") {
    platformName = "Mac";
    downloadUrl = `https://figmentapp.s3.amazonaws.com/releases/Figment-${version}-universal.dmg`;
  } else if (platform.startsWith("Win")) {
    platformName = "Windows";
    downloadUrl = `https://figmentapp.s3.amazonaws.com/releases/Figment%20Setup%20${version}.exe`;
  } else if (platform.startsWith("Linux")) {
    platformName = "Linux";
    downloadUrl = `https://figmentapp.s3.amazonaws.com/releases/Figment-${version}-x86_64.AppImage`;
  }

  return (
    <header className="hero hero--primary">
      <div className="container text-center">
        <h1 className="text-2xl">Download Figment</h1>
        <div className="download__wrapper">
          <a className="download__button" href={downloadUrl}>
            Download Figment for {platformName}
          </a>
        </div>
        <p className="text-sm">
          Version {version} —{" "}
          <a className="color-reverse" href="/release-notes">
            What's New
          </a>
        </p>
      </div>
    </header>
  );
}

function NextSteps() {
  return (
    <section className="container text-center py-5">
      <h2 className="text-2xl">Next Steps</h2>
      <p>
        Thanks for downloading Figment! Here are some things you can do next:
      </p>
      <div className="row tiles">
        <div className="col col-4 tile">
          <h3 className="text-lg">Follow the tutorial</h3>
          <p className="text-sm">
            Learn how to use Figment to create, share, and collaborate on
            projects.
          </p>
          <a className="button button--primary" href="/docs/tutorials">
            Getting Started
          </a>
        </div>
        <div className="col col-4 tile">
          <h3 className="text-lg">Download example projects</h3>
          <p className="text-sm">
            We've created some example projects showing some of the features of
            Figment.
          </p>
          <a
            className="button button--primary"
            href="https://figmentapp.s3.amazonaws.com/examples/figment-examples-2022-02-24.zip"
          >
            Download projects
          </a>
        </div>
        <div className="col col-4 tile">
          <h3 className="text-lg">PIX2PIX Deep Dive</h3>
          <p className="text-sm">
            Watch a YouTube introduction into Figment and PIX2PIX with
            Paperspace.
          </p>
          <a
            className="button button--primary"
            href="https://www.youtube.com/embed/J4mnzP7nP0Y"
          >
            YouTube Tutorial
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Download() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Download" description="Download Figment">
      <DownloadHeader />
      <NextSteps />
    </Layout>
  );
}
