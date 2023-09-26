"use client"

import { Flex, Dialog, Text, TextField, Button, TextArea } from '@radix-ui/themes'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Flex>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button variant='classic' color='gray'>Contact Us</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Contact Me</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                    Please do drop a messase.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Name:
                        </Text>
                        <TextField.Input
                        placeholder="Enter your full name"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Email:
                        </Text>
                        <TextField.Input
                        placeholder="Enter your email"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Subject:
                        </Text>
                        <TextField.Input
                        placeholder="Subject"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                        Message:
                        </Text>
                        <Flex>
                            <TextArea
                            placeholder="Subject"
                            />
                        </Flex>
                    </label>

                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                        Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button>Submit</Button>
                    </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </Flex>
    </div>
  )
}

export default Contact