import { useLocation, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pagebuttons = [];
    // FIRST PAGE
    pagebuttons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    // DOTS before
    if (currentPage > 3) {
      pagebuttons.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }

    // ONE BEFORE CURENT PAGE
    if (currentPage !== 1 && currentPage !== 2) {
      pagebuttons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }

    // CURRENT PAGE
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pagebuttons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }

    // ONE AFTER CURRENT PAGE
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pagebuttons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }

    // DOTS after
    if (currentPage < numOfPages - 2) {
      pagebuttons.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }

    // LAST PAGE
    pagebuttons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );
    return pagebuttons;
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <FaChevronLeft />
        prev
      </button>
      <div className="btn-container">
        {/* {pages.map((pageNumber) => { */}
        {renderPageButtons()}
        {/* // })} */}
      </div>
      <button
        type="button"
        className="btn prev-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <FaChevronRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
