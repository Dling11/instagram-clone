import { Box, Button, Flex, Image, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramMobileLogo } from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"}>
				<Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<Image src='https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/409502847_7002132506542264_277847667301694275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHk8T2AGSgeAKU_RmumGN5QTxYXVEsMDMVPFhdUSwwMxcKBcncugmbjEI8tKaN1XsWXOgzaFHec2LE0RbyyPKNr&_nc_ohc=UQbzLfzkjWQAX-5BMN-&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfCWKzHbztVCsEnwVkVEoqGe1LMEnyUsdJ_b7qYfYZOV7w&oe=65799085' h={12} cursor={"pointer"} alt='hakerlogo' />
				</Link>
				<Link
					to={"/"}
					as={RouterLink}
					p={2}
					display={{ base: "block", md: "none" }}
					borderRadius={6}
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
					cursor='pointer'
				>
					<InstagramMobileLogo />
				</Link>
				<Flex direction={"column"} gap={5} cursor={"pointer"}>
					<SidebarItems />
				</Flex>

				{/* LOGOUT */}
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
						onClick={handleLogout}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							isLoading={isLoggingOut}
						>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
