import { Button, Group, Image, Stack, Text, Title, SimpleGrid, List, Anchor, } from "@mantine/core";
import { modals } from "@mantine/modals";
import { Spacer } from "../../components/Spacer";
import artcrawl from "../../assets/img/artcrawl/guide-to-art-crawl-1.jpg";
import wonderland from "../../assets/img/wonderland/Wonderland.jpg";
import alpen from "../../assets/img/wonderland/1752157227-20250710-alpenfury-wonderland-opening-2.jpg";
import nightmare from "../../assets/img/wonderland/Nightmareeeeeeeees.webp";
import sledgehammer from "../../assets/img/wonderland/0812sldg.jpg";
import kart1 from "../../assets/img/gokart/k1.jpg";
import kart2 from "../../assets/img/gokart/slide-3-karts-mobile.jpg";
import kart3 from "../../assets/img/gokart/606f5055-e1510130239335.jpg";
import track from "../../assets/img/gokart/K1SpeedCambridge-KylePooleMedia-10-min.webp";
import med1 from "../../assets/img/medievaltimes/Ticket+2.webp";
import med2 from "../../assets/img/medievaltimes/MT-8957_web.jpg";
import med3 from "../../assets/img/medievaltimes/Medieval-Times-Toronto-3-1-620x413.jpg";

export default function Page() {
	return (
		<Stack gap={100}>
            <Title ta="center">Spring/Summer Things</Title>
			<Group>
				<Stack>
                    <Title>Art Crawl</Title>   
                    <Text maw={670}>
                        Art Crawl happens on the second Friday of every month on James Street North. It has local artists, galleries, musicians, street performers, and food vendors.
                        <List>
                            <List.Item>Galleries</List.Item>
                            <List.Item>Local Vendors</List.Item>
                            <List.Item>Performers</List.Item>
                        </List>
                    <br></br>
                    Prices can vary depending on what you purchase, but in general it is <b>free</b> to enter.
                    </Text>
                </Stack>
                <Spacer />
                <Image 
                    src={artcrawl} 
                    w={500} 
                    h={300}
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
                    <Title>Canada's Wonderland</Title>
                    <Text maw={670}>
                        Wonderland is open all summer and has much more to do than roller coasters. Theres flat rides, arcades, bumper cars, short go karting, etc.
                        <List>
                            <List.Item>Roller Coasters</List.Item>
                            <List.Item>Flat Rides (such as spinning cups, spinovator, sledgehammer)</List.Item>
                            <List.Item>Arcades</List.Item>
                            <List.Item>Other stuff such as go karts and bumper cars</List.Item>
                        </List>
                        <br></br>
                        Prices can vary due to additions you can tack on to your ticket. A daily ticket will be <b>$45</b> base, however there is 1 addition I recommend. I recommend adding a Fast Lane pass as it will lower line wait times from 30+mins to less than 5, this pass costs <b>$79</b>.
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={wonderland}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Canada's Wonderland",
                            size: "1100px",
                            centered: true,
                            transitionProps: { transition: "pop", duration: 200 },
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={alpen} w={500} h={300} />
                                    <Image src={nightmare} w={500} h={300} />
                                    <Image src={sledgehammer} w={500} h={300} />
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
                    <Title>Medieval Times</Title>
                    <Text maw={670}>
                        Medieval Times is a restaurant with a tournament show. Good selection of food to pick from, and we sit in stands as we watch gladiators fight in the arena. Medieval Times is located by Downtown Toronto at Exhibition.
                    <List>
                        <List.Item>Gladiator Fight</List.Item>
                        <List.Item>Great Food Options</List.Item>
                        <List.Item>Buyable Gear</List.Item>
                    </List>
                    <br></br>
                    For Medieval Times, the tickets are usually <b>$80-$95</b> however the prices can rise to <b>$150+</b> depending on your package and extras.
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={med1}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Medieval Times",
                            size: "1100px",
                            centered: true,
                            transitionProps: { transition: "pop", duration: 200 },
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={med2} w={500} h={300} />
                                    <Image src={med3} w={500} h={300} />
                                    <Image src={sledgehammer} w={500} h={300} />
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
                    <Title>Cottage</Title>
                </Stack>
            </Group>
		</Stack>
	);
}