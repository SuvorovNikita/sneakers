import Card from '../components/Card';
import React from 'react';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const { onAddToFavorite } = React.useContext(AppContext);
  const [isLoading, setIsLoding] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://61a4d9d34c822c0017041f37.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoding(false);
      } catch (error) {
        alert('Error');
      }
    })();
  }, []);

  return (
    <div className="content  p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои Заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {isLoading
          ? [...Array(8)]
          : orders.map((item, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                loading={isLoading}
                {...item}
              />
            ))}
      </div>
    </div>
  );
}

export default Orders;
