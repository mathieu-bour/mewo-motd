import clsxm from '@riverfl0w/clsxm';
import { type ComponentPropsWithoutRef, type FC } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button: FC<ButtonProps> = (props) => {
  return <button className={clsxm(clsxm)} {...props} />;
};

export default Button;
