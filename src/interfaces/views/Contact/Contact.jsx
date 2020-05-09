import React from 'react';

import { RiMailSendLine } from 'react-icons/ri';
import { GrPowerReset } from 'react-icons/gr';

import styles from './Contact.module.scss';

import { InputText } from './.components/InputText';
import { SectionLayout } from 'interfaces/.components/SectionLayout';
import { Button } from 'interfaces/.components/Button';

import { ReactUtils } from 'interfaces/.tools/Utils/ReactUtils';

export const Contact = () => {
  const layout = children => (
    <SectionLayout id="contact" title="contact" subtitle="Escribemos bb">
      {children}
    </SectionLayout>
  );

  const data = [
    { label: 'name', id: ReactUtils.uuid(), type: 'search' },
    { label: 'email', id: ReactUtils.uuid(), type: 'search' },
    { label: 'asunto', id: ReactUtils.uuid(), type: 'search' },
    { label: 'message', id: ReactUtils.uuid(), type: 'textarea' }
  ];

  return layout(
    <div className={styles.contact}>
      {data.map(item => (
        <span className={`p-float-label`} style={{ marginBottom: '2rem' }}>
          <InputText id={item.id} type={item.type} />
          <label htmlFor={item.id}>{item.label}</label>
        </span>
      ))}
      <div className={styles.buttons}>
        <Button label="enviar">
          <RiMailSendLine />
        </Button>
        <Button label="reset">
          <GrPowerReset />
        </Button>
      </div>
    </div>
  );
};
