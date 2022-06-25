import React from 'react';
import s from './Button.module.css'

export const Button = () => {
    const title = 'Название кнопки'
  return (
    <button className={s.container}>{title}</button>
  );
}

