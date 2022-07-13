import Nav from "./Nav";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('Main navigation', ()=>{

    const renderApp = ()=> render(<Nav />, { wrapper: BrowserRouter })
    
    it('Renders nav item on the page', ()=>{
        renderApp()
        const Item = screen.getByTestId('nav');
        expect(Item).toBeInTheDocument();
        expect(Item).toBeTruthy();
    });

    it('Renders a link in nav item', ()=>{
        renderApp()
        const linkItem = screen.getByRole('link');
        expect(linkItem).toBeInTheDocument();
        expect(linkItem.textContent).toBe("RickAndMorty");
    });
})