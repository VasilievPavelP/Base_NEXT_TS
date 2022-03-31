import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type PageType<P = {}> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
