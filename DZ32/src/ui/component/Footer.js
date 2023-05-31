
// Parts
import Link from "./Link";
// Helpers


function Footer() {

    return (
        <footer className="footer">

            <ul>
                <li>Phone: <Link to="tel:+123123123">+123123123</Link></li>
                <li>Email: <Link to="mailto: someone@example.com">someone@example.com</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
