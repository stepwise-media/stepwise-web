import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link href="/" className="navbar-brand">
                <img src="logo.svg" alt="logo" />
            </Link>
            <div className="navbar-nav">
                <Link href="/analytics-measurement" className="nav-link">
                    Measured Analytics
                </Link>
                <Link href="/web-development" className="nav-link">
                    Custom Development
                </Link>
                <Link href="/signature-management" className="nav-link">
                    Signature Management
                </Link>
                <Link href="/blog" className="nav-link">
                    Blog
                </Link>
            </div>
        </nav>
    );
}
export default Navbar;
