import React from 'react';
import './styles/styles.less';
import feature1 from '../../../../../../img/feature1.svg';
import feature2 from '../../../../../../img/feature2.svg';
import feature3 from '../../../../../../img/feature3.svg';
import feature4 from '../../../../../../img/feature4.svg';
import Button from '../../../../../../components/Button/Button';


const features = [
  {
    image: feature1,
    alt: 'alt',
    title: 'Statistiques',
    title2: 'détaillées',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: feature2,
    alt: 'alt',
    title: 'Outils de',
    title2: 'calcul avancés',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: feature3,
    alt: 'alt',
    title: 'Réception de',
    title2: 'paiements',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
  {
    image: feature4,
    alt: 'alt',
    title: 'Sécurité à',
    title2: 'toute épreuve',
    description: 'Lorem ipsum dolor amet try-hard coloring book street art VHS celiac locavore.',
    link: 'link',
    btn: 'En savoir plus',
  },
];

const featuresRender = () => (
  features.map(feature => (
    <li className="feature" key={feature.title}>
      <img src={feature.image} alt={feature.alt} />
      <span className="feature-title">{feature.title}<br />{feature.title2}</span>
      <span className="feature-description">{feature.description}</span>
      <Button title={feature.btn} color="outline" size="sm" />
    </li>
  ))
);

const Section2 = () => (
  <section className="section2">
    <div className="section2-background" />
    <div className="section-content">
      <article className="section-content-left">
        <h1 className="font-white">Gardez le contrôle.</h1>
        <p className="font-white">Où que vous soyez, configurez votre compte
        en un tour de main et bénéficiez d’outils performants
        pour gérer vos revenus et vos dépenses.
        </p>
      </article>
    </div>
    <div className="section-content">
      <ul className="features-list">
        {featuresRender()}
      </ul>
    </div>
  </section>
);

export default Section2;
