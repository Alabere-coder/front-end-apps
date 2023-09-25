"use client"

import { Flex, Link, Separator } from "@radix-ui/themes"

const Header = () => {
  return (
    <div>
        <Flex gap="5" ml="8" my="4">
            <Link href="/dashboard/dashboards" color="gray" weight="bold">
            Dashboards
            </Link>
            <Link href="/dashboard/music" color="gray" weight="bold">
            Music
            </Link>
            <Link href="/dashboard/forms" color="gray" weight="bold">
            Forms
            </Link>
        </Flex>
        <Separator size="4" mb="4"/>
    </div>
  )
}

export default Header