import { ReactComponent as Seta } from 'assets/images/Seta.svg';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from 'types/products';
import axios from 'axios';
import { BASE_URL } from 'util/request';

import './styles.css';

type UrlParams = {
  productId: string;
};

function ProductDetails() {
  const { productId } = useParams<UrlParams>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to={'/products'}>
          <div className="goback-container">
            <Seta />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
