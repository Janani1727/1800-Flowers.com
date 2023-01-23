import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Divider,
  Button,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
  Input,
  Grid,
} from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

const Category = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleAdd = async () => {
    alert("Successfully added to cart");
    await axios
      .post(` https://fine-erin-turkey-hose.cyclic.app/addtocart/`, data)
      .then((res) => router.push("/addtocart"))
      .catch((er) => console.log(er));
  };

  const move = () => {
    router.push("/addtocart");
  };

  return (
    <div style={{ margintop: "100px" }}>
      <Container maxW={"7xl"} mt={"10%"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Grid>
              <Image
                shadow={"dark-lg"}
                rounded={"md"}
                alt={"product image"}
                src={data.img}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
              <Box
                borderRadius={"10px"}
                shadow={"lg"}
                border={"0px solid red"}
                height={"150px"}
                mt={"10px"}
                fontSize={"4xl"}
              >
                <Flex ml={"20px"} mt={"30px"} pr={"200px"}>
                  <FaGift color="#734F96 " />
                  <Text fontSize={"18px"}>SmartGift™ lets them...</Text>
                </Flex>
                <Flex ml={"20px"}>
                  <FiCheck />
                  <Text fontSize={"18px"}>Swap this gift!</Text>
                  <Button
                    ml={"230px"}
                    height={"30px"}
                    color={"white"}
                    bgColor={"#61C278"}
                  >
                    Send with Smartgift™{" "}
                  </Button>
                </Flex>
                <Flex ml={"20px"}>
                  <FiCheck />
                  <Text fontSize={"18px"}>
                    Pick when and where to deliver this gift!
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Automatic Watch
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                $350.00 USD
              </Text>
              <Image
                mt={"20px"}
                width={"50%"}
                src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg"
              />
            </Box>
            <Box borderRadius={"10px"} shadow={"lg"} padding={6}>
              <Box
                mt={"10px"}
                fontWeight={"900px"}
                display={"flex"}
                backgroundColor={"#E8EAEC"}
                gap={"100px"}
              >
                <Text fontWeight={"900px"}>Enter Delivery Destination</Text>
                <Text fontWeight={"900px"} color={"#9062BC"}>
                  Sign in to access your address book
                </Text>
              </Box>
              <Box mt={"20px"} display={"flex"}>
                <Input
                  variant="flushed"
                  width={"200px"}
                  color={"black"}
                  placeholder="Delivery Zip Code"
                />
                <Divider
                  border={"1px solid black"}
                  ml={"50px"}
                  width={"0px"}
                  orientation="vertical"
                />
                <Box ml={"100px"}>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                      Residence
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Business</MenuItem>
                      <MenuItem>Funeral home</MenuItem>
                      <MenuItem>Hospital</MenuItem>
                      <MenuItem>Apartment</MenuItem>
                      <MenuItem>School</MenuItem>
                      <MenuItem>Church</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Box>
              <Button
                onClick={handleAdd}
                mt={"20px"}
                ml={"0%"}
                w={"100%"}
                height={"50px"}
                color={"white"}
                bgColor={"#61C278"}
              >
                Add to Cart <BiNotepad />
              </Button>
            </Box>
            <Box
              onClick={onOpen}
              borderRadius={"10px"}
              padding={4}
              shadow={"lg"}
            >
              DESIGNED AND DELIVERD BY LOCAL SHOP --LEARN MORE
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>The Care Is in the Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Your gift will be expertly crafted and delivered by one of our
                  local shops, who put their passion into every order.
                  <ul style={{ fontSize: "14px" }}>
                    <li>
                      Substitutions are sometimes made if the florist does not
                      have a specific flower type or fruit; every step is taken
                      to create an exceptional gift of equal value.
                    </li>
                    <li>
                      Same-Day Delivery is available in most areas of the U.S.
                      and Canada. Orders must be placed by the following times
                      in your recipient’s time zone:
                    </li>
                    <li>M-F: 2:30pm</li>
                    <li>Saturday: 2pm</li>
                    <ul>Sunday: 11:30am</ul>
                    <li>
                      Delivery times may vary depending on the shop’s delivery
                      schedule.
                    </li>
                  </ul>
                  <Box color={"black"} bgColor={"#61C278"}>
                    <Box display={"flex"} backgroundColor={"#FFE200"}>
                      <Text color={"purple"} fontSize={"26px"}>
                        <BsShop />
                      </Text>
                      <Text fontSize={"16px"}>
                        Please note: Local shops may substitute variety, color &
                        container to ensure the freshest gift and timely
                        delivery.
                      </Text>
                    </Box>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Box borderRadius={"10px"} padding={4} shadow={"lg"} mt={"-20px"}>
              <Stack direction="row">
                <Text ml={"150px"} fontSize={"4xl"}>
                  {" "}
                  <MdLocalShipping />
                </Text>
                <Text fontSize={"xl"}>2-3 business days delivery</Text>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
        <p onClick={move}>cart</p>
      </Container>
    </div>
  );
};
export default Category;

export async function getStaticPaths() {
  let r = await fetch(`https://mock-server-f2z5.onrender.com/daisy`);
  let d = await r.json();

  return {
    paths: d.map((el) => ({ params: { id: String(el.id) } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { id } = context.params;
  const r = await fetch(`https://mock-server-f2z5.onrender.com/daisy/${id}`);
  const d = await r.json();
  return {
    props: {
      data: d,
    },
  };
}
