import Card from '../components/Card';

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite,onAddToCart}) {
  return  (
    <div className="content  p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        {searchValue && (
          <img
            onClick={() => setSearchValue('')}
            className="clear"
            src="/img/btn-remove.svg"
            alt="Clear"
          />
        )}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
      </div>
    </div>
    <div className="d-flex flex-wrap">
      {items
        .filter((item) => item.title.toLowerCase().includes(searchValue))
        .map((item, index) => (
          <Card
            key={index}            
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
           {...item}
          />
        ))}
    </div>
  </div>
  )
}

export default Home