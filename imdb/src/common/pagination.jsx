import React from 'react';

const Pagination = (props) => {
    // pages is 
    const{pages, currentPage , onPageSelect} = props;

    const items = [];

    for(let i = 1; i <= pages; i++){
        items.push(
            <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                <a 
                    className="page-link" 
                    onClick={() => onPageSelect(i)}
                >
                    {i}
                </a>
            </li>
        )
    }

    return ( 
        <>
            {pages > 0 ? (
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <a 
                                className="page-link"
                                onClick={() => onPageSelect(currentPage-1)}
                            >
                                Previous
                            </a>
                        </li>

                        {items}

                        <li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
                            <a
                                className="page-link" 
                                onClick={() => onPageSelect(currentPage+1)}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            ) : (
                <></>
            )}
        </>
     );
}
 
export default Pagination;