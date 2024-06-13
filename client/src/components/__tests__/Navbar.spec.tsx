import { render, screen } from '@testing-library/react';
import { vi, beforeAll, it, describe, expect } from 'vitest';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('Navbar component', () => {
    //@ts-ignore 
    let component: RenderResult;
    let navBar: HTMLElement;
    let searchBar: HTMLElement;
    let user: HTMLElement;
    let menu: HTMLElement;
    const navigate = vi.mocked(useNavigate);
    const connect = vi.fn()
    //@ts-ignore 
    let navLink: any;
    const address: Boolean = true;
        

    beforeAll(() => {
        //@ts-ignore 
        component = render(<Navbar address={address} connect={connect} />);
    });

    it('renders the navbar component', () => {

        // Check if the navbar elements are present
        expect(screen.getByTestId('qa-navbar')).toBeTruthy(); 
        expect(screen.getByTestId('qa-navbar_search-bar')).toBeTruthy();
        expect(screen.getByTestId('qa-navbar_menu')).toBeTruthy();
        expect(screen.getByTestId('qa-navbar_user')).toBeTruthy();

        // Check if the navigation links are present
        const navLinks = screen.getAllByRole('listitem');
        expect(navLinks.length).toBeGreaterThan(0);
    });

    it('handles navigation when clicking on a navigation link', () => {
        navLink = screen.getByText('dashboard'); // Replace with the actual navigation link text
        navLink.click();

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith('/dashboard'); // Replace with the actual navigation link path
    });

    it('handles button click for creating a campaign or connecting', () => {
        //@ts-ignore
        render(<Navbar address={address} connect={connect} />);

        const createCampaignButton = screen.getByText('Create a campaign');
        createCampaignButton.click();

        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith('create-campaign');

        // Uncomment the following lines if the connect function needs to be tested
        // const connectButton = screen.getByText('Connect');
        // connectButton.click();
        // expect(connect).toHaveBeenCalledTimes(1);
    });
});