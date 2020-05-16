import React, { useContext } from 'react';

import styles from './Buy.module.scss';

import book from 'assets/img/svg/book.svg';
import kindle from 'assets/img/svg/kindle.svg';
import pdf from 'assets/img/svg/pdf.svg';
import tablet from 'assets/img/svg/tablet.svg';

import { Card } from 'interfaces/.components/Card';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Buy = () => {
  const messages = useContext(MessagesContext);

  const showItems = [
    { title: messages.es['optionPaper'], subtitle: messages.es['more'], photo: <img src={book} />, id: 1 },
    { title: 'Versión EBOOK', subtitle: 'Saber más', photo: <img src={tablet} />, id: 2 },
    { title: messages.es['optionPdf'], subtitle: messages.es['more'], photo: <img src={pdf} />, id: 3 },
    { title: messages.es['optionKindle'], subtitle: messages.es['more'], photo: <img src={kindle} />, id: 4 }
  ];

  const renderLayout = children => (
    <SectionLayout id="buy" title={messages.es['buyIt']} subtitle={messages.es['buyIt']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.buy}>
      {showItems.map(card => (
        <Card key={card.id} title={card.title} subtitle={card.subtitle} toolbar={card.photo} className="buy" />
      ))}
    </div>
  );
};
