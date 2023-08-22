import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

const CategoryItem = ({ id, title, image }) => {
  return (
    <Link className={s.item} to={`/categories/${title}/${id}`}>
      <img
        src={`https://garden-store-backend.onrender.com${image}`}
        alt={title}
      />
      <p>{title}</p>
    </Link>
  );
};

export default CategoryItem;
