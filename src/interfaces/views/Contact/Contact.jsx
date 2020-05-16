import React, { useContext } from 'react';

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

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { ReactUtils } from 'interfaces/.tools/Utils/ReactUtils';

export const Contact = () => {
  const messages = useContext(MessagesContext);

  const data = [
    { label: messages.es['name'], id: ReactUtils.uuid(), type: 'search', icon: <FiUser /> },
    { label: messages.es['e-mail'], id: ReactUtils.uuid(), type: 'search', icon: <RiMailLine /> },
    { label: messages.es['subject'], id: ReactUtils.uuid(), type: 'search', icon: <RiPencilLine /> }
  ];

  const renderLayout = children => (
    <SectionLayout id="contact" title={messages.es['contactUs']} subtitle={messages.es['contactWithUs']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
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
          <label htmlFor={777}>{messages.es['writeYourMessage']}</label>
        </span>
      </div>
      <div className={styles.buttons}>
        <span className={styles.submit}>
          <Button label={messages.es['send']}>
            <RiMailSendLine />
          </Button>
        </span>
        <span className={styles.reset}>
          <Button label={messages.es['reset']} style={{ background: 'transparent' }}>
            <GrPowerReset />
          </Button>
        </span>
      </div>
    </div>
  );
};
