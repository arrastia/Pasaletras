import React from 'react';

import styles from './Buy.module.scss';

import book from 'assets/img/book.svg';
import kindle from 'assets/img/kindle.svg';
import pdf from 'assets/img/pdf.svg';
import tablet from 'assets/img/tablet.svg';

import { Card } from 'interfaces/.components/Card';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

const showItems = [
  { title: 'Versión PAPEL', subtitle: 'Saber más', photo: <img src={book} />, id: 1 },
  { title: 'Versión EBOOK', subtitle: 'Saber más', photo: <img src={tablet} />, id: 2 },
  { title: 'Versión PDF', subtitle: 'Saber más', photo: <img src={pdf} />, id: 3 },
  { title: 'Versión KINDLE', subtitle: 'Saber más', photo: <img src={kindle} />, id: 4 }
];

export const Buy = () => {
  const layout = children => (
    <SectionLayout id="buy" title="CÓMPRALO" subtitle="CÓMPRALO">
      {children}
    </SectionLayout>
  );

  return layout(
    <div className={styles.buy}>
      {showItems.map(card => (
        <Card key={card.id} title={card.title} subtitle={card.subtitle} toolbar={card.photo} className="buy" />
      ))}
    </div>
  );
};
