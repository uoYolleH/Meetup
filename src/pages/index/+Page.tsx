import { Button, Group, Image, Stack, Text, Title, SimpleGrid } from "@mantine/core";
import { modals } from "@mantine/modals";
import { Spacer } from "../../components/Spacer";
import { TextInput } from '@mantine/core';

export default function Page() {
	return (
		<Stack gap={100}>
			<Title ta="center">Meetup Ideas</Title>
			<Group>
				<Stack>
				<TextInput
      				label="Input Idea"
      				description="Input any ideas "
      				placeholder="CNE"
    			/>
					<Text maw={670}>
						This website is meant to be a database for us to suggest things to do and vote on them, and then say whether we want to attend or not.
						There are 3 categories that events fall in to make it easier to organize, if you have an idea for something to do, put it in its respective category.
					</Text>
					<Button
  						onClick={() =>
    						modals.open({
      							title: "Joe's Apartment",
								size: "auto",
								centered: true,
      							children: (
									<SimpleGrid cols={2} spacing={50}>
									</SimpleGrid>
								),
    						})
  						}
					>
  						More
					</Button>
				</Stack>
				<Spacer />
			</Group>
			<Group>
				<Spacer />
				<Stack>
					<Title></Title>
					<Text maw={670}>
		
					</Text>
				</Stack>
			</Group>
		</Stack>
	);
}
