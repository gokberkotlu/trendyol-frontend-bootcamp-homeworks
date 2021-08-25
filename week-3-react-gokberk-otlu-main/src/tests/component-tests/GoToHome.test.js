import { render, screen, fireEvent } from '@testing-library/react';
import GoToHome from '../../components/GoToHome';
import { BrowserRouter } from 'react-router-dom';

const MockGoToGome = () => {
    return (
        <BrowserRouter >
            <GoToHome />
        </BrowserRouter>
    )
}

describe("GoToHome", () => {
    it('should render input element', () => {
        render(
            <MockGoToGome />
        );
        const backButtonElement = screen.getByTestId("back-button-test");
        expect(backButtonElement).toBeInTheDocument();
    })
})