import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaLoadingBlock, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { setPizzas } from '../redux/actions/pizzas';

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
    //dispatch(fetchPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickCategory = React.useCallback((index) => dispatch(setCategory(index)), []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onClickCategory} items={categoryNames} />

        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
