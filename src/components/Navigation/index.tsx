import { Container, Group, Paper, UnstyledButton } from "@mantine/core";
import classes from "./style.module.scss";
import { navigate } from "vike/client/router";

export function Navigation() {
	return (
		<Container
			mt="xs"
			size="xl"
			strategy="grid"
			pos="sticky"
			component="nav"
			left={0}
			right={0}
			top={0}
			bottom={0}
			px={{ base: "sm", xl: 0 }}
			style={{
				zIndex: 1000,
			}}
		>
			<Paper
				p="lg"
				radius={100}
				style={{
					background: "rgba(0, 0, 0, 0.5)",
					backdropFilter: "blur(12px)"
				}}
			>
				<Group align="center" justify="center">
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/")}
					>
						Joe Goldberg
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/guinevere")}
					>
						Guinevere Beck
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/love")}
					>
						Love Quinn
					</UnstyledButton>
					<UnstyledButton
						className={classes.link}
						onClick={() => navigate("/marienne")}
					>
						Marienne Bellamy
					</UnstyledButton>
				</Group>
			</Paper>
		</Container>
	)
}