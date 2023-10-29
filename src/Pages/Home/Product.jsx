import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductsCard";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        (async()=> {
            const product =await axios('http://localhost:5000/products');
            setProducts(product?.data);
        })()
    },[])
        console.log(products);
    return (
        <div className="my-20 container">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Featured Products</h2>
                <p className="mt-3 text-lg">Explore our handpicked selection of remarkable items</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-8">
                {
                    products.map((product) => <ProductsCard key={product?._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Product;