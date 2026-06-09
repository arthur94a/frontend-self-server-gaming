import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/home'
import { Services } from './pages/services'
import { Prices } from './pages/prices'
import { NotFound } from './pages/NotFound'
import { DefaultLayout } from './layout/DefaultLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="servers" element={<Services />} />
                    <Route path="prices" element={<Prices />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
