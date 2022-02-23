import React, { useEffect, useState } from 'react';
import {
    HiOutlineDotsVertical,
    HiOutlineSearch,
    HiOutlineUser,
} from 'react-icons/hi/index';
import { IoHeartOutline, IoBagOutline } from 'react-icons/io5/index';
import {
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarNav,
    NavbarToggler,
    NavWrapper,
    NavItemIcon,
    NavItemText,
    NavItemContainer,
} from './extra';
import { Container } from '../container/extra';
import {
    DropdownMenu,
    DropdownCaret,
    DropdownMenuArrow,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../dropdown/index';
import { Link } from 'react-router-dom';

const NavbarBase = () => {
    const [navCollapse, setNavCollapse] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', updateCollapse);
        return function cleanup() {
            window.removeEventListener('resize', updateCollapse);
        };
    });

    const updateCollapse = () => {
        window.innerWidth < 993 && navCollapse ? setNavCollapse(true) : setNavCollapse(false);
    };

    return (
        <Navbar variant={navCollapse ? 'white' : 'transparent'} expand='lg'>
            <Container variant='fluid'>
                <NavWrapper>
                    <NavbarBrand as={Link} to='/'>
                        Fashion Club
                    </NavbarBrand>
                </NavWrapper>
                <NavbarToggler
                    data-toggle='collapse'
                    data-target='#authNav'
                    aria-expanded={navCollapse ? 'true' : 'false'}
                    aria-label='Toggle navigation'
                    onClick={(e) => setNavCollapse(!navCollapse)}
                >
                    <HiOutlineDotsVertical />
                </NavbarToggler>
                <NavbarCollapse
                    css={
                        navCollapse
                            ? { opacity: 1, maxHeight: '100vh' }
                            : {
                                maxHeight: '0',
                                opacity: 0,
                                '@lg': { maxHeight: 'unset', opacity: 'unset' },
                            }
                    }
                >
                    <NavbarNav css={{ ml: 'auto' }}>

                        <>
                            <NavItemContainer>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <NavItem css={{ my: '$1' }}>
                                            <NavItemText>Men</NavItemText>
                                            <DropdownCaret css={{ ml: 5 }} />
                                        </NavItem>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Item 1</DropdownMenuItem>
                                        <DropdownMenuItem>Item 2</DropdownMenuItem>
                                        <DropdownMenuItem>Item 3</DropdownMenuItem>
                                        <DropdownMenuArrow />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavItemContainer>
                            <NavItemContainer>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <NavItem css={{ my: '$1' }}>
                                            <NavItemText>Women</NavItemText>
                                            <DropdownCaret css={{ ml: 5 }} />
                                        </NavItem>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Item 1</DropdownMenuItem>
                                        <DropdownMenuItem>Item 2</DropdownMenuItem>
                                        <DropdownMenuItem>Item 3</DropdownMenuItem>
                                        <DropdownMenuArrow />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavItemContainer>
                            <NavItemContainer>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <NavItem css={{ my: '$1' }}>
                                            <NavItemText>Kids</NavItemText>
                                            <DropdownCaret css={{ ml: 5 }} />
                                        </NavItem>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Item 1</DropdownMenuItem>
                                        <DropdownMenuItem>Item 2</DropdownMenuItem>
                                        <DropdownMenuItem>Item 3</DropdownMenuItem>
                                        <DropdownMenuArrow />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </NavItemContainer>
                            <NavItemContainer>
                                <NavItem>
                                    <NavItemText>Beauty</NavItemText>
                                </NavItem>
                            </NavItemContainer>
                        </>

                    </NavbarNav>
                    <NavbarNav css={{ ml: 'auto' }}>
                        
                            <>
                                <NavItemContainer css={{ px: '1rem', borderRight: '1px solid $gray400' }}>
                                    <NavItem>
                                        <NavItemIcon as={HiOutlineSearch} />
                                    </NavItem>
                                </NavItemContainer>
                                <NavItemContainer css={{ px: '1rem', borderRight: '1px solid $gray400' }}>
                                    <NavItem onClick={() => localStorage.removeItem('token')}>
                                        <NavItemIcon as={HiOutlineUser} />
                                    </NavItem>
                                </NavItemContainer>
                                <NavItemContainer css={{ px: '1rem', borderRight: '1px solid $gray400' }}>
                                    <NavItem>
                                        <NavItemIcon as={IoHeartOutline} />
                                    </NavItem>
                                </NavItemContainer>
                                <NavItemContainer css={{ px: '1rem' }}>
                                    <NavItem>
                                        <NavItemIcon as={IoBagOutline} />
                                    </NavItem>
                                </NavItemContainer>
                            </>
                        
                    </NavbarNav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default NavbarBase;