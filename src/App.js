import React from 'react';

import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
//import { useDispatch } from 'react-redux';

function App() {
  //const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//   render() {
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
