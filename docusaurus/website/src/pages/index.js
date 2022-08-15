/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Target Audience',
    content:
      "This course is aimed at MSc and PhD level students in computer science / data science.",
  },
  {
    title: 'For Non-CS/DS Students',
    content:
      'Please contact Rosemary Amico (amico at cs.nyu.edu)',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Set up a modern web app by running one command.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <video
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            autostart autoPlay loop muted
            alt="ML"
            src={useBaseUrl('img/ML.mp4')}
            type="video/mp4" 
          />
          <video
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            autostart autoPlay loop muted
            alt="DL"
            src={useBaseUrl('img/DL.mp4')}
            type="video/mp4" 
          />
          <video
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            autostart autoPlay loop muted
            alt="RL"
            src={useBaseUrl('img/RL.mp4')}
            type="video/mp4" 
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/logistics')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h2>
                Overview
              </h2>
              <p>
              As data and computational resources become ever more abundant, the ability to leverage both to gain insights take on an increasingly important role in our civilization. “Machine Learning” is an umbrella term for the algorithms, tools and approaches that promise to harness data in such a way. This class is a survey course intended to give an overview of all major flavors of Machine Learning. Importantly, we will place a particular emphasis on understanding the key algorithms employed in different subfields of Machine Learning, instead of treating them as a black box. Overall, the goal of this course is to enable students to become comfortable with the material to a point where they can pursue the study of more advanced topics in Machine Learning as well as employing Machine Learning methods to solve scientific and applied problems. In other words, the purpose of this class is to find out if Machine Learning is for you or not - and if it is, to enable you to pursue it further with confidence and competence. 
              </p>
              <p>
              This class is modeled on previous offerings from Spring 2022 and Fall 2021. Building on the traditions of these previous offerings, this version of the class will place a larger emphasis on practical, hands-on experience with building ML algorithms. To broaded the scope of this offering, we will add lectures on self-supervised learning and reinforcement learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <h2>
            Staff
          </h2>
          <div className="row">
            <div className="col col--2">
              <h3>
                <a href="https://www.lerrelpinto.com/">Lerrel Pinto</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Lerrel Pinto"
                src={useBaseUrl('img/lerrel.jpeg')}
              />
              <p>Instructor</p>
            </div>
            <div className="col col--2 col--offset-0.5">
            <h3>
                <a href="https://siddhanthaldar.github.io/">Siddhant Haldar</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Siddhant Haldar"
                src={useBaseUrl('img/siddhant.jpg')}
              />
              <p>Teaching Assistant</p>
            </div>
            <div className="col col--2 col--offset-0.5">
            <h3>
                <a href="something">Jeff Cui</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Jeff Cui"
                src={useBaseUrl('img/jeff.jpg')}
              />
              <p>Grader</p>
            </div>
            <div className="col col--2 col--offset-0.5">
            <h3>
                <a href="something">Irmak Guzey</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Irmak Guzey"
                src={useBaseUrl('img/irmak.jpeg')}
              />
              <p>Grader</p>
            </div>
            <div className="col col--2 col--offset-0.5">
            <h3>
                <a href="something">Anant Rai</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Anant Rai"
                src={useBaseUrl('img/mahi.jpeg')}
              />
              <p>Grader</p>
            </div>
            <div className="col col--2 col--offset-0.5">
            <h3>
                <a href="something">Aakanksha</a>
              </h3>
              <img
                className={styles.featureImage}
                alt="Aakanksha"
                src={useBaseUrl('img/mahi.jpeg')}
              />
              <p>Grader</p>
            </div>
          </div>
        </div>
      </div>
      {/* {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={clsx('col col--6', styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
      {/* <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Get started in seconds</h2>
              <p>
                Whether you’re using React or another library, Create React App
                lets you <strong>focus on code, not build tools</strong>.
                <br />
                <br />
                To create a project called <i>my-app</i>, run this command:
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Easy to Maintain</h2>
              <p>
                Updating your build tooling is typically a daunting and
                time-consuming task. When new versions of Create React App are
                released, you can upgrade using a single command:
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Home;
