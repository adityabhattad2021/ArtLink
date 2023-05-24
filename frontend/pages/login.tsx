import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import logo from "../public/logo.svg";
import Image from 'next/image';
import Link from 'next/link';


function Login() {
    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack justify='center' spacing="6">
                    <Stack justify='center' alignItems='center'>
                        <Image src={logo} alt="logo" width={150} height={150} />
                    </Stack>
                    {/* {logo} */}
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Link href="/register">
                                <Button variant="link" colorScheme="blue">
                                    Sign up
                                </Button>
                            </Link>
                        </HStack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg-surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input id="password" type="password" />
                                </FormControl>
                                <Stack spacing="6">
                                    <Button variant="primary">Sign in</Button>
                                    <HStack>
                                        <Divider />
                                        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                            or continue with
                                        </Text>
                                        <Divider />
                                    </HStack>
                                    <Button>
                                        Google
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    )

}

export default Login;