import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Connect everything',
    img: '/img/screen1.jpg',
    description: (
      <>
        Siesta AI connects your assistants to 100+ tools and data sources — enabling seamless automation across your workflows, without switching platforms.
      </>
    ),
  },
  {
    title: 'Empower team with AI',
    img: '/img/screen2.jpg',
    description: (
      <>
        "AI assistants amplify your team's capabilities — boosting productivity, supporting better decisions, and freeing people to focus on strategic work.

      </>
    ),
  },
  {
    title: 'Measure & improve',
    img: '/img/screen3.jpg', 
    description: (
      <>
        Track how your AI performs, collect feedback, and create better assistants — all based on real usage, team needs, and evolving knowledge.

      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
