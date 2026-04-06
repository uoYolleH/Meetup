import { Button, Group, Image, Stack, Text, Title, SimpleGrid, List, Anchor, } from "@mantine/core";
import { modals } from "@mantine/modals";
import { Spacer } from "../../components/Spacer";
import kart1 from "../../assets/img/gokart/k1-speed-burbank-karting.jpg";
import kart2 from "../../assets/img/gokart/slide-3-karts-mobile.jpg";
import kart3 from "../../assets/img/gokart/606f23f4ef6fbe4de6c14c9024357f4b7b3ad702.webp";
import track from "../../assets/img/gokart/K1SpeedCambridge-KylePooleMedia-10-min.webp";
import toronto from "../../assets/img/BCC-2024-EXPLORER-TORONTO-BEST_PLACES_TO_VISIT-HEADER-MOBILE.webp";
import torontonight from "../../assets/img/Toronto_skyline,_2024_(52592814618).jpg";
import ripleys from "../../assets/img/download.jpg";
import torontosquare from "../../assets/img/unnamed.png";
import distillery from "../../assets/img/Daytime image of tree 2025.webp";

export default function Page() {
	return (
		<Stack gap={100}>
            <Title ta="center">All Year Things</Title>
            <Group>
                <Stack>
                    <Title>Toronto Adventures</Title>
                    <Text maw={670}>
                        Toronto has a lot to offer all year round. There are a lot of things to do in the city core and a lot to do in the surrounding areas. Some of the things we could do in the city are.
                        <List>
                            <List.Item>Try out local food places</List.Item>
                            <List.Item>Explore more niche areas</List.Item>
                            <List.Item>Go to typical places like Ripley's Aquarium</List.Item>
                            <List.Item>Go to parks like High Park</List.Item>
                            <List.Item>Go through the many malls and stores there are</List.Item>
                        </List>
                    </Text>
                    <Text maw={670}>
                        The price for doing stuff in Toronto would vary. Typically at minimum we would be looking at around <b>$10</b> for the GO Train ticket, and any other transit would be free transfers.
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={toronto}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Toronto",
                            size: "1100px",
                            centered: true,
                            transitionProps: { transition: "pop", duration: 200 },
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={torontonight} w={500} h={300} />
                                    <Image src={ripleys} w={500} h={300} />
                                    <Image src={torontosquare} w={500} h={300} />
                                    <Image src={distillery} w={500} h={300} />
                                </SimpleGrid>
                            ),
                        })
                    }
                    style={{
                        cursor: "pointer",
                        borderTopLeftRadius: "75px",
                        borderBottomRightRadius: "75px",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                />
            </Group>
            <Group>
                <Stack>
                    <Title>Go Karting</Title>
                    <Text maw={670}>
                        K1 Speed is an indoor Go Karting facility in locations like Mississauga, Kitchener, Cambridge, and Toronto. Each location has a different track layout.
                        <List>
                            <List.Item>Different tracks based on location</List.Item>
                            <List.Item>Speeds of 72km/h</List.Item>
                            <List.Item>Karts are electric</List.Item>
                            <List.Item>Helmets are provided</List.Item>
                        </List>
                    </Text>
                    <Text maw={670}>
                        K1 Speed is open all year round. Pricing is <b>$32.50</b> for 1 race, <b>$60</b> for 2 races, <b>$75</b> for 3 races, and <b>$79</b> for a Speedpass which gives 2 races, and a K1 Track License which is normally <b>$8.50</b>. 
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={kart1}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Go Karting",
                            size: "1100px",
                            centered: true,
                            transitionProps: { transition: "pop", duration: 200 },
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={kart2} w={500} h={300} />
                                    <Image src={track} w={500} h={300} />
                                    <Image src={kart3} w={500} h={300} />
                                </SimpleGrid>
                            ),
                        })
                    }
                    style={{
                        cursor: "pointer",
                        borderTopLeftRadius: "75px",
                        borderBottomRightRadius: "75px",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                />
            </Group>
            <Group>
                <Stack>
                    <Title>Casino</Title>
                    <Text maw={670}>
                        
                    </Text>
                    <Text maw={670}>
                        
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={toronto}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Toronto",
                            size: "1100px",
                            centered: true,
                            transitionProps: { transition: "pop", duration: 200 },
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={torontonight} w={500} h={300} />
                                    <Image src={ripleys} w={500} h={300} />
                                    <Image src={torontosquare} w={500} h={300} />
                                    <Image src={distillery} w={500} h={300} />
                                </SimpleGrid>
                            ),
                        })
                    }
                    style={{
                        cursor: "pointer",
                        borderTopLeftRadius: "75px",
                        borderBottomRightRadius: "75px",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                />
            </Group>
		</Stack>
	);
}