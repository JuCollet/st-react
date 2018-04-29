import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/styles.less';
import Button from '../../../../../../components/Button/Button';

/* eslint react/prop-types: 0 */
const Section1 = ({ history }) => (
  <section className="section1">
    <div className="section-content">
      <article className="section-content-left">
        <h1>Recevoir des paiements n’a jamais été aussi simple.</h1>
        <p>En quelques clics, ouvrez gratuitement un compte
         et commencez à recevoir vos paiements.
        </p>
        <Button title="Créer un compte" clickHandler={() => history.push('/app/stats')} />
      </article>
      <aside className="section-content-right">
        <div className="section1-art" title="L'application est intuitive et simple à utiliser." />
      </aside>
    </div>
  </section>
);

export default withRouter(Section1);
