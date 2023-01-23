import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormLabel,
} from "@chakra-ui/react";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { auth, db, provider } from "../firebase/firebase-config";
import Link from "next/link";

export default function Signup() {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const Signup = async () => {
    try {
      const email = emailSignUp;
      const password = passwordSignUp;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const usersCollectionRef = doc(db, "users", user.uid);
      await setDoc(usersCollectionRef, { email, password });

      setEmailSignUp("");
      setPasswordSignUp("");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const name = user.displayName;
      const email = user.email;

      const usersCollectionRef = doc(db, "users", user.uid);
      await setDoc(usersCollectionRef, { email, googleAuth: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      mt={"11%"}
    >
      <Stack spacing={8} mx={"auto"} w={500} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Image
            src={"/Circle Flower Natural Brand Logo (1).png"}
            alt="Logo"
            width={150}
            height={150}
          />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          bgImage={"/wave.jpg"}
          p={6}
        >
          <Stack spacing={4}>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input
                type={"email"}
                placeholder="Email"
                value={emailSignUp}
                my="2"
                onChange={(e) => setEmailSignUp(e.target.value)}
              />
            </Box>

            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                value={passwordSignUp}
                my="2"
                onChange={(e) => setPasswordSignUp(e.target.value)}
              />
            </Box>
            <Link href="/login">
              <Button onClick={Signup}>Sign Up</Button>
            </Link>
            <Link href="/">
              <Button
                className="googlebtn"
                backgroundColor={"royalblue"}
                color={"white"}
                my="2"
                onClick={signInWithGoogle}
              >
                Sign In Google
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
