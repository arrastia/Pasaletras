import React, { useContext } from 'react';

import book from 'assets/img/svg/icons/book.svg';
import estudiante from 'assets/img/svg/estudiante.svg';
import kindle from 'assets/img/svg/icons/kindle.svg';
import pdf from 'assets/img/svg/icons/pdf.svg';

import styles from './Buy.module.scss';

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
    {
      id: 1,
      photo: <img alt="ilustración" src={book} />,
      subtitle: messages.es['more'],
      title: messages.es['optionPaper']
    },
    {
      id: 2,
      photo: <img alt="ilustración" src={pdf} />,
      subtitle: messages.es['more'],
      title: messages.es['optionPdf']
    },
    {
      id: 3,
      photo: <img alt="ilustración" src={kindle} />,
      subtitle: messages.es['more'],
      title: messages.es['optionKindle']
    }
  ];

  const renderLayout = children => (
    <SectionLayout className="buy" id="buy" title={messages.es['buyIt']} subtitle={messages.es['buyIt']}>
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
      <img src={estudiante} alt="Illustration" />
    </div>
  );
};
