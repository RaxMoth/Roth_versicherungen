import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

/**
 * Top-level error boundary. Catches render errors so the whole app
 * doesn't white-screen on a JS exception.
 */
export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
        // Hook this up to Sentry / log service in production.
        // eslint-disable-next-line no-console
        console.error('ErrorBoundary caught:', error, info)
    }

    handleReload = (): void => {
        this.setState({ hasError: false, error: undefined })
        window.location.reload()
    }

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback
            return (
                <div className="min-h-screen flex items-center justify-center bg-brand-page px-6">
                    <div className="max-w-md text-center">
                        <p className="uppercase tracking-[0.2em] text-xs text-brand-red font-semibold mb-3">
                            Fehler
                        </p>
                        <h1 className="font-serif text-3xl text-stone-900 mb-4">
                            Etwas ist schiefgelaufen.
                        </h1>
                        <p className="text-stone-700 mb-6">
                            Es tut uns leid. Bitte laden Sie die Seite neu
                            oder kontaktieren Sie uns telefonisch.
                        </p>
                        <button
                            type="button"
                            onClick={this.handleReload}
                            className="bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-3 rounded-sm"
                        >
                            Seite neu laden
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
