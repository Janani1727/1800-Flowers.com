import { Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
const AddProducts = ({ handleAddPro }) => {
  const [formState, setFormState] = useState({
    name: "",
    img: "",
    price: "",
  });

  const handleChange = (e) => {
    const v =
      e.target.typee === "number" ? Number(e.target.value) : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: v,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddPro(formState);
  };
  // console.log(formState);
  return (
    <div className={styles.admincontainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ADMIN CAN MODIFY THE PRODUCTS</h1>
        <form onSubmit={handleSubmit} className="Form">
          <div className="inp-box">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Product Name"
              className={styles.inpboxx}
            />
          </div>
          <div className="inp-box">
            <input
              type="link"
              name="img"
              value={formState.img}
              onChange={handleChange}
              placeholder="Product Image"
              className={styles.inpboxx}
            />
          </div>
          <div className="inp-box">
            <input
              type="number"
              name="price"
              value={formState.price}
              onChange={handleChange}
              placeholder="Product Price"
              className={styles.inpboxx}
            />
          </div>
          <div>
            <input type="submit" value="Submit" className={styles.button73} />
          </div>
          <button className={styles.button73}>Logout</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
