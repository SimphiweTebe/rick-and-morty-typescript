import Nav from "./Nav";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('Main navigation', ()=>{

    render(<Nav />, { wrapper: BrowserRouter });
    const Item = screen.getByTestId('nav');

    it('Renders on the page', ()=>{
        expect(Item).toBeInTheDocument();
        expect(Item).toBeTruthy();
    });
})