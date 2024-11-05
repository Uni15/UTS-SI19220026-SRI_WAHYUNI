import React from "react";
import Navlink from "./Navlink";
import Tombol from './atoms/tombol';
import Logo from './Logo';

export default function Navbar() {
    return (
        <nav className="d-flex justify-content-between py-4 px-3">
            <div className="">
                <Logo href="" src="https://w7.pngwing.com/pngs/438/468/png-transparent-forest-trees-logo-01.png" width="100px" />
            </div>
            <div className="">
                <ul className="d-flex">
                    <Navlink>Beranda</Navlink>
                    <Navlink>Produk</Navlink>
                    <Navlink>Tentang</Navlink>
                </ul>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <Tombol className="btn btn-outline-primary">Log in</Tombol>
                <Tombol className="btn btn-primary">Register</Tombol>
            </div>
        </nav >
    );
}