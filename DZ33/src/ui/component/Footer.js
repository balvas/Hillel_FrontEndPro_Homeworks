
// Parts
import Link from "./Link";
// Helpers
import { useStyles } from "../pages/useStyle";

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <ul className={classes.footerUl}>
                <li>Phone: <Link to="tel:+123123123">+123123123</Link></li>
                <li>Email: <Link to="mailto: someone@example.com">someone@example.com</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
