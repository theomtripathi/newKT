import React from 'react';
import { Container } from './Container';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      <Container>
        <h1 className="text-4xl font-bold text-blue-900 mb-8">{title}</h1>
        {children}
      </Container>
    </div>
  );
}