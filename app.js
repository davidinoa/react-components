var GroceryListItem = (props) => (
  <li>{props.groceryItem}</li>
);

var GroceryList = () => (
  <ul>
    <GroceryListItem groceryItem={'vegetables'}/>
    <GroceryListItem groceryItem={'fruits'}/>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));