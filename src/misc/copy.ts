import {PropsWithChildren} from 'react';

export function copy(node?: PropsWithChildren<any>) {
  return {...node}
}