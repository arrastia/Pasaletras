import React from 'react';

import styles from './Author.module.scss';

import { GrLinkedin, GrLinkedinOption } from 'react-icons/gr';

import author from 'assets/img/author2.jpg';

import { SectionLayout } from 'interfaces/.components/SectionLayout';

export const Author = () => {
  const layout = children => (
    <SectionLayout id="author" title="sobre el autor" subtitle="SOBRE EL autor">
      {children}
    </SectionLayout>
  );

  return layout(
    <div className={styles.author}>
      <img className={styles.img} src={author} alt="" />
      <h3 className={styles.title}>José Luis Sánchez Melgarejo</h3>
      <div className={styles.text}>
        <p>Trabaja como profesor de español en la Universidad de Seattle en Bratislava.</p>
        <p>Colabora esporádicamente con el Aula Cervantes de Bratislava y es examinador oficial de los exámenes DELE.</p>
        <p>
          Aunque durante sus estudios universitarios se especializó en formación de profesorado de español como lengua extranjera y en
          lingüística aplicada a la enseñanza de español como lengua extranjera, su verdadera pasión y donde centra actualmente la mayoría
          de sus investigaciones es en la enseñanza del español en línea.
        </p>
      </div>
      <a className={styles.btn} href={'item.url'} rel="noopener noreferrer" target="_blank" title={'item.name'}>
        <GrLinkedinOption className={styles.svg} />
      </a>
    </div>
  );
};
