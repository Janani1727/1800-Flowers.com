// https://mock-server-f2z5.onrender.com/
import React from "react";

import { useState } from "react";

import {
  Box,
  Radio,
  Flex,
  Stack,
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// import {BsCircle} from "react-icons/bs"
const Dogs= ({ data }) => {
  // console.log(proj)
  const [page, setPage] = useState(data);
  const loadmore = async () => {
    const res = await fetch(
      `https://mock-server-f2z5.onrender.com/dogs?_limit=6&&_start=6`
    );
    const posts = await res.json();
    setPage((val) => [...val, ...posts]);
  };
   console.log(page)
  return (
    <Box border={"0px solid black"} height={"700px"} display={"flex"}>
      <Box
        border={"0px solid red"}
        width={"18%"}
        mt={"0%"}
        height={"600px"}
        position={"fixed"}
      >
        <Text ml={"20%"} mt={"20%"} color={"#9062BC"} fontSize={"2xl"}>
          Sort by Price
        </Text>
        <Stack
          borderRadius={"10px"}
          ml={"20%"}
          h={"100px"}
          backgroundColor={"#9062BC"}
          color={"white "}
          mt={"3%"}
          direction="column"
        >
          <Radio
            mt={"25px"}
            size="lg"
            name="1"
            colorScheme="white"
            color={"white "}
            defaultChecked
          >
            Low to High
          </Radio>

          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            High to Low
          </Radio>
        </Stack>
        <Text ml={"20%"} mt={"10%"} color={"#9062BC"} fontSize={"2xl"}>
          Filter By Names
        </Text>
        <Stack
          borderRadius={"10px"}
          h={"100px"}
          backgroundColor={"#9062BC"}
          ml={"20%"}
          color={"white "}
          mt={"3%"}
          direction="column"
        >
          <Radio
            mt={"25px"}
            size="lg"
            name="1"
            colorScheme="white"
            defaultChecked
          >
            Ascending
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Descending
          </Radio>
        </Stack>
        <Text ml={"20%"} mt={"10%"} color={"#9062BC"} fontSize={"2xl"}>
          Filter by Category
        </Text>
        <Stack
          borderRadius={"10px"}
          h={"250px"}
          backgroundColor={"#9062BC"}
          ml={"20%"}
          color={"white "}
          mt={"3%"}
          direction="column"
        >
          <Radio
            mt={"25px"}
            size="lg"
            name="1"
            colorScheme="white"
            defaultChecked
          >
            Ascending
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Birthday
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Occasion
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Flower
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Gifts and Food
          </Radio>
          <Radio size="lg" name="1" colorScheme="white" defaultChecked>
            Sympathy
          </Radio>
        </Stack>
      </Box>
      <Box border={"0px solid blue"} ml={"20%"} width={"80%"}>
        <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
          {page.map((el) => (
            <GridItem key={el.id} maxW="sm">
              <Card>
                <CardBody>
                  <Image
                    src={el.img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Image
                  alt=""
                    mt={"20px"}
                    width={"60%"}
                    src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.mbp318}</Heading>
                    <Flex gap={10}>
                      <Text color="#734F96" fontSize="2xl">
                        {el.price}
                      </Text>
                      <Button colorScheme="purple">Add to cart</Button>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
        <Button onClick={loadmore} ml={"40%"} colorScheme="purple">
          Load More
        </Button>
      </Box>
    </Box>
  );
};
export default Dogs;


export async function getStaticProps() {
  let res = await fetch(
    `https://mock-server-f2z5.onrender.com/dogs?_limit=6`
  );
  let data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}



