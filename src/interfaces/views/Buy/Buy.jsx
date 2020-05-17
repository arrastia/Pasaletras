import React, { useContext } from 'react';

import styles from './Buy.module.scss';

import book from 'assets/img/svg/book.svg';
import kindle from 'assets/img/svg/kindle.svg';
import pdf from 'assets/img/svg/pdf.svg';

import { Card } from './.components/Card';
import { Download } from './.components/Download';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Buy = () => {
  const messages = useContext(MessagesContext);

  const showItems = [
    { className: 'downloadLink', title: 'PRUEBA GRATUITA', subtitle: 'Descarga una prueba gratuita', photo: <Download />, id: 0 },
    { className: '', title: messages.es['optionPaper'], subtitle: messages.es['more'], photo: <img src={book} />, id: 1 },
    { className: '', title: messages.es['optionPdf'], subtitle: messages.es['more'], photo: <img src={pdf} />, id: 2 },
    { className: '', title: messages.es['optionKindle'], subtitle: messages.es['more'], photo: <img src={kindle} />, id: 3 }
  ];

  const renderLayout = children => (
    <SectionLayout id="buy" title={messages.es['buyIt']} subtitle={messages.es['buyIt']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.buy}>
      {showItems.map(card => (
        <Card
          className={'download'}
          iconClassName={card.className}
          key={card.id}
          subtitle={card.subtitle}
          title={card.title}
          toolbar={card.photo}
        />
      ))}
    </div>
  );
};
