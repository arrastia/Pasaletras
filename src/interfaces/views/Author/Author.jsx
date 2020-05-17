import React, { useContext } from 'react';

import styles from './Author.module.scss';

import author from 'assets/img/author/author.jpg';

import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Author = () => {
  const messages = useContext(MessagesContext);

  const renderLayout = children => (
    <SectionLayout id="author" title={messages.es['aboutAuthor']} subtitle={messages.es['aboutAuthor']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.author}>
      <img className={styles.img} src={author} alt="" />
      <h3 className={styles.title}>José Luis Sánchez Melgarejo</h3>
      <div className={styles.text}>{messages.es['authorParagraph']}</div>
    </div>
  );
};
