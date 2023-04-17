import React from 'react';

export const Newimg = ({img}) => {
  return (
    <div className="Newimg">
      <img src={img} alt="Descrição da imagem" />
    </div>
  );
};