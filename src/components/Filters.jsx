
import { Button, Form } from "react-bootstrap";
import "../css/Filters.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filters = () => {
  const {searchState:{
          byStock, byFastDelivery, sort, byRating
  }, searchDispatch} = CartState();

  return (
    <div className="filters">
      <span className="title">Search Filters</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
          onChange={()=>{
            searchDispatch({
              type:"SORT_BY_PRICE",
              payload:"LOW_TO_HIGH"
            })
          }}
          checked={sort === "LOW_TO_HIGH"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
          onChange={()=>{
            searchDispatch({
              type:"SORT_BY_PRICE",
              payload:"HIGH_TO_LOW"
            })
          }}
          checked={sort === "HIGH_TO_LOW"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock products"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={()=>{
            searchDispatch({
              type:"FILTER_BY_STOCK"
            })
          }}
          checked={byStock}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={()=>{
            searchDispatch({
              type:"FILTER_BY_DELIVERY"
            })
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) => 
            searchDispatch({
              type:"FILTER_BY_RATING",
              payload:i+1
            })}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light"
                onClick={()=>{
                  searchDispatch({
                    type:"CLEAR_FILTERS"
                  })
                }}
                checked={byStock}>Clear Filters</Button>
    </div>
  );
};

export default Filters;
