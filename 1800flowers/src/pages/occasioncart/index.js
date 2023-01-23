import { async } from "@firebase/util";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import SinglePage from "../occasion/[id]";

const Pages = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const refresh = () => {
    router.replace(router.asPath);
  };

  
  const handleRemove = async (id) => {
    await axios
      .delete(`https://fine-erin-turkey-hose.cyclic.app/occasioncart/${id}`)
      .then((res) => {
        alert("Delete");
        refresh();
      })
      .catch((er) => {
        alert(er);
      });
  };
  return (
    <div>
      <h1>Cart Page</h1>
      {data.map((el, ind) => {
        return (
          <div key={el.id}>
            <img src={el.img} alt="img"></img>
            <h1>{el.name}</h1>
            <h1>{el.price}</h1>
            <p>{el.category}</p>
            <button onClick={() => handleRemove(el.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps(context) {
  const r = await fetch(
    `https://fine-erin-turkey-hose.cyclic.app/occasioncart`
  );
  const d = await r.json();

  return {
    props: {
      data: d,
    },
  };
}
export default Pages;
