import ProductCard from 'components/ProductCard';
import Pagination from 'components/Pagination';
import { Product } from 'types/products';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Springpage } from 'types/vendor/spring';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';

import './styles.css';

const Catalogo = () => {
  const [page, setPage] = useState<Springpage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalogo-container">
      <div className="row catalogo-title-container">
        <h1>Catalogo de produtos</h1>
      </div>

      <div className="row">
        {page?.content.map((product) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalogo;
