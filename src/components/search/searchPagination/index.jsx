import {useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import {useLocation, useSearchParams} from 'react-router-dom'
import {searchToObject} from '../../../helpers/param'
import './searchPagination.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

function SearchPagination(props) {
   const items = props.items
   const [, setSearchParam] = useSearchParams()
   const location = useLocation()

   const handlePageClick = (x) => {
      setSearchParam({query: searchToObject(location.search).query, page: x.selected + 1})
   }

   return (
      <div className="search-pagination">
         <ReactPaginate
            onPageChange={handlePageClick}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={25}
            marginPagesDisplayed={3}
            pageRangeDisplayed={6}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}
         />
      </div>
   )
}

export default SearchPagination