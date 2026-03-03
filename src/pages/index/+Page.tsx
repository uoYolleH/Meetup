import { Group, Image, Stack, Text, Title } from "@mantine/core";
import joeChild from "../../assets/img/joe/joe-child.jpg";
import joeApartment from "../../assets/img/joe/apartment.png";
import joeCap from "../../assets/img/joe/joe-cap.avif";
import joeRelationship from "../../assets/img/joe/joe-relationship.jpg";
import joeSmart from "../../assets/img/joe/joe-smart.jpg";
import { Spacer } from "../../components/Spacer";

export default function Page() {
	return (
		<Stack gap={100}>
			<Group>
				<Stack>
					<Title>About Joe Goldberg</Title>
					<Text maw={670}>
						Joe Goldberg is the central character of the series YOU. Told largely through his internal narration, his story shows both the charming persona he presents and the deeply disturbed logic that drives his actions. He is a character defined by contradiction.
					</Text>
				</Stack>
				<Spacer />
				<Image
					src={joeApartment}
					w={500}
					h={300}
					style={{
						borderTopLeftRadius: 75,
						borderBottomRightRadius: 75
					}}
				/>
			</Group>
			<Group>
				<Image
					src={joeCap}
					w={500}
					h={300}
					style={{
						borderBottomLeftRadius: 75,
						borderTopRightRadius: 75
					}}
				/>
				<Spacer />
				<Stack>
					<Title>Personality</Title>
					<Text maw={670}>
						Joe's traumatic upbringing heavily shapes who he becomes. He grew up in an abusive household with an unstable mother and a violent father figure. As a child, he experienced neglect, manipulation, and physical abuse. Eventually, he killed his mother's abusive partner in what he believed was an act of protection
					</Text>
					<Text maw={670}>
						Afterward, Joe was put in the system and fled to the care of Mr. Mooney, the owner of a bookstore, who became a strict and emotionally cold parent figure. Mr. Mooney punished Joe harshly, sometimes locking him in a glass cage in the basement as discipline. These experiences deeply warped Joe's understanding of love, authoirty, and safety. He learned to associate control with care and violence with protection, forming the foundation for his adult behaviour.
					</Text>
				</Stack>
			</Group>
			<Group>
				<Stack>
					<Title>Childhood and Psychological Background</Title>
					<Text maw={670}>
						Joe often appears soft-spoken, intelligent, and thoughtful. He is well-read, observant, and emotionally perceptive, often noticing subtle details about people that others miss. This awareness helps him quickly build intimacy and gain trust. On the surface, he seems like an ideal partner-attentive, protective, and deeply invested.
					</Text>
					<Text maw={670}>
						However, beneath that exterior lies extreme possessiveness and a compulsive need for control. Joe does not believe in boundaries when it comes ot love. He convinces himself that invasion of privacy, manipulation, and murder are acceptable if they protect his relationship or remove obstacles. His defining trait is rationalization: he constantly reframes his actions as moral, necessary, or noble. In his mind he is a romantic hero fixing broken situations.
					</Text>
				</Stack>
				<Spacer />
				<Image
					src={joeChild}
					w={500}
					h={300}
					style={{
						borderTopLeftRadius: 75,
						borderBottomRightRadius: 75
					}}
				/>
			</Group>
			<Group>
				<Image
					src={joeRelationship}
					w={500}
					h={300}
					style={{
						borderBottomLeftRadius: 75,
						borderTopRightRadius: 75
					}}
				/>
				<Spacer />
				<Stack>
					<Title>Relationships and Obsession</Title>
					<Text maw={670}>
						Joe does not just simply only fall in love, he becomes obsessed. He meets a woman, idealizes her, studies her life in secret, inserts himself into her world, and eliminates percieved threats. His relationships begin with intenst admiration but quickly turn into surveillance and control.
					</Text>
					<Text maw={670}>
						He monitors social media, steals personal belongings, and tracks movements. When contronted with flaws or rejection, he struggles to reconcile reality with his fantasy. If the person he loves fails to match his idealized image, he either tries to fix them or becomes disillusioned. Often, this leads to violence.
					</Text>
				</Stack>
			</Group>
			<Group>
				<Stack>
					<Title>Intelligence and Methods</Title>
					<Text maw={670}>
						Joe is highly intelligent and methodical. He adapts quickly to new environments and identities, allowing him to escape consequences multiple times. He works in professions that align with his interests—bookstores, libraries, academia—places that reinforce his thoughtful, intellectual image.
					</Text>
					<Text maw={670}>
						He is skilled at manipulating social situations and reading emotional vulnerabilities. He often isolates his romantic interests from friends or partners by subtly influencing circumstances. His calm demeanor allows him to deflect suspicion, making him especially dangerous. Unlike impulsive killers, Joe plans carefully and justifies every action through an internal moral code that makes sense only to him.
					</Text>
				</Stack>
				<Spacer />
				<Image
					src={joeSmart}
					w={500}
					h={300}
					style={{
						borderTopLeftRadius: 75,
						borderBottomRightRadius: 75
					}}
				/>
			</Group>
		</Stack>
	);
}
