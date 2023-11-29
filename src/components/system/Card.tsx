import type { ComponentPropsWithoutRef, FC } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {}

const Card: FC<CardProps> = () => {
  return <div></div>;
};

export default Card;
