import React, { useContext, useEffect, useState } from "react";
import Product from "../component/Product";
import { cartcontext } from "../utils/context";
import CartItem from "../component/CartItem";

type FilterType = {
  currentSearchType: "inputsearch" | "category" | "filtersearch";
  category: string;
  filtersearch: {
    limit: number;
    skip: number;
    sortBy: "price" | "rating" | "";
    order: "asc" | "desc" | "";
  };
};

const useDebounce = (value: string, delay: number) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return name;
};

const OptimizedHome = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<any[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterType>({
    currentSearchType: "filtersearch",
    category: "",
    filtersearch: {
      limit: 20,
      skip: 0,
      sortBy: "",
      order: "",
    },
  });

  const {
    cart,
    addCartItem,
    removeCartItem,
    increaseQuantity,
    decreseQuantity,
    clearCart,
  } = useContext(cartcontext);

  const debouncedInput = useDebounce(inputSearch, 500);

  const changeUrl = (filters: FilterType) => {
    let dummy = "https://dummyjson.com/products";

    if (filters.currentSearchType == "category") {
      dummy += "/category/";
      dummy += filters.category;
    }

    if (filters.currentSearchType == "inputsearch") {
      dummy += `/search?q=${debouncedInput}`;
    }

    if (filters.currentSearchType !== "inputsearch") dummy += "?";
    else {
      dummy += "&";
    }
    dummy += Object.entries(filters.filtersearch)
      .filter(([_, value]) =>
        typeof value == "string" && value == "" ? false : true,
      )
      .map((arr) => arr.join("="))
      .join("&");

    console.log(filters);
    console.log(dummy);

    return dummy;
  };

  const url = changeUrl(filters);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://dummyjson.com/products/category-list/`);

      const result = await data.json();

      setCategory(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);
      const result = await data.json();
      setProducts(result.products);
    }

    fetchData();
  }, [url, debouncedInput]);

  return (
    <div>
      <select
        name="Category"
        onChange={(e) => {
          <option value={""}>{""}</option>;

          setFilters((prev) => ({
            ...prev,
            currentSearchType: "category",
            category: e.target.value,
          }));
        }}
        value={filters.category}
        id="categry"
      >
        {category?.map((categor) => {
          return <option key={categor} value={categor}>{categor}</option>;
        })}
      </select>

      <select
        name="Sorting By"
        onChange={(e) =>
          setFilters((prev) => {
            return {
              ...prev,
              filtersearch: { ...prev.filtersearch, sortBy: e.target.value },
            };
          })
        }
        value={filters.filtersearch.sortBy}
        id="categry"
      >
        <option value={"price"}> price</option>
        <option value={"rating"}>rating</option>
      </select>

      <button
        onClick={(e) => {
          setFilters((prev) => ({
            ...prev,
            filtersearch: { ...prev.filtersearch, order: "asc" },
          }));
        }}
      >
        asc
      </button>
      <button
        onClick={(e) => {
          setFilters((prev) => {
            return {
              ...prev,
              filtersearch: { ...prev.filtersearch, order: "desc" },
            };
          });
        }}
      >
        desc
      </button>

      <input
        type="text"
        value={inputSearch}
        placeholder="search the product"
        onChange={(e) => {
          if (e.target.value !== "") {
            setFilters((prev) => ({
              ...prev,
              currentSearchType: "inputsearch",
            }));
          } else {
            setFilters((prev) => ({
              ...prev,
              currentSearchType: "filtersearch",
            }));
          }
          setInputSearch(e.target.value);
        }}
      />

      <div style={{ position:"relative", gap: "50px" }}>
        
        <div style={{ width: "80%" , position:"relative"}}>
          <div>
            <button
              onClick={() => {
                setFilters((prev) => ({
                  ...prev,
                  filtersearch: {
                    ...prev.filtersearch,
                    skip: prev.filtersearch.skip - prev.filtersearch.limit,
                  },
                }));
              }}
              disabled={filters.filtersearch.skip == 0}
            >
              {" "}
              prev{" "}
            </button>
            <button
              onClick={() => {
                setFilters((prev) => ({
                  ...prev,
                  filtersearch: {
                    ...prev.filtersearch,
                    skip: prev.filtersearch.skip + prev.filtersearch.limit,
                  },
                }));
              }}
            >
              next
            </button>

            <div>
              Current Page :{" "}
              {filters.filtersearch.skip / filters.filtersearch.limit + 1}
            </div>
     
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2%",
            }}
          >
            {products.map((product) => 
           { 
            
            const cartItem = cart.find(item => item.id === product.id);

            return <Product
                key={product.id}
                product={product}
                addTocart={addCartItem}
                isAlreadyInCart={cartItem}
                increaseQuantity={increaseQuantity}
                decreaseQunatity={decreseQuantity}
              ></Product>}
            )}
          </div>
        </div>

<div style={{position: "relative"}}>

        <div
          style={{
            width: "30%",
            height: "90vh",
            right: 0,
            scrollBehavior: "smooth",
            overflowY: "auto",
          }}
        >
          <h1>Cart</h1>

          {cart.map((item) => (
            <div key={item.id}>
              <CartItem
                item={item}
                increaseQuantity={increaseQuantity}
                decreseQuantity={decreseQuantity}
                removeCartItem={removeCartItem}
              />
            </div>
          ))}
      
        </div>

        <div style={{ position: "absolute" , bottom: 0}}>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      </div>
  </div>        

      {/* <select name="page no" onChange={(e)=> setPageNo(Number(e.target.value))} value={pageno} id="">

      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>

      </select> */}
    </div>
  );
};

export default OptimizedHome;
