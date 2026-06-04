import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Roth Versicherungen section
import RothVersicherungen from './pages/RothVersicherungen'
import Firmenkunden from './pages/Firmenkunden'
import CyberPolice from './pages/CyberPolice'
import Privatkunden from './pages/Privatkunden'
import Tierkrankenversicherung from './pages/Tierkrankenversicherung'
import WichtigeHinweise from './pages/WichtigeHinweise'
import Jobs from './pages/Jobs'
import VersImpressum from './pages/versicherungen/Impressum'
import VersDatenschutz from './pages/versicherungen/Datenschutz'
import VersErstinformation from './pages/versicherungen/Erstinformation'

// Roth Finanz section
import RothFinanz from './pages/RothFinanz'
import Altersversorgung from './pages/Altersversorgung'
import Sterbegeldversicherung from './pages/Sterbegeldversicherung'
import FinImpressum from './pages/finanz/Impressum'
import FinDatenschutz from './pages/finanz/Datenschutz'
import FinErstinformation from './pages/finanz/Erstinformation'

// Shared / Allgemein
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

                {/* Roth Versicherungen */}
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
                <Route
                    path="/roth-versicherungen/erstinformation"
                    element={<VersErstinformation />}
                />
                <Route
                    path="/roth-versicherungen/datenschutz"
                    element={<VersDatenschutz />}
                />
                <Route
                    path="/roth-versicherungen/impressum"
                    element={<VersImpressum />}
                />

                {/* Roth Finanz */}
                <Route path="/roth-finanz" element={<RothFinanz />} />
                <Route
                    path="/roth-finanz/altersversorgung"
                    element={<Altersversorgung />}
                />
                <Route
                    path="/roth-finanz/sterbegeldversicherung"
                    element={<Sterbegeldversicherung />}
                />
                <Route
                    path="/roth-finanz/erstinformation"
                    element={<FinErstinformation />}
                />
                <Route
                    path="/roth-finanz/datenschutz"
                    element={<FinDatenschutz />}
                />
                <Route
                    path="/roth-finanz/impressum"
                    element={<FinImpressum />}
                />

                {/* Shared */}
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
