import { Box, Button, Group, NumberInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { useState } from 'react';

const OtpScreen = () => {
    const [otp, setOTP] = useState('');

    const form = useForm({
        initialValues: {

            otp:'',
        },

        validate: {
            otp: isNotEmpty('OTP cannot be Empty'),
        },
    });
    return (
        <Box>
            <h1 className='text-center'>Forgot Password</h1>
            <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { })}>

                <Group position="center" mt="md">
                    <h1 >Enter your OTP which has to be sent on your mail</h1>
                </Group>
                <NumberInput
                    label="Your OTP"
                    placeholder="Enter Your OTP"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('otp')}
                />

                <Group position="center" mt="md">
                    <Button type="submit" className='bg-black '>Submit</Button>
                </Group>
            </Box>
        </Box>
    )
}

export default OtpScreen



