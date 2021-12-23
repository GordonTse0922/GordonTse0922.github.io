import * as React from 'react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, SimpleGrid, Grid, GridItem, Button } from '@chakra-ui/react'
import { NextPage } from 'next'

const contact: NextPage = () => {
    return (
        <SimpleGrid columns={2} gap={2} rowGap={6} w={"full"}>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>First Name:</FormLabel>
                    <Input id='firstName' type='text' />

                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Last Name:</FormLabel>
                    <Input id='lastName' type='text' />
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Email:</FormLabel>
                    <Input id='email' type='text' />
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <FormControl>
                    <FormLabel>Message:</FormLabel>
                    <Textarea id='email' type='text' />
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
                <Button colorScheme="teal" size={"lg"}>Submit</Button>
            </GridItem>
        </SimpleGrid >
    );
}

export default contact;