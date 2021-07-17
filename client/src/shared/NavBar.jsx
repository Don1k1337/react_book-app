import { Flex, Image, Box, Button, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "./logo.svg"
export const NavBar = () => {
    return (
        <Flex bg="#323999" color="white" justifyContent="center">
            <Container>
                <Flex px={3} width="100%" >
                    <Link component={StyledLink} variant="nav" to="/" alignItems="center">
                        React Book CRUD App
                    </Link>
                    <Box mx="auto" />
                        <Link component={StyledLink} variant="nav" to="/create-book">
                            <Button backgroundColor="#277f33">Add new book</Button>
                        </Link>
                </Flex>
            </Container>
        </Flex>
    )
}