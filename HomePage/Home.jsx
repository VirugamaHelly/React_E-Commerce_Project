import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import HomeAcce from './H_MobileP/HomeAcce';
import NewArrPhone from './H_MobileP/NewArrPhone';
import SmartTV from './H_MobileP/SmartTV/SmartTV';
import SmartWatch from './H_MobileP/SmartWatch/SmartWatch';
import Airdopes from './H_MobileP/ Airdopes/Airdopes';
import Footer from './H_MobileP/Footer/Footer';
import HomePhone from './H_MobileP/HomePhone';
import Loder from './Loder/Loder';
import SearchBar from './Menu_img/SearchBar';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('default'); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const allItems = [
      { component: <HomePhone />, name: 'Iphone' },
      { component: <HomeAcce />, name: 'Accessories' },
      { component: <NewArrPhone />, name: 'Phone' },
      { component: <SmartTV />, name: 'SmartTV' },
      { component: <SmartWatch />, name: 'SmartWatch' },
      { component: <Airdopes />, name: 'Airdopes' }
    ];

    let filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === 'ascending') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'descending') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredItems(filtered);
  }, [search, sortOrder]);

  function handleSortChange(event) {
    const order = event.target.value;
    setSortOrder(order);
  }

  return (
    <div>
      {loading ? (
        <Loder />
      ) : (
        <>
          <SearchBar search={search} setSearch={setSearch} />
          <Slider />
          <div className="sort-section">
            <form>
              <label htmlFor="sort">Sort by name: </label>
              <select
                name="sort"
                id="sort"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="default">Default</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </form>
          </div>
          {filteredItems.map((item, index) => (
            <div key={index}>{item.component}</div>
          ))}
          <Footer />
        </>
      )}
    </div>
  );
}
