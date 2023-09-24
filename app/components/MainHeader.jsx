import { Link } from "@radix-ui/themes"

const MainHeader = () => {
  return (
    <div>
      <nav
      className="flex items-center space-x-4 lg:space-x-6 "
    >
      <Link
        href="/dashboard"
        className="text-gray-800 text-sm font-medium transition-colors hover:text-primary hover:no-underline"
      >
        Overview
      </Link>
      <Link
        href="/dashboard"
        className="text-gray-800 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:no-underline"
      >
        Customers
      </Link>
      <Link
        href="/dashboard"
        className="text-gray-800 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:no-underline"
      >
        Products
      </Link>
      <Link
        href="/dashboard"
        className="text-gray-800 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:no-underline"
      >
        Settings
      </Link>
    </nav>
    </div>
  )
}

export default MainHeader
