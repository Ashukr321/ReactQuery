import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Aos from 'aos'
import 'aos/dist/aos.css'

const Product = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    Aos.init();
  })
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      {loading ? (
        <div  className="h-full w-full">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
          {data.map((product) => (
            <div key={product.id} className="group relative" data-aos="zoom-in">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>{product.title}</Link>
                  </h3>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>{product.description}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                <p className="text-sm font-medium text-gray-900">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
