import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

const Birthday = ({ birthData }) => {
  const [page, setPage] = useState(birthData);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  function FetchProduct(query) {
    return axios.get(
      `
      https://fine-erin-turkey-hose.cyclic.app/occasion?q=${query}
  `
    );
  }

  useEffect(() => {
    FetchProduct("")
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.log("err:", er);
      });
  }, []);

  const handleSearch = () => {
    FetchProduct(query)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const loadmore = async () => {
    const res = await fetch(
      `https://fine-erin-turkey-hose.cyclic.app/occasion?_limit=6`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };

  const htol = async () => {
    let res = await fetch(
      `https://fine-erin-turkey-hose.cyclic.app/occasion?_sort=price&_order=asc`
    );
    let data = await res.json();
    setPage(data);
  };
  const ltoh = async () => {
    let res = await fetch(
      `https://fine-erin-turkey-hose.cyclic.app/plants?_sort=price&_order=desc`
    );
    let data = await res.json();
    setPage(data);
  };
  console.log(page);

  return (
    <>
      <div
        style={{
          marginTop: "200px",
          color: "#65388B",
          lineHeight: "25px",
          textAlign: "center",
          fontSize: "15px",
          fontFamily: "LatoMedium,san-serif",
          fontWeight: "600",
          backgroundColor: "#F4F2F7",
          padding: "10px 0 10px 0",
          marginBottom: "10px",
        }}
      >
        SAVE UP TO 40% ON TOP FLOWERS & GIFTS! | SHOP NOW
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            textAlign: "center",
            color: "#65388B",
            fontSize: "24px",
            fontFamily: "LatoMedium,san-serif",
            fontWeight: "600",
            borderRight: "1px solid black",
            paddingTop: "20px",
          }}
        >
          <p>Ocassion</p>
        </div>
        <div
          style={{
            width: "80%",
            textAlign: "left",
            padding: "10px 20px 10px 20px",
            fontSize: "14px",
          }}
        >
          Our birthday flowers include fresh roses, daisies, and more! Whether
          your birthday flower delivery is sent to home or office, you can be
          sure it will be received with a smile. Need your birthday flowers
          today?{" "}
          <span style={{ color: "#65388B", textDecoration: "underline" }}>
            Same-day birthday delivery
          </span>{" "}
          is available! With{" "}
          <span style={{ color: "#65388B", textDecoration: "underline" }}>
            same-day flower delivery
          </span>{" "}
          on orders placed by 2PM, no one has to know whether you ordered weeks
          ago or this morning. You can be sure our flowers for birthdays will
          send the right message.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            width: "15%",
            border: "1px solid black",
            marginLeft: "25px",
            height: "500px",
            backgroundImage: "url('/bimage.jpeg')",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontWeight: "700",
              marginTop: "20px",
              fontSize: "20px",
            }}
          >
            Price
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginTop: "10px",
              fontSize: "18px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "#65388B",
            }}
          >
            <p onClick={() => htol()}>High to Low</p>
            <p onClick={() => ltoh()}>Low to High</p>
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "700",
              marginTop: "20px",
              fontSize: "20px",
            }}
          >
            Category
          </div>
          <div>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Birthday</span>
              </Link>
            </p>

            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Flowers</span>
              </Link>
            </p>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Food</span>
              </Link>
            </p>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Gifts</span>
              </Link>
            </p>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Occassion</span>
              </Link>
            </p>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Plants</span>
              </Link>
            </p>
            <p
              style={{
                paddingLeft: "65px",
                textAlign: "left",
                fontWeight: "500",
                marginTop: "10px",
                fontSize: "16px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#65388B",
              }}
            >
              <Link href="">
                <span>Sympathy</span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32% 32% 32%",
              gridTemplateRows: "auto",
              width: "100%",
              gap: "15px",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            {page.map((el) => (
              <div key={el.id}>
                <div>
                  <img src={el.img} />
                  <img
                    style={{ width: "40%", marginTop: "10px" }}
                    src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg"
                  />

                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "23px",
                        fontFamily: "LatoMedium,sans-serif",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {el.name}
                    </p>
                    <div>
                      <p
                        style={{
                          fontSize: "17px",
                          lineHeight: "23px",
                          fontFamily: "LatoMedium,sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        $ {el.price}
                      </p>
                      <Link href={`occasion/${el.id}`}>
                        <button
                          style={{
                            backgroundColor: "#65388B",
                            color: "white",
                            padding: "10px 13px 10px 13px",
                            borderRadius: "5px",
                            marginTop: "5px",
                            float: "right",
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              width: "100%",
              padding: "10px",
              fontSize: "20px",
              fontWeight: "600",
              color: "#65388B",
              marginTop: "60px",
              marginBottom: "100px",
              cursor: "pointer",
            }}
          >
            <div onClick={loadmore} ml={"40%"} colorScheme="purple">
              Load More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Birthday;

export async function getStaticProps() {
  let res = await fetch(
    `https://fine-erin-turkey-hose.cyclic.app/occasion?_limit=6`
  );

  let data = await res.json();

  return {
    props: {
      birthData: data,
    },
  };
}
