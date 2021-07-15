import { Flex, Image, Box, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "./logo.svg"
export const NavBar = () => {
    return (
        <Flex bg="black" color="white" justifyContent="center">
            <Container>
                <Flex px={2} width="100%" alignItems="center">
                    <Image size={20} src={logo}/>
                    <Link component={StyledLink} variant="nav" to="/">
                        React CRUD App
                    </Link>
                    <Box mx="auto" />
                        <Link component={StyledLink} variant="nav" to="/create-book">
                            Add new item
                        </Link>
                </Flex>
            </Container>
        </Flex>
    )
}