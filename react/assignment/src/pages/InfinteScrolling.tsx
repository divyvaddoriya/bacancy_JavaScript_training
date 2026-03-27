import React, { useEffect, useRef, useState } from "react";
import Product from "../component/Product";

const InfinteScrolling = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading , setLoading] = useState(true);
  const last = useRef<HTMLDivElement| null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        
      const currentLastElement = entries[0];
        
        if ( !loading && currentLastElement.isIntersecting) {
          console.log("hi");

          setSkip((prev) => prev + 20);
          observer.unobserve(currentLastElement.target);
        }
        
      },
      {
        threshold: 0.5,
        rootMargin: "10px",
      },
    );

    if (last.current)  observer.observe(last.current);

  }, [loading]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`,
      );

      const result = await data.json();
      setProducts((prev) => [...prev, ...result.products]);
      setLoading(false)
    }

    fetchData();
  }, [skip]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {products.map((product) => (
        <Product product={product} />
      ))}
      <div ref={last} style={{ width: "100px", height: "100px" }}></div>
    {loading && <div>
      i am loading
     </div> }
    </div>
  );
};

export default InfinteScrolling;
