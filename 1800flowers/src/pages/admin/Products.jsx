import AddProducts from "./AddProducts";
import { addProducts, getProducts, delProducts } from "../../adminapi/api";

const { useState, useEffect } = require("react");
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
const Products = () => {
  const [data, setData] = useState([]);

  const handleGetPro = () => {
    getProducts()
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => console.log(er, "issue find"));
  };

  useEffect(() => {
    handleGetPro();
  }, []);

  const handleAddPro = (data) => {
    addProducts(data);
  };
  const handleDelete = (id) => {
    delProducts(id);
    handleGetPro();
  };
  console.log("found", data);
  return (
    <>
      <AddProducts handleAddPro={handleAddPro} />
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gap: "10px",
            padding: "0px 100px 0px 100px",
            justifyContentd: "center",
            alignItems: "center",
            marginTop: "80px",
            marginBottom: "50px",
          }}
        >
          {data.map((el) => (
            <div
              key={el.id}
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={el.img} alt="img" />
              <h1
                style={{
                  fontSize: "23px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {el.name}
              </h1>
              <p
                style={{
                  fontSize: "22px",
                  textAlign: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  color: "green",
                }}
              >
                ${el.price}
              </p>
              <button
                onClick={() => handleDelete(el.id)}
                style={{
                  padding: "3px",
                  color: "white",
                  backgroundColor: "#65338B",
                  fontSize: "22px",
                }}
              >
                Delete Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
