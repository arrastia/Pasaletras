import React, { useContext } from 'react';

import styles from './Free.module.scss';

import { Card } from 'interfaces/.components/Card';
import { Download } from './.components/Download';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

const showItems = [
  { title: 'TEMA 1', subtitle: 'ESPAÑA, ASPECTOS GENERALES', id: 1, toolbar: <Download /> },
  { title: 'TRANSCRIPCIONES', subtitle: 'Descarga las transcripciones', id: 2, toolbar: <Download /> },
  { title: 'SOLUCIONARIO', subtitle: 'Descarga el solucionario', id: 3, toolbar: <Download /> },
  { title: 'GLOSARIO', subtitle: 'Descarga el glosario', id: 4, toolbar: <Download /> }
];

export const Free = () => {
  const messages = useContext(MessagesContext);

  const breakpoints = useBreakpoint();

  const renderLayout = children => (
    <SectionLayout id="free" title={messages.es['freeSample']} subtitle={messages.es['freeSample']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.free}>
      {showItems.map(card => (
        <Card
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          className="download"
          toolbar={card.toolbar}
          style={{ width: breakpoints.tablet ? '100%' : '' }}
        />
      ))}
    </div>
  );
};
