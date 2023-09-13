'use client'

import { Heading, Table, Tabs, Text, Button, Card } from "@radix-ui/themes"

const Dashboard = () => {
  return (
    <div>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search />
              <UserNav /> */}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
              <Button>Download</Button>
            </div>
          </div>
          <Tabs.Root defaultValue="overview" className="space-y-4">
            <Tabs.List>
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="analytics" disabled>
                Analytics
              </Tabs.Trigger>
              <Tabs.Trigger value="reports" disabled>
                Reports
              </Tabs.Trigger>
              <Tabs.Trigger value="notifications" disabled>
                Notifications
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <Heading className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">
                      Total Revenue
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </Heading>
                  <div>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </div>
                </Card>
                <Card>
                  <Heading className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">
                      Subscriptions
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </Heading>
                  <div>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </div>
                </Card>
                <Card>
                  <Heading className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">Sales</Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </Heading>
                  <div>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </div>
                </Card>
                <Card>
                  <Heading className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">
                      Active Now
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </Heading>
                  <div>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </div>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <Heading>
                    <Text>Overview</Text>
                  </Heading>
                  <div className="pl-2">
                    {/* <Overview /> */}
                  </div>
                </Card>
                <Card className="col-span-3">
                  <Heading>
                    <Text>Recent Sales</Text>
                    <Text>
                      You made 265 sales this month.
                    </Text>
                  </Heading>
                  <div>
                    {/* <RecentSales /> */}
                  </div>
                </Card>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
)
}


export default Dashboard
