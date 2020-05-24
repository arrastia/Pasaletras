import React, { useContext } from 'react';

import styles from './Buy.module.scss';

import book from 'assets/img/svg/icons/book.svg';
import kindle from 'assets/img/svg/icons/kindle.svg';
import pdf from 'assets/img/svg/icons/pdf.svg';
import estudiante from 'assets/img/svg/estudiante.svg';

import { Card } from './.components/Card';
import { Download } from './.components/Download';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Buy = () => {
  const messages = useContext(MessagesContext);

  const showItems = [
    {
      className: 'download',
      iconClassName: 'downloadLink',
      id: 0,
      photo: <Download />,
      subtitle: messages.es['downloadNow'],
      title: messages.es['freeSample']
    },
    { title: messages.es['optionPaper'], subtitle: messages.es['more'], photo: <img src={book} />, id: 1 },
    { title: messages.es['optionPdf'], subtitle: messages.es['more'], photo: <img src={pdf} />, id: 2 },
    { title: messages.es['optionKindle'], subtitle: messages.es['more'], photo: <img src={kindle} />, id: 3 }
  ];

  const renderLayout = children => (
    <SectionLayout id="buy" title={messages.es['buyIt']} subtitle={messages.es['buyIt']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.buyWrap}>
      <div className={styles.buy}>
        {showItems.map(card => (
          <Card
            className={card.className}
            iconClassName={card.iconClassName}
            key={card.id}
            subtitle={card.subtitle}
            title={card.title}
            toolbar={card.photo}
          />
        ))}
      </div>
      <img src={estudiante} alt="ilustración" />
    </div>
  );
};
