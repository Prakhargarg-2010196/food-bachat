import { Box, Button, Group, MantineProvider, PasswordInput, TextInput } from '@mantine/core';
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';

import Image from 'next/image';
import Navbar from  '../components/Navbar'
import authService from '../api/services/auth.service';
import foodTimer from '../public/foodTimer.gif'
import { redirect } from 'next/dist/server/api-utils';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SignupSeller = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const router = useRouter();
  const NavLinks = [
    {
      linkUrl: '/signUpSeller',
      linkText: 'Become a seller',
    },
    {
      linkUrl: '/loginSeller',
      linkText: 'Login as a seller',
    }
  ]
  const form = useForm({
    initialValues: {
      
      email: '',
      password: '',
      confirmPassword:'',
    },

    validate: {
      email: isEmail('Invalid email'),
      email: isNotEmpty('Email cannot be Empty'),
      password: hasLength({ min: 9 }, 'Invalid Password, Password should be minimum of 9 characters'), 
      // confirmPassword: matchesField('password', 'Passwords are not the same'),
    },
  });
  return (
       
    <div>
      <Navbar Links={NavLinks}></Navbar>
      <Box className='flex bg-red-300 py-5  gap-48 justify-center items-center'>
        <Group className=''>
          <Image className='rounded-full' alt="Illustration" src={foodTimer} width={200} height={200} />
        </Group>
        
        <Group className='flex flex-col'>
          <h1 className='text-center text-3xl '>Signup</h1>
          <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(async (e) => {
            
            const user = {
              email: email,
              username:email,
              password: password,
            };
            await authService.SignUp(user).then(
              () => {
                router.push('/loginSeller');
              },
              (error) => {
                if (error.response) {
                  console.log(JSON.stringify(error.message).replace(/^"|"$/g, ""));
                }
               
              }
            );
          
          })}>
            {/* {console.log(password)} */}
            <MantineProvider
              inherit
              theme={{
                components: {
                  InputWrapper: {
                    styles: (theme) => ({
                      label: {
                        color:'#1d3557'
                          
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
                color='#a2d2ff'
              mt="md"
              onChange={(event) => setEmail(event.target.value)}
              {...form.getInputProps('email')}
              />
             
            {/*password */}
            <PasswordInput
              label="Enter your password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              mt="md"
              withAsterisk
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps('password')}
            />
            {/*confirm password */}

            <PasswordInput
              label="Confirm your password"
              placeholder="Confirm your password"
              withAsterisk
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              mt="md"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps('confirmPassword')}
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

export default SignupSeller



