import React, { ReactNode } from 'react';
import Footer from '../FooterComponent/Footer';
import Header from '../HeaderComponent/Header';

interface DefaultComponentsProps {
  children: ReactNode;
}

export const DefaultComponent: React.FC<DefaultComponentsProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
