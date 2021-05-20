import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis André</Text>
          <Text color="gray.300" fontSize="small">
            luis.oliveira10031992@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Luis André"
        src="https://github.com/luisoliveira1003.png"
      />
    </Flex>
  );
}
