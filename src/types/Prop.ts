import { AriaAttributes, HTMLAttributes, PropsWithChildren } from 'react';

interface Prop<T>
  extends PropsWithChildren,
    AriaAttributes,
    HTMLAttributes<T> {}

export default Prop;
