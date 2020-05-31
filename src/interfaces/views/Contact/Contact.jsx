import React, { useContext, useReducer, useRef } from 'react';

import { GrFacebookOption, GrPowerReset } from 'react-icons/gr';
import { RiMailLine } from 'react-icons/ri';
import { RiMailSendLine } from 'react-icons/ri';

import tablet from 'assets/img/svg/tablet.svg';

import styles from './Contact.module.scss';

import { Button } from 'interfaces/.components/Button';
import { InputText } from './.components/InputText';
import { InputTextarea } from './.components/InputTextarea';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { formReducer } from './.tools/Reducers/formReducer';

export const Contact = () => {
  const messages = useContext(MessagesContext);

  const emailRef = useRef(null);

  const [formState, formDispatch] = useReducer(formReducer, { name: '', email: '', message: '' });

  const onFillForm = (id, value) => formDispatch({ type: 'ON_FILL_FORM', payload: { id, value } });

  const onResetForm = () => formDispatch({ type: 'ON_RESET_FORM', payload: '' });

  const onSendEmail = () => {
    if (emailRef.current.checkValidity()) {
      console.log('send');
    }
  };

  const data = [
    {
      id: 'name',
      label: messages.es['name'],
      type: 'search'
    },
    {
      id: 'email',
      label: messages.es['e-mail'],
      pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
      ref: emailRef,
      type: 'search'
    }
  ];

  const renderLayout = children => (
    <SectionLayout className="contact" id="contact" title={messages.es['contactUs']} subtitle={messages.es['contactWithUs']}>
      {children}
    </SectionLayout>
  );

  return renderLayout(
    <div className={styles.contactWrap}>
      <img src={tablet} alt="Illustration" />
      <div className={styles.contact}>
        <h2 className={styles.title}>{messages.es['writeUs']}</h2>
        <div className={styles.letsTalk}>
          <a className={styles.link} href="mailto:info@pasaletras.com">
            <span className={`${styles.btn} ${styles.mailBtn}`}>
              <RiMailLine className={styles.mail} />
            </span>
            <span className={styles.text}>{messages.es['infoEmail']}</span>
          </a>
          <a
            className={styles.link}
            href="https://www.facebook.com/Libro-Pasaletras-109572287173965/"
            rel="noopener noreferrer"
            target="_blank">
            <span className={styles.btn}>
              <GrFacebookOption className={styles.facebook} />
            </span>
            <span className={styles.text}>{messages.es['followUsFacebook']}</span>
          </a>
        </div>
        <form className={styles.form}>
          <div className={styles.input}>
            {data.map(input => (
              <span key={input.id}>
                <span className={`p-float-label`}>
                  <InputText
                    autoComplete="off"
                    id={input.id}
                    onChange={event => onFillForm(input.id, event.target.value)}
                    pattern={input.pattern}
                    ref={input.ref}
                    required={true}
                    type={input.type}
                    value={formState[input.id]}
                  />
                  <label htmlFor={input.id}>{input.label}</label>
                </span>
              </span>
            ))}
          </div>
          <div className={styles.textarea}>
            <span className={`p-float-label`}>
              <InputTextarea
                autoResize={true}
                cols={30}
                id="inputTextarea_id"
                onChange={event => onFillForm('message', event.target.value)}
                required={true}
                rows={1}
                value={formState.message}
              />
              <label htmlFor={'inputTextarea_id'}>{messages.es['writeYourMessage']}</label>
            </span>
          </div>
          <div className={styles.buttons}>
            <span className={styles.submit}>
              <Button label={messages.es['send']} onClick={() => onSendEmail()}>
                <RiMailSendLine />
              </Button>
            </span>
            <span className={styles.reset}>
              <Button className="reset" label={messages.es['reset']} onClick={() => onResetForm()}>
                <GrPowerReset className={styles.resetIcon} />
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
