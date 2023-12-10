import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
	return (
		<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					{/* Left hand-side */}
					<Box display={{ base: "none", md: "block" }}>
						<Image src='https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/409520037_7002138439875004_332170159983166625_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHxLs-DxcfS4vBQZfAqrnrnRfxoRobG8vhF_GhGhsby-OuRhtablXCcwym4HM7veEBrGWPd0SLUKRemn8xcyyAA&_nc_ohc=jPLoYGXXIogAX85XI5W&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfD3DD33fWWDVbmVKoGS5uNprqr7gTcovk9J-37y7-pmew&oe=657A0274' h={650} alt='Phone img' />
					</Box>

					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
							<Image 
								src='https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/409527224_7002132516542263_3070847715579639675_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEA580vJCKw-Tujpkrtvb6DmYNSzR66hGyZg1LNHrqEbGqPM-_7aMkpRm8l5Xw6MQ7zFMq5Qb9YzdzVPkCzEARw&_nc_ohc=9bu-_V5Gm6EAX8crKqQ&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfDUXEeU9C3AL_12RSsuR0ThpqQ9_dSZiCYTt800IEcl4w&oe=657B4882' 
								h={"10"} 
								alt='Playstore logo' 
							/>
							<Image 
								src='https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/409547334_7002132519875596_1921601594597705185_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFJtrCwHIt8AmZSJPuzlxzhix-dC2JS7A2LH50LYlLsDT2IIAqbJqyIZi-HPqAub0BvjDtqwPmw22Uki7briUWl&_nc_ohc=_v7PLUZBShAAX80xVXI&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfAmFwFkH07uYKTsTfld6RM-rHSeVg-TAEPkL7cKT0bBvA&oe=657AA5CC' 
								h={"10"} 
								alt='Microsoft logo' 
							/>
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;
