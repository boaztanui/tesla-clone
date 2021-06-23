import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
   


    return (
        <HeaderContainer>
            <a>
                <img src="/images/logo.svg" alt="" />
            
            </a>
            <MenuContainer>
                {cars && cars.map(( car, index) => (
                    <a key={index} href="#"> {car}</a>
                    ))}
               
            </MenuContainer>

            <RightMenuContainer>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenuContainer>

            <BurgerNav show={burgerStatus}>
                <CustomWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CustomWrapper>
                {cars && cars.map(( car, index) => (
                    <li><a key={index} href="#">{car}</a></li>
                    ))}

                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in Inventory</a></li>
                    <li><a href="#">Cyber Truck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Support</a></li>
            </BurgerNav>
            
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    min-height: 6rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    top:0;
    left: 0;
    right: 0;
    z-index: 1;

    `;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    


    > a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: var(--color-primary);
    }

    @media(max-width: 48em){
        display: none;
    }
`;

const RightMenuContainer = styled.div`
    display: flex;
    align-items:Center;


 > a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 1rem;
        color: var(--color-primary);
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const CustomWrapper = styled.div`
    display: flex;
   justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
   cursor: pointer;
   
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0; 
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 30rem;
    z-index: 100;
    list-style: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    > li{
        padding: 1.5rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        color: var(--color-primary);

        > a {
            font-weight: 600;
            color: inherit;
        }

    }

`;