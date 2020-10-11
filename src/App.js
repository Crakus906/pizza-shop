import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import './scss/app.scss';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />  {/* роутинг для сторінки Home.В ній рендеряться всі піцци*/}
          <Route path="/cart" component={Cart} exact /> {/* роутинг для сторінки всього проекту*/}
        </div>
      </div>
    </div>
  )
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {   // база данних піцц
//       this.props.setPizzas(data.pizzas)
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route path="/" render={() => <Home items={this.props.items} />} exact />  {/* роутинг для сторінки Home.В ній рендеряться всі піцци*/}
//             <Route path="/cart" component={Cart} exact /> {/* роутинг для сторінки всього проекту*/}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// function App({ setPizzas, items }) {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {   // база данних піцц
//       // setPizzas(data.pizzas)
//     })
//   }, [])
//   return (
//     <div className="App">
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route path="/" render={() => <Home items={items} />} exact />  {/* роутинг для сторінки Home.В ній рендеряться всі піцци*/}
//           <Route path="/cart" component={Cart} exact /> {/* роутинг для сторінки всього проекту*/}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App()
