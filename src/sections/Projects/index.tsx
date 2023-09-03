import { createStyles, SimpleGrid, Image, Text, Container, Badge, Box, Button, Flex, Grid } from '@mantine/core';
import { AnimatePresence, motion } from "framer-motion";


export default function ArticlesCardsGrid() {

  const projects = [
    {
      name: "Image Captioning",
      title: "This is a imgage captioning application. where user can upload an image and the model will generate a caption for that image",
      img: "https://github.com/WhiteHacker-cmd/image-captioning/assets/63974207/29874e0c-cb89-4ffc-b639-6447e18721da",
      tags: ["Streamlit", "PyTorch", "Python", "LSTM", "Resnet50", "Docker"],
      live: "https://ic.agentak.in/",
      github: "https://github.com/WhiteHacker-cmd/image-captioning",
    },
  ];
  // const { classes } = useStyles();

  const cards = projects.map((project, index) => (
    <Box py={20} key={index} className="flex column gap-20 snapChild" w={"100%"}>
                        <Text size="sm">
                          0{index + 1}. {project.name}
                        </Text>
                        <motion.div
                          className="flex column gap-20"
                          style={{ opacity: 0, width: "100%", position: "relative" }}
                          whileInView={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <AnimatePresence>
                            <Box w={"100%"}>
                              <Grid>
                                <Grid.Col span={12}>
                                  <Image className="image" width={"100%"} height={"100%"} src={project.img} withPlaceholder />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                  <Box className="flex column gap">
                                    <Text size={"sm"} color="dimmed">
                                      {project.title}
                                    </Text>
                                    <Box>
                                      {project.tags.map((skill) => {
                                        return <Badge>+ {skill}</Badge>;
                                      })}
                                    </Box>
                                    <motion.div
                                      className="flex column gap-20"
                                      style={{ opacity: 0, width: "100%", position: "relative" }}
                                      whileInView={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: .6 }}
                                    >
                                      <Flex gap={10} mt={10}>
                                        {project.live && (
                                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <Button leftIcon="/">Live demo</Button>
                                          </a>
                                        )}
                                        {project.github && (
                                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" leftIcon="/">
                                              Github
                                            </Button>
                                          </a>
                                        )}
                                      </Flex>
                                    </motion.div>
                                  </Box>
                                </Grid.Col>
                              </Grid>
                            </Box>
                          </AnimatePresence>
                        </motion.div>
                      </Box>
  ));

  return (
    <>
    <section>
    <Container py="xl">
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </section>
    </>
  );
}