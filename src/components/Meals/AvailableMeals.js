import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '스시',
    description: '쌀밥에 날생선 등의 해산물이나 달걀 등을 조합한 음식으로, 전통적으로 와사비와 함께 먹는다.',
    price: 12000,
  },
  {
    id: 'm2',
    name: '돈까스',
    description: '이탈리아의 코톨레타를 원형으로 하는 서양의 커틀릿에서 유래한 일본 요리',
    price: 9500,
  },
  {
    id: 'm3',
    name: '바베큐 햄버거',
    description: 'American, raw, meaty',
    price: 8000,
  },
  {
    id: 'm4',
    name: '샐러드',
    description: 'Healthy...and green...',
    price: 6500,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;