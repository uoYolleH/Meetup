import { Button, Group, Image, Stack, Text, Title, SimpleGrid, List, Anchor, } from "@mantine/core";
import { modals } from "@mantine/modals";
import { Spacer } from "../../components/Spacer";
import artcrawl from "../../assets/img/artcrawl/guide-to-art-crawl-1.jpg";
import wonderland from "../../assets/img/wonderland/Wonderland.jpg";
import alpen from "../../assets/img/wonderland/1752157227-20250710-alpenfury-wonderland-opening-2.jpg";
import nightmare from "../../assets/img/wonderland/Nightmareeeeeeeees.webp";
import sledgehammer from "../../assets/img/wonderland/0812sldg.jpg";
import kart1 from "../../assets/img/gokart/trophy2.webp";
import kart2 from "../../assets/img/gokart/MG_2948-min-1024x683.webp";
import track from "../../assets/img/gokart/appointmentType-14371482.jpg";

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
                    styles={{
                        root: {
                            borderTopLeftRadius: '75px',
                            borderBottomRightRadius: '75px',
                        },
                    }}
                />
			</Group>
            <Group>
                <Stack>
                    <Title>Canada's Wonderland (hah)</Title>
                    <Text maw={670}>
                        This one is unlikely, but hear it out lmao. Wonderland is open all summer and has much more to do than roller coasters. Theres flat rides, arcades, bumper cars, short go karting, etc. Plus it could be a chance to go on a tame coaster and see if you can conquer your fears.
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
                        borderBottomRightRadius: "75px"
                    }}
                />
            </Group>
            <Group>
                <Stack>
                    <Title>Go Karting</Title>
                    <Text maw={670}>
                        Cameroon Speedway hosts a fast Go Karting season called "Canadian Mini Indy". This is far more exilerating than basic Go Karting due to its speed and changing track layouts.
                        <List>
                            <List.Item>Changing Track layout through season</List.Item>
                            <List.Item>Speeds of 75km+</List.Item>
                            <List.Item>Helmets are provided</List.Item>
                        </List>
                    </Text>
                    <Text maw={670}>
                        The season lasts from April 21st to October 26th. Pricing is on the higher end, with season membership being <b>$120</b> and every day you join is <b>$77</b>.
                        <br></br>
                        There are more than 200 days we can choose to race, with all weekday races starting at 6pm and weekend races starting at 10am. <Anchor href="https://hamiltonkartingcomplex.com/wp-content/uploads/Canadian-Mini-Indy-Racing-and-Practice-Schedule.pdf" target="_blank">Here is the schedule</Anchor> that shows all race days and special event days too.
                    </Text>
                </Stack>
                <Spacer />
                <Image
                    src={kart1}
                    w={500}
                    h={300}
                    onClick={() =>
                        modals.open({
                            title: "Go Kartingd",
                            size: "1100px",
                            centered: true,
                            children: (
                                <SimpleGrid cols={2} spacing={50}>
                                    <Image src={kart2} w={500} h={300} />
                                    <Image src={track} w={500} h={300} />
                                    <Image src={sledgehammer} w={500} h={300} />
                                </SimpleGrid>
                            ),
                        })
                    }
                    style={{
                        cursor: "pointer",
                        borderTopLeftRadius: "75px",
                        borderBottomRightRadius: "75px"
                    
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
            </Group>
            <Group>
                <Stack>
                    <Title>Cottage</Title>
                </Stack>
            </Group>
		</Stack>
	);
}