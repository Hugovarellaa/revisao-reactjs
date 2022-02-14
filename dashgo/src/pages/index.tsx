import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

const SignIn = () => {
  return (
    <>
      <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="5">
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
