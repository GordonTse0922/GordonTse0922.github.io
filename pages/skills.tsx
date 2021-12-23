import { Progress, Stack } from "@chakra-ui/react";
import { NextPage } from "next";

const skills: NextPage = () => {
    return (
    <Stack spacing={5}>
        <Progress colorScheme='green' size='sm' value={20} />
        <Progress colorScheme='green' size='md' value={20} />
        <Progress colorScheme='green' size='lg' value={20} />
        <Progress colorScheme='green' height='32px' value={20} />
    </Stack>);
}

export default skills;