import React, {createContext, useContext, useState, ReactNode} from 'react';

interface FontSizeContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined,
);

export const FontSizeProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <FontSizeContext.Provider value={{fontSize, setFontSize}}>
      {children}
    </FontSizeContext.Provider>
  );
};

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
}
