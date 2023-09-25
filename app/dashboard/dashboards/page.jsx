"use client"
import React from 'react'
import DatabaseDashboard from './dashboard-pages/Db-dashboard'
import { Flex } from '@radix-ui/themes'

const HomeDashboards = () => {
  return (
    <Flex direction="column">
        <DatabaseDashboard />
    </Flex>
  )
}

export default HomeDashboards