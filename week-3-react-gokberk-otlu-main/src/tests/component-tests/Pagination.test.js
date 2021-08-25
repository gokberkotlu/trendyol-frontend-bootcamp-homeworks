import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination';

describe("Pagination", () => {

    it('should render previous button element in the pagination component', () => {
        render(
            <Pagination />
        );
        const prevButton = screen.getByRole("button", { name: /Previous/i });
        expect(prevButton).toBeInTheDocument();
    })

    it('should render next button element in the pagination component', () => {
        render(
            <Pagination />
        );
        const nextButton = screen.getByRole("button", { name: /Next/i });
        expect(nextButton).toBeInTheDocument();
    })

    it('should render page status element in the pagination component', () => {
        render(
            <Pagination
                page={2}
                numberOfPages={5}
            />
        );
        const pageStatus = screen.getByText("2/5");
        expect(pageStatus).toBeTruthy;
    })

    it('should have disabled previous button attribute when on page 1', () => {
        render(
            <Pagination
                page={1}
            />
        );
        const prevButton = screen.getByRole("button", { name: /Previous/i });
        expect(prevButton).toHaveAttribute('disabled');
    })

    it('should have disabled next button attribute when on last page', () => {
        render(
            <Pagination
                page={4}
                numberOfPages={4}
            />
        );
        const nextButton = screen.getByRole("button", { name: /Next/i });
        expect(nextButton).toHaveAttribute('disabled');
    })
})