import { render } from '@testing-library/react';
import Footer from '../components/home/footer.jsx';
import { MemoryRouter } from 'react-router-dom';


describe('Footer tests', () => {
    test(`Footer matches snapshot`, () => {

        expect(render(<MemoryRouter><Footer /></MemoryRouter>)).toMatchSnapshot();
    });
})