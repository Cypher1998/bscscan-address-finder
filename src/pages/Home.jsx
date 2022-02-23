import Search from './Search';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="container">
        <Search />
      </div>

      <Outlet />
    </main>
  );
};
export default Home;
