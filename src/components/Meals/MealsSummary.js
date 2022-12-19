import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식들, 당신에게 제공합니다.</h2>
      <p>
        다양한 음식 중에서 가장 좋아하는 음식을 선택하십시오. 그리고
        원하는 곳 어디서든 맛있는 식사를 하세요.
      </p>
      <p>
        우리의 모든 음식은 좋은 퀄리티의 재료로 요리되고 있습니다.
        물론, 검증된 요리사들에 의해서!
      </p>
    </section>
  );
};

export default MealsSummary;