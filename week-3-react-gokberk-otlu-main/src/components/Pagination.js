const Pagination = ({page, numberOfPages, previousPage, nextPage}) => {
    return (
        <div className="pagination-container">
            { <button className="previous-button" onClick={previousPage} disabled={page === 1}>Previous</button>}
            <span>{ page }/{ numberOfPages }</span>
            { <button className="next-button" onClick={nextPage} disabled={page === numberOfPages}>Next</button>}
        </div>
    );
}
 
export default Pagination;