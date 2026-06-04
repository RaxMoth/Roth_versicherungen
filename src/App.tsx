import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import RothVersicherungen from './pages/RothVersicherungen'
import Firmenkunden from './pages/Firmenkunden'
import CyberPolice from './pages/CyberPolice'
import Privatkunden from './pages/Privatkunden'
import Tierkrankenversicherung from './pages/Tierkrankenversicherung'
import WichtigeHinweise from './pages/WichtigeHinweise'
import Jobs from './pages/Jobs'
import Erstinformation from './pages/Erstinformation'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import RothFinanz from './pages/RothFinanz'
import Altersversorgung from './pages/Altersversorgung'
import Sterbegeldversicherung from './pages/Sterbegeldversicherung'
import Team from './pages/Team'
import Kontakt from './pages/Kontakt'
import OnlineBeratung from './pages/OnlineBeratung'
import ServiceApp from './pages/ServiceApp'
import NotFound from './pages/NotFound'

const App: React.FC = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/roth-versicherungen"
                    element={<RothVersicherungen />}
                />
                <Route
                    path="/roth-versicherungen/firmenkunden"
                    element={<Firmenkunden />}
                />
                <Route
                    path="/roth-versicherungen/firmenkunden/cyber-police"
                    element={<CyberPolice />}
                />
                <Route
                    path="/roth-versicherungen/privatkunden"
                    element={<Privatkunden />}
                />
                <Route
                    path="/roth-versicherungen/privatkunden/tierkrankenversicherung"
                    element={<Tierkrankenversicherung />}
                />
                <Route
                    path="/roth-versicherungen/wichtige-hinweise"
                    element={<WichtigeHinweise />}
                />
                <Route path="/roth-versicherungen/jobs" element={<Jobs />} />
                <Route path="/erstinformation" element={<Erstinformation />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/roth-finanz" element={<RothFinanz />} />
                <Route
                    path="/roth-finanz/altersversorgung"
                    element={<Altersversorgung />}
                />
                <Route
                    path="/roth-finanz/sterbegeldversicherung"
                    element={<Sterbegeldversicherung />}
                />
                <Route path="/team" element={<Team />} />
                <Route path="/kontakt-anfahrt" element={<Kontakt />} />
                <Route path="/online-beratung" element={<OnlineBeratung />} />
                <Route path="/service-app" element={<ServiceApp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </Router>
)

export default App
