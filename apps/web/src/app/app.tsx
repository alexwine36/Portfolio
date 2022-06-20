import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from '../layouts/page-layout/page-layout';
import HomePage from '../pages/home-page/home-page';
import SectionPage from '../pages/section-page/section-page';

export function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="section">
            <Route path=":sectionId" element={<SectionPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
