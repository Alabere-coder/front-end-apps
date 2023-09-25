"use client"

import { Tabs, Box, Text, Heading, Separator, Card, Flex, Button } from '@radix-ui/themes'
import { BsDatabase } from "react-icons/bs"
import { PiArrowSquareOutBold } from "react-icons/pi"



const DatabaseDashboard = () => {
    return (
        <div className='mx-4'>
            <Tabs.Root defaultValue="storage">
                <Tabs.List>
                    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="integrations">Integrations</Tabs.Trigger>
                    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
                    <Tabs.Trigger value="domains">Domains</Tabs.Trigger>
                    <Tabs.Trigger value="storage">Storage</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3" pb="2" className=''>
                    <Tabs.Content value="overview">
                        <div className='px-20'>
                            <Heading size="8">Overview</Heading>
                            <Text size="2">Make changes to your account.</Text>
                        </div>
                        <Separator my="3" size="4" />
                    </Tabs.Content>

                    <Tabs.Content value="integrations">
                        <div className='px-20'>
                        <Heading size="8" className=''>Integration</Heading>
                        <Text size="2">Access and update your documents.</Text>
                        </div>
                        <Separator my="3" size="4" />
                    </Tabs.Content>

                    <Tabs.Content value="activity">
                        <div className='px-20'>
                        <Heading size="8">Activity</Heading>
                        <Text size="3">Edit your profile or update contact information.</Text>
                        </div>
                        <Separator my="3" size="4" />
                    </Tabs.Content>

                    <Tabs.Content value="domains">
                        <div className='px-20'>
                            <Heading size="8">Domain</Heading>
                            <Text size="3">Edit your profile or update contact information.</Text>
                        </div>
                        <Separator my="3" size="4" />
                    </Tabs.Content>

                    <Tabs.Content value="storage">
                        <div className='flex items-center justify-between px-20'>
                            <div className=''>
                                <Heading size="8">Storage</Heading>
                                <Text size="3">Read and write directly to databases and from your projects.</Text>
                            </div>
                            <Button variant='surface' highContrast color='gray' radius='large'>Create Database</Button>
                        </div>
                        <Separator my="3" size="4" />
                        <div className='flex justify-center'>
                            <Card style={{ width: 1100}}>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='m-8 flex flex-col items-center gap-2'>
                                        <div className='h-16 w-16 border-2 flex items-center justify-center rounded-lg'>
                                            <BsDatabase className='h-10 w-10 ' />
                                        </div>
                                        <Heading>Create a database</Heading>
                                        <Text className='text-center'>Craete a database and stores that  you can connect to your team's project</Text>
                                    </div>
                                    
                                    <Card size="1" style={{ width: 500 }}>
                                        <Flex gap="3" align="center" direction="row" justify='between'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-lg'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box>
                                                    <Text as="div" size="2" weight="bold">
                                                        Edge Config
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        Ultra-low latency reads
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button variant="soft" color='gray' highContrast radius='large'>Create</Button>
                                        </Flex>
                                        
                                        <Separator my="3" size="4" />
                                        <Flex gap="3" align="center" direction="row" justify='between'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-lg'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box>
                                                    <Text as="div" size="2" weight="bold">
                                                        Postgres <Button variant='outline' radius='full' size='1'>Beta</Button>
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        Serverless SQL
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button variant="soft" color='gray' highContrast radius='large'>Create</Button>
                                        </Flex>
                                        <Separator my="3" size="4" />
                                        <Flex gap="3" align="center" direction="row" justify='between'>
                                            <div className='flex items-center gap-4'>
                                                <div className='h-12 w-12 border-2 flex items-center justify-center rounded-lg'>
                                                    <BsDatabase className='h-8 w-8 ' />
                                                </div>
                                                <Box>
                                                    <Text as="div" size="2" weight="bold">
                                                        Blob <Button variant='outline' radius='full' size='1' >Invite</Button>
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        Fast object storage
                                                    </Text>
                                                </Box>
                                            </div>
                                            <Button variant="soft" color='gray' highContrast radius='large'>Join Waitlist</Button>
                                        </Flex>
                                    </Card>
                                    <Card variant="surface" style={{ width: 500, margin: 20}}>
                                        <Flex justify='between' align="center">
                                            <Flex direction="column">
                                                <Text as="div" size="3" weight="bold">
                                                Browse Database Integrations
                                                </Text>
                                                <Text as="div" color="gray" size="3">
                                                Extend your database options even further.
                                                </Text>
                                            </Flex>
                                            <Button color='gray' variant='soft'><PiArrowSquareOutBold className='text-xl' /></Button>
                                        </Flex>
                                    </Card>
                                </div>
                            </Card>
                        </div>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </div>
    )
}

export default DatabaseDashboard