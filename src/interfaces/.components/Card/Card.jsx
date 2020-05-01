import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import styles from './Card.module.scss';

export const Card = ({ date, icon, id, obligation, subtitle, title, photo }) => {
  return (
    <ThemeProvider theme={{ photo }}>
      <CardWrap>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={`${styles.link}`}>
          <span className={styles.linkIcon} />
        </div>

        <div className={`${styles.date}`}>
          date: <span className={styles.dueDate}>{date}</span>
        </div>
      </CardWrap>
    </ThemeProvider>
  );
};

const CardWrap = styled.div`
  background: var(--card-item-bg);
  border-radius: 15px;
  box-shadow: var(--card-item-box-shadow);
  column-gap: 1.5rem;
  cursor: pointer;
  display: grid;
  grid-template-columns: 85% calc(15% - 1.5rem);
  grid-template-rows: 70% calc(30% - 1rem);
  height: 150px;
  margin: 0.5rem;
  width: 300px;
  padding: 1rem;
  position: relative;
  row-gap: 1rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: var(--card-item-box-shadow-hover);
    transform: scale(1.02, 1.02);
    transition: transform 0.1s ease;
  }

  &::before {
    background-image: url(${props => props.theme.photo}) !important;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: 50%;
    border-radius: 15px;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;
