import React, { Fragment } from 'react';

import { RiMailSendLine } from 'react-icons/ri';
import { GrPowerReset } from 'react-icons/gr';
import { MdSubject } from 'react-icons/md';
import { RiLayoutTop2Line, RiMailLine, RiPencilLine, RiUserLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

import styles from './Contact.module.scss';

import { InputText } from './.components/InputText';
import { InputTextarea } from './.components/InputTextarea';
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
    { label: 'name', id: ReactUtils.uuid(), type: 'search', icon: <FiUser /> },
    { label: 'email', id: ReactUtils.uuid(), type: 'search', icon: <RiMailLine /> },
    { label: 'asunto', id: ReactUtils.uuid(), type: 'search', icon: <RiPencilLine /> }
  ];

  return layout(
    <div className={styles.contact}>
      {data.map(item => (
        <div className={styles.input}>
          <span className={styles.icon}>{item.icon}</span>
          <span className={`p-float-label`}>
            <InputText id={item.id} type={item.type} />
            <label htmlFor={item.id}>{item.label}</label>
          </span>
        </div>
      ))}
      <span className={`p-float-label`}>
        <InputTextarea rows={3} cols={30} autoResize={true}></InputTextarea>
        <label htmlFor={777}>Message</label>
      </span>
      <div className={styles.buttons}>
        <Button label="enviar">
          <RiMailSendLine />
        </Button>
        <Button label="reset" style={{ background: 'transparent' }}>
          <GrPowerReset />
        </Button>
      </div>
    </div>
  );
};
