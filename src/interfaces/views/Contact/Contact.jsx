import React from 'react';

import styles from './Contact.module.scss';

import { SectionLayout } from 'interfaces/.components/SectionLayout';
import { InputText } from './.components/InputText';

export const Contact = () => {
  const layout = children => (
    <SectionLayout id="contact" title="contact" subtitle="Escribemos bb">
      {children}
    </SectionLayout>
  );

  return layout(
    <div>
      <span className={`p-float-label`}>
        <InputText id={'property'} type="search" />
        <label htmlFor={'property'}>test</label>
      </span>

      {/* <InputText id="suge" type="search" className={'p-float-label'} placeholder="GlobalSearch" /> */}
    </div>
  );
};
