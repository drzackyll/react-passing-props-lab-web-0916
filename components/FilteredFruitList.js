// const React = require('react');
//
// const FilteredFruitList = ({
//   fruitFilter,
//   fruit
// }) => {
//   const list = !fruitFilter ? fruit : fruit.filter(i => i.fruit_type == fruitFilter);
//
//   return (
//     <ul className="fruit-list">
//       {list.map((fruit,idx) => <li key={idx}>{fruit.char}</li>)}
//     </ul>
//   );
// }
//
// FilteredFruitList.defaultProps = {
//   fruit: [],
//   filter: null
// }
//
// module.exports = FilteredFruitList;

const React = require('react');

const FilteredFruitList = ({
  fruit,
  filter
}) => {
  const fruitList = !filter ?  fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}
    </ul>
  );
};
FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

module.exports = FilteredFruitList;
