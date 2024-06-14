import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterAll, beforeEach } from 'vitest';
import Sidebar from '../Sidebar';
//@ts-ignore
import { navlinks } from '../../constants/index.js';


const navigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal()
    return {
        //@ts-ignore
        ...actual,
        useNavigate: () => navigate,
    }
})

describe('Sidebar', () => {
    //@ts-ignore 
    let component: RenderResult;

    beforeEach(() => {
        //@ts-ignore 
        component = render(<BrowserRouter><Sidebar /></BrowserRouter>);
    });

    it('renders the sidebar component ', () => {
        expect(component).toBeTruthy();
    });

    // Fix test as it is not registering the path for link
    it.skip('navigates correctly on link click', () => {
        //@ts-ignore
        navlinks.forEach(link => {
            if (!link.disabled) {
                const linkElement = component.getByTestId(`qa-sidebar_icon-${link.name}`);
                fireEvent.click(linkElement);
                expect(navigate).toHaveBeenCalledWith(link.link);
            }
        });
    });


    it('does not navigate on disabled link click', () => {
        //@ts-ignore
        const disabledLink = navlinks.find(link => link.disabled);
        if (disabledLink) {
            const linkElement = component.getByTestId(`qa-sidebar_icon-${disabledLink.name}`);
            fireEvent.click(linkElement);
            expect(navigate).not.toHaveBeenCalledWith(disabledLink.link);
        }
    });

    afterAll(() => {
        component.unmount();
        cleanup();
    });
});