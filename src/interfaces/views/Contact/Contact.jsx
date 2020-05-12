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
    <SectionLayout id="contact" title="Contacta" subtitle="Ponte en contacto con nosotros">
      {children}
    </SectionLayout>
  );

  const data = [
    { label: 'Nombre', id: ReactUtils.uuid(), type: 'search', icon: <FiUser /> },
    { label: 'Email', id: ReactUtils.uuid(), type: 'search', icon: <RiMailLine /> },
    { label: 'Asunto', id: ReactUtils.uuid(), type: 'search', icon: <RiPencilLine /> }
  ];

  return layout(
    <div className={styles.contact}>
      <div className={styles.input}>
        {data.map(item => (
          <span key={item.id}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={`p-float-label`}>
              <InputText id={item.id} type={item.type} />
              <label htmlFor={item.id}>{item.label}</label>
            </span>
          </span>
        ))}
      </div>
      <div className={styles.textarea}>
        <span className={`p-float-label`}>
          <InputTextarea rows={3} cols={30} autoResize={true}></InputTextarea>
          <label htmlFor={777}>Message</label>
        </span>
      </div>
      <div className={styles.buttons}>
        <span className={styles.submit}>
          <Button label="enviar">
            <RiMailSendLine />
          </Button>
        </span>
        <span className={styles.reset}>
          <Button label="reset" style={{ background: 'transparent' }}>
            <GrPowerReset />
          </Button>
        </span>
      </div>
    </div>
  );
};
