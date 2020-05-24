import React, { useContext } from 'react';

import styles from './Author.module.scss';

import author from 'assets/img/author/author.jpg';
import illustration from 'assets/img/svg/profesora.svg';

import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Author = () => {
  const messages = useContext(MessagesContext);

  const renderLayout = children => (
    <SectionLayout className="author" id="author" title={messages.es['aboutAuthor']} subtitle={messages.es['aboutAuthor']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.authorWrap}>
      <div className={styles.author}>
        <img className={styles.img} src={author} alt="" />
        <div className={styles.description}>
          <h3 className={styles.title}>{messages.es['authorName']}</h3>
          <div className={styles.text}>{messages.es['authorParagraph']}</div>
        </div>
      </div>
      <img src={illustration} alt="" />
    </div>
  );
};
