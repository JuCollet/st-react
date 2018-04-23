import React from 'react';
import './styles/styles.less';
import Button from '../../../../../../components/Button/Button';

const Section1 = () => (
  <section className="section1">
    <div className="section-content">
      <article className="section-content-left">
        <h1>Recevoir des paiements n’a jamais été aussi simple.</h1>
        <p>En quelques clics, ouvrez gratuitement un compte
         et commencez à recevoir vos paiements.
        </p>
        <Button title="Créer un compte" />
      </article>
      <aside className="section-content-right">
        <div className="section1-art" title="L'application est intuitive et simple à utiliser." />
      </aside>
    </div>
  </section>
);

export default Section1;
