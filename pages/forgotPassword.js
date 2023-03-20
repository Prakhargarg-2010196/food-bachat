import { Box, Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

import { useState } from 'react';

const OtpScreen = () => {
    const [email, setEmail] = useState('');
    const form = useForm({
        initialValues: {

            email: '',
        },

        validate: {
            email: isEmail('Invalid email'),
            email: isNotEmpty('Email cannot be Empty'),
        },
    });
    return (
        <Box>
            <h1 className='text-center'>Forgot Password</h1>
            <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { })}>

                <Group position="center" mt="md">
                    <h1 >Enter your email on which OTP has to be sent</h1>

                </Group>
                <TextInput
                    label="Your email"
                    placeholder="Enter Your email"
                    withAsterisk
                    mt="md"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    value={email}
                    {...form.getInputProps('email')}
                />
                
                <Group position="center" mt="md">
                    <Button type="submit" className='bg-black '>Submit</Button>
                </Group>
            </Box>
        </Box>
    )
}

export default OtpScreen



