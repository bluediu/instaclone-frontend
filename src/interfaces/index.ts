import { CSSProperties, ReactElement } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from 'react';

export interface IRoute {
  path: string;
  layout: ComponentType<any>;
  component: ComponentType<any>;
}

export interface IStylesProps {
  className?: string;
  style?: CSSProperties;
}

export interface IReactNodeProps {
  children: ReactElement | ReactElement[];
}
