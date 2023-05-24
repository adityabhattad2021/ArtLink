import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;