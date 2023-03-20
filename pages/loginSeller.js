import { Box, Button, Group, MantineProvider, PasswordInput, TextInput } from '@mantine/core';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import authService from '../api/services/auth.service';
import foodTimer from '../public/foodTimer.gif'
import {useForm} from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LoginSeller = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const NavLinks = [
        {
            linkUrl: '/',
            linkText: 'Become a seller',
        },
        
    ]
    const form = useForm({
        initialValues: {

            email: '',
            password: '',
        },
    });

    return (

        <div>
            <Navbar Links={NavLinks}></Navbar>
            <Box className='flex bg-red-300  py-5 gap-48 justify-center items-center'>
                <Group className=''>
                    <Image className='rounded-full' alt="Illustration" src={foodTimer} width={200} height={200} />
                </Group>

                
                <Group className='flex flex-col'>
                    <h1 className='text-center text-3xl'>Login</h1>
                    <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(async (e) => {
                       
                        const user = {
                            username: email,
                            password: password,
                        };
                        await authService.LogIn(user).then(
                            (response) => {
                              
                                const { userId } = response.data;
                                // console.log(userId);
                                 if (response.data.token) {
                                    const { token } = response.data;
                                    localStorage.setItem("user", JSON.stringify(token));
                                    localStorage.setItem("isAuthenticatedLogin", true);
                                    
                                 }
                                router.push("/DashBoard");
                            },
                            (error) => {
                                if (error.response) {
                                    console.log(error);
                               }
                               
                            }
                        );
                    })}>
                        
                        <MantineProvider
                            inherit
                            theme={{
                                components: {
                                    InputWrapper: {
                                        styles: (theme) => ({
                                            label: {
                                                color: '#1d3557'

                                            },
                                        }),
                                    },

                                    Input: {
                                        styles: (theme) => ({
                                            input: { borderColor: theme.colors.violet[theme.fn.primaryShade()] },
                                        }),
                                    },
                                },
                            }}
                        >
                        <TextInput
                            label="Your email"
                            placeholder="Your email"
                            value={email}
                            withAsterisk
                            mt="md"
                            onChange={(event) => setEmail(event.currentTarget.value)}
                            // {...form.getInputProps('email')}
                        />
                        {/*password */}
                        <PasswordInput
                            label="Enter your password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)}
                            mt="md"
                            withAsterisk
                            // {...form.getInputProps('password')}
                            />
                            </MantineProvider>
                        <Group position="center" mt="md">
                            <Button type="submit" className='bg-black '>Submit</Button>
                        </Group>
                    </Box>
                </Group>
            </Box>
        </div>



    )
}

export default LoginSeller



