var Fruits = () => (
  <li>fruits</li>
);

var Vegetables = () => (
  <li>vegetables</li>
);

var GroceryList = () => (
  <ul>
    <Fruits />
    <Vegetables />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));