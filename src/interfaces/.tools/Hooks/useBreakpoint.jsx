import { useContext } from 'react';

import { BreakpointContext } from 'interfaces/.tools/Contexts/BreakpointContext';

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (context === {}) throw new Error('useBreakpoint must be used within BreakpointProvider');
  return context;
};
