import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../layouts/page-layout/page-layout';
import HomePage from '../pages/home-page/home-page';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
