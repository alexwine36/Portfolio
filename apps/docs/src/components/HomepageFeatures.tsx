import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/Portfolio/img/undraw_cloud_docs.svg',
    description: (
      <>
        Portfolio designed for simple edits and updates.
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: '/Portfolio/img/undraw_resume.svg',
    description: (
      <>
        Automatically generated checked and deployed through monorepo and CI/CD
        actions.
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   image: '/Portfolio/img/undraw_docusaurus_react.svg',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
