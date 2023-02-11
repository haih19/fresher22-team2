import './content.scss'
import SearchCard from '../../../components/search/searchCard'
import SearchPagination from '../../../components/search/searchPagination'

function SearchContent(props) {
   const items = props.content
   return (
      <div className="search-content">
         <div className="search-content__list">
            {items === undefined || items === null
               ? null
               : items.results.map((item, index) => (
                    <SearchCard
                       key={index}
                       item={item}
                    />
                 ))}
         </div>
         <div className="search-content__pagiantion">
            <SearchPagination items={items} />
         </div>
      </div>
   )
}

export default SearchContent
