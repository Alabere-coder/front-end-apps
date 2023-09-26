"use client";

import { Dialog, Text, Flex, Button, TextField, DialogClose, Separator } from "@radix-ui/themes";

const About = () => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button type="button" variant="classic" color="gray">About-Us</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>UI-Design</Dialog.Title>
          <Dialog.Description size="4">
            We've got you covered.
          </Dialog.Description>
          <Separator size="4" my="4"/>
          <Flex direction="column" gap="2">
            <Text size="3">Taking you a mile journey in just one step</Text>
            <Text size="3">This project is built for who wants to create UI without starting from scratch</Text>
          </Flex>

          <Flex justify="between" mt="6">
            <Button>Read-More</Button>
            <Flex gap="3" justify="end">
              <DialogClose>
                <Button variant="soft" color="gray">
                  Close
                </Button>
              </DialogClose>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default About;
