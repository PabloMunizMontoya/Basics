import React, {
  Fragment, useState
} from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Product from './components/Product';

function App() {

  //create product list
    const [ products, setProducts] = useState([
      { id: 1,
        name: 'T-Shirt ReactJS', 
        price: 10
      },
      { id: 2,
        name: 'T-Shirt VueJS', 
        price: 12
      },
      { id: 3,
        name: 'T-Shirt NodeJS', 
        price: 10
      },
      { id: 4,
        name: 'T-Shirt Angular', 
        price: 15
      },
    ])

  //Obtain the date
  const date = new Date().getFullYear()

  return (
    <Fragment>
        <Header
          title = 'Virtual Shop'
        />

        <h1>List of products</h1>
        {products.map(product => (
          <Product
            key={product.id}
            product = {product}
          />
        ))}

        <Footer
          date = {date}
        />
    </Fragment>
  );
}

export default App;
