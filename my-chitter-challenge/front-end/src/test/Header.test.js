import { render } from '@testing-library/react';
import Header from '../components/home/header';
import { MemoryRouter } from 'react-router-dom';

describe('Header tests', () => {
    test(`Header matches snapshot`, () => {

        expect(render(<MemoryRouter><Header /></MemoryRouter>)).toMatchSnapshot();
    });
})