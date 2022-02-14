import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PorfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: PorfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hugo Alves Varella</Text>
          <Text color="gray.300" fontSize="small">
            hugovarellaa@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        fontSize="md"
        name="Hugo Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  );
}
