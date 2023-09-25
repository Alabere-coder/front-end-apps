import Header from "./component/header";

export default function DashboardLayout({ children }) {
    return <section>
        <Header />
        {children}</section>
  }