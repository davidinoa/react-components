var GroceryListItem = (props) => (
  <li>{props.groceryItem}</li>
);

var GroceryList = (props) => (
  <ul>
    <GroceryListItem groceryItem={props.groceryItems[0]}/>
    <GroceryListItem groceryItem={props.groceryItems[1]}/>
  </ul>
);

ReactDOM.render(<GroceryList groceryItems={['vegetables', 'fruits']}/>, document.getElementById('app'));