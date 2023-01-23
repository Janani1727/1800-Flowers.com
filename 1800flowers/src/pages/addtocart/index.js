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

// import { Link } from "next/link";
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ProductSimple({ data }) {
  console.log("final", data);

  const pay = () => {
    alert(
      "Thank You For Ordering.. Our Customer Executive will Contact You Soon"
    );
  };

  return (
    <>
      <Center mt={"250px"} py={12}>
        {data.map((el) => (
          <Box
            key={el.id}
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={el.img}
                alt=""
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {el.category}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {el.name}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  ${el.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  $199
                </Text>
              </Stack>
              <Link href="/"></Link>
            </Stack>
          </Box>
        ))}
      </Center>
      <Center mb={"30px"}>
        <Box>
          <Link href="/">
            <Button
              textDecoration={"none"}
              fontSize={"2xl"}
              color={"black"}
              onClick={pay}
            >
              Proceed To Buy
            </Button>
          </Link>
        </Box>
      </Center>
    </>
  );
}
export async function getStaticProps() {
  const r = await fetch(`https://fine-erin-turkey-hose.cyclic.app/addtocart`);
  const d = await r.json();

  return {
    props: {
      data: d,
    },
  };
}
