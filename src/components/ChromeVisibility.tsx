'use client';

import { createContext, useContext, useState, useMemo } from 'react';

type ChromeVisibility = {
  chromeHidden: boolean;
  setChromeHidden: (hidden: boolean) => void;
};

const ChromeVisibilityContext = createContext<ChromeVisibility>({
  chromeHidden: false,
  setChromeHidden: () => {},
});

/**
 * Lets a page hide the persistent site chrome (navbar, hero copyright) while
 * the visitor is in a section meant to be looked at without distraction.
 * Only the home hero uses this today; everywhere else it stays false.
 */
export const ChromeVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [chromeHidden, setChromeHidden] = useState(false);
  const value = useMemo(() => ({ chromeHidden, setChromeHidden }), [chromeHidden]);

  return (
    <ChromeVisibilityContext.Provider value={value}>
      {children}
    </ChromeVisibilityContext.Provider>
  );
};

export const useChromeVisibility = () => useContext(ChromeVisibilityContext);
