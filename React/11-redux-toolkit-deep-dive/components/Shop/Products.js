import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Book',
    price: 6,
    discription: 'Ths first book I ever wrote.'
  },
  {
    id: 'p2',
    title: 'My Second Book',
    price: 6,
    discription: 'Ths second book I ever wrote.'
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.discription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
