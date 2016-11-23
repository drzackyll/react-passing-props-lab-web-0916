// const React = require('react');
//
// const Filter = require('./Filter');
// const FilteredFruitList = require('./FilteredFruitList.js');
//
//
// const FruitBasket = ({
//   fruit,
//   filters,
//   currentFilter,
//   onUpdateFilter
// }) => {
//   return (
//     <div className="fruit-basket">
//       <Filter
//         filters={filters}
//         handleChange={onUpdateFilter} />
//       <FilteredFruitList
//         fruitFilter={currentFilter}
//         fruit={fruit}/>
//     </div>
//   );
// }
//
// FruitBasket.defaultProps = {
//   fruit: [],
//   filters: [],
//   currentFilter: null,
//   updateFilterCallback: () => {}
// }
//
// module.exports = FruitBasket;

const React = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  onUpdateFilter
}) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={onUpdateFilter} />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter} />
    </div>
  );
};

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

module.exports = FruitBasket;
