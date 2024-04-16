import { useState, useEffect } from 'react';
import data from '../mocks/with-results.json';

export function useProducts({ search }) {
    const allProducts = data.Search;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filterProducts = () => {
            if (!search) {
                setProducts(allProducts); 
                return;
            }

            const searchLower = search.toLowerCase();
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower)
            );
            setProducts(filtered);
        };

        filterProducts();
    }, [search]);

    return { products };
}