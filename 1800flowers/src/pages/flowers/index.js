// // https://mock-server-f2z5.onrender.com/
// import React from "react";

// import { useState } from "react";

// import {
//   Box,
//   Radio,
//   Flex,
//   Stack,
//   Card,
//   CardBody,
//   Text,
//   Button,
//   Image,
//   Heading,
//   Grid,
//   GridItem,
// } from "@chakra-ui/react";
// // import {BsCircle} from "react-icons/bs"
// const Allflower= ({ data }) => {
//   // console.log(proj)
//   const [page, setPage] = useState(data);
//   const loadmore = async () => {
//     const res = await fetch(
//       `https://mock-server-f2z5.onrender.com/allflowers?_limit=6&&_start=6`
//     );
//     const posts = await res.json();
//     setPage((val) => [...val, ...posts]);
//   };
//    console.log(page)
//   return (
//     <Box border={"0px solid black"} height={"700px"} display={"flex"}>
//       <Box
//         border={"0px solid red"}
//         width={"18%"}
//         mt={"0%"}
//         height={"600px"}
//         position={"fixed"}
//       >
//         <Text ml={"20%"} mt={"20%"} color={"#9062BC"} fontSize={"2xl"}>
//           Sort by Price
//         </Text>
//         <Stack
//           borderRadius={"10px"}
//           ml={"20%"}
//           h={"100px"}
//           backgroundColor={"#9062BC"}
//           color={"white "}
//           mt={"3%"}
//           direction="column"
//         >
//           <Radio
//             mt={"25px"}
//             size="lg"
//             name="1"
//             colorScheme="white"
//             color={"white "}
//             defaultChecked
//           >
//             Low to High
//           </Radio>

//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             High to Low
//           </Radio>
//         </Stack>
//         <Text ml={"20%"} mt={"10%"} color={"#9062BC"} fontSize={"2xl"}>
//           Filter By Names
//         </Text>
//         <Stack
//           borderRadius={"10px"}
//           h={"100px"}
//           backgroundColor={"#9062BC"}
//           ml={"20%"}
//           color={"white "}
//           mt={"3%"}
//           direction="column"
//         >
//           <Radio
//             mt={"25px"}
//             size="lg"
//             name="1"
//             colorScheme="white"
//             defaultChecked
//           >
//             Ascending
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Descending
//           </Radio>
//         </Stack>
//         <Text ml={"20%"} mt={"10%"} color={"#9062BC"} fontSize={"2xl"}>
//           Filter by Category
//         </Text>
//         <Stack
//           borderRadius={"10px"}
//           h={"250px"}
//           backgroundColor={"#9062BC"}
//           ml={"20%"}
//           color={"white "}
//           mt={"3%"}
//           direction="column"
//         >
//           <Radio
//             mt={"25px"}
//             size="lg"
//             name="1"
//             colorScheme="white"
//             defaultChecked
//           >
//             Ascending
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Birthday
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Occasion
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Flower
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Gifts and Food
//           </Radio>
//           <Radio size="lg" name="1" colorScheme="white" defaultChecked>
//             Sympathy
//           </Radio>
//         </Stack>
//       </Box>
//       <Box border={"0px solid blue"} ml={"20%"} width={"80%"}>
//         <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
//           {page.map((el) => (
//             <GridItem maxW="sm">
//               <Card>
//                 <CardBody>
//                   <Image
//                     src={el.img}
//                     alt="Green double couch with wooden legs"
//                     borderRadius="lg"
//                   />
//                   <Image
//                     mt={"20px"}
//                     width={"60%"}
//                     src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg"
//                   />
//                   <Stack mt="6" spacing="3">
//                     <Heading size="md">{el.mbp318}</Heading>
//                     <Flex gap={10}>
//                       <Text color="#734F96" fontSize="2xl">
//                         {el.price}
//                       </Text>
//                       <Button colorScheme="purple">Add to cart</Button>
//                     </Flex>
//                   </Stack>
//                 </CardBody>
//               </Card>
//             </GridItem>
//           ))}
//         </Grid>
//         <Button onClick={loadmore} ml={"40%"} colorScheme="purple">
//           Load More
//         </Button>
//       </Box>
//     </Box>
//   );
// };
// export default Allflower;

// export async function getStaticProps() {
//   let res = await fetch(
//     `https://mock-server-f2z5.onrender.com/allflowers?_limit=6`
//   );
//   let data = await res.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

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
      https://mock-server-f2z5.onrender.com/allflowers?q=${query}
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
      `https://mock-server-f2z5.onrender.com/daisy?_limit=6&&_start=6`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };

  const htol = async () => {
    let res = await fetch(
      `https://fine-erin-turkey-hose.cyclic.app/plants?_sort=price&_order=asc`
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
          <p>Flowers</p>
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
                <span>Valentine</span>
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
                      <Link href={`flowers/${el.id}`}>
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
  let res = await fetch(`https://mock-server-f2z5.onrender.com/daisy?_limit=6`);

  let data = await res.json();

  return {
    props: {
      birthData: data,
    },
  };
}
