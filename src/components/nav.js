import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { A } from '../components/elements';
import Image from 'next/image'
//import logoColourless from '../../public/logo.svg';

const NavBase = styled.nav`
    ${tw`fixed w-full top-0 left-0 py-4 flex`}
    border-bottom: 1px solid var(--dark);
    backdrop-filter: blur(5px);

    img {
        ${tw`mr-auto`}
    }

    a :not(:first-child) {
        ${tw`ml-6`}
    }
`;

export default function Nav() {
    return (
        <NavBase>
            <img src="/logoColourless.svg" />
            <A href="#about">About</A>
            <A href="#sponsors">Sponsors</A>
            <A href="#pricing">Pricing</A>
            <A href="#faq">FAQ</A>
        </NavBase>
    )
}