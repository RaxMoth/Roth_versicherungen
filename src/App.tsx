import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout, ErrorBoundary } from '@/components'
import { ROUTES } from '@/config/routes'

// Code-split each route — lazy ensures pages download on demand.
const Home = lazy(() => import('@/pages/Home'))
const RothVersicherungen = lazy(() => import('@/pages/RothVersicherungen'))
const Firmenkunden = lazy(() => import('@/pages/Firmenkunden'))
const CyberPolice = lazy(() => import('@/pages/CyberPolice'))
const Privatkunden = lazy(() => import('@/pages/Privatkunden'))
const Tier = lazy(() => import('@/pages/Tierkrankenversicherung'))
const WichtigeHinweise = lazy(() => import('@/pages/WichtigeHinweise'))
const Jobs = lazy(() => import('@/pages/Jobs'))
const VersErstinfo = lazy(
    () => import('@/pages/versicherungen/Erstinformation'),
)
const VersDatenschutz = lazy(
    () => import('@/pages/versicherungen/Datenschutz'),
)
const VersImpressum = lazy(() => import('@/pages/versicherungen/Impressum'))
const RothFinanz = lazy(() => import('@/pages/RothFinanz'))
const Altersversorgung = lazy(() => import('@/pages/Altersversorgung'))
const Sterbegeld = lazy(() => import('@/pages/Sterbegeldversicherung'))
const FinErstinfo = lazy(() => import('@/pages/finanz/Erstinformation'))
const FinDatenschutz = lazy(() => import('@/pages/finanz/Datenschutz'))
const FinImpressum = lazy(() => import('@/pages/finanz/Impressum'))
const Team = lazy(() => import('@/pages/Team'))
const Kontakt = lazy(() => import('@/pages/Kontakt'))
const OnlineBeratung = lazy(() => import('@/pages/OnlineBeratung'))
const ServiceApp = lazy(() => import('@/pages/ServiceApp'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const PageFallback = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
    </div>
)

const App = () => (
    <ErrorBoundary>
        <Router>
            <Layout>
                <Suspense fallback={<PageFallback />}>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Home />} />

                        <Route
                            path={ROUTES.VERSICHERUNGEN.INDEX}
                            element={<RothVersicherungen />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.FIRMENKUNDEN}
                            element={<Firmenkunden />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.CYBER}
                            element={<CyberPolice />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.PRIVATKUNDEN}
                            element={<Privatkunden />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.TIER}
                            element={<Tier />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.HINWEISE}
                            element={<WichtigeHinweise />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.JOBS}
                            element={<Jobs />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.ERSTINFO}
                            element={<VersErstinfo />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.DATENSCHUTZ}
                            element={<VersDatenschutz />}
                        />
                        <Route
                            path={ROUTES.VERSICHERUNGEN.IMPRESSUM}
                            element={<VersImpressum />}
                        />

                        <Route
                            path={ROUTES.FINANZ.INDEX}
                            element={<RothFinanz />}
                        />
                        <Route
                            path={ROUTES.FINANZ.ALTERSVERSORGUNG}
                            element={<Altersversorgung />}
                        />
                        <Route
                            path={ROUTES.FINANZ.STERBEGELD}
                            element={<Sterbegeld />}
                        />
                        <Route
                            path={ROUTES.FINANZ.ERSTINFO}
                            element={<FinErstinfo />}
                        />
                        <Route
                            path={ROUTES.FINANZ.DATENSCHUTZ}
                            element={<FinDatenschutz />}
                        />
                        <Route
                            path={ROUTES.FINANZ.IMPRESSUM}
                            element={<FinImpressum />}
                        />

                        <Route path={ROUTES.TEAM} element={<Team />} />
                        <Route path={ROUTES.KONTAKT} element={<Kontakt />} />
                        <Route
                            path={ROUTES.ONLINE}
                            element={<OnlineBeratung />}
                        />
                        <Route
                            path={ROUTES.SERVICE_APP}
                            element={<ServiceApp />}
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    </ErrorBoundary>
)

export default App
