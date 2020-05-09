import React from 'react';

import { Card } from 'interfaces/.components/Card';
import { Download } from './.components/Download';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

export const Free = () => {
  const layout = children => (
    <SectionLayout id="free" title="free" subtitle="MUESTRAS GRATIS">
      {children}
    </SectionLayout>
  );

  return layout(
    <div>
      <Download></Download>
    </div>
  );
};
