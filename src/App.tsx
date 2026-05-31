import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Prices } from './pages/Prices'
import { NotFound } from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="servers" element={<Services />} />
                <Route path="prices" element={<Prices />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
