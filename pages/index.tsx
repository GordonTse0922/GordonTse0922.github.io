import { Box, Container, Heading, Image, Link, layout, Button, AspectRatio, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, useColorModeValue, Badge } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/experience'
import * as CSS from 'csstype'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { GlitchedText } from '../components/glitchedText'



const Home: NextPage = () => {
  const expandableStyle: React.CSSProperties = {
    border: "1px solid",
    borderRadius: 5 + 'px',
    marginBottom: "10px",
    borderColor: useColorModeValue('black', 'white'),
  };
  return (
    <Container>
      <Box borderRadius="lg" p={3} mb={6} align="center">
        <GlitchedText >Hello, Welcome to Gordon&apos;s Home Page</GlitchedText>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ho Yin Tse, Gordon
          </Heading>
          <p>An oridnary person who can code, as simple as that</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight={100}
            display="inline-block"
            borderRadius="full"
            src="/images/gordon.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Gordon is a final-year student at <Link href="https://www.polyu.edu.hk/en/" isExternal>POLYU</Link> studying Information System with internship experiences specializing in <b>software development</b> using different languages
          while having experience on building data‐analysis school project such as <b>Nerual Network</b> and <b>Recommender System</b> (Code in {''}
          <Link href="https://github.com/GordonTse0922" isExternal>GitHub</Link>).
          I am also a tech enthusiast who loves Vim, Linux and OS X and enjoys to customize all of the development environments and editors.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2022/01 - Current</BioYear>
          College Intern @<Link href="https://dxc.com/us/en" isExternal>DXC Technology</Link>
        </BioSection>
        <BioSection>
          <BioYear>2021/01 - 2021/08</BioYear>
          Student Programmer @<Link href='https://www.hkbea.com/html/en/index.html' isExternal>Bank of East Asia</Link>
        </BioSection>
        <BioSection>
          <BioYear>2020/07 - 2020/08</BioYear>
          Software Engineer Intern @<Link href="https://cloudbreakr.com/" isExternal>Cloudbreakr</Link>
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Awards
        </Heading>
        <Accordion allowMultiple allowToggle>
          <AccordionItem style={expandableStyle}>
            <AccordionButton>
              <Box flex='1' textAlign='left' >
                <b>First Runner Up - Techathon 2021</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>In this competition, we have designed a smart cance for the visual impared with New Gen Tech such as 5G & IOT.</p>
              <br />
              The below is our promotional video used in our competition:
              <AspectRatio maxH={"300px"} maxW='530px' ratio={4 / 3}>
                <video
                  title='techathon'
                  src='/videos/[ZEN-X].mp4'
                  controls
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem style={expandableStyle}>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <b>Championship - Fresh Man Project Competition</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
             This a an inter-disciplinary competition with freshmans in the Enginnering Faculty. My team and I had built games using Rasperry Pi such as Racing and Pin Ball game.
             <br/><br/>
             The below is our short demo of the Pin Ball Game:
              <AspectRatio maxH={"600px"} maxW='530px' >
                <video
                  title='pinball'
                  src='/videos/pinball_trimmed.mp4'
                  controls
                  muted
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Section>
    </Container>
  )
}

export default Home
