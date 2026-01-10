import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // TODO: Log to error tracking service (e.g., Sentry)
        // logErrorToService(error, errorInfo);

        this.setState({
            error,
            errorInfo,
        });
    }

    handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render(): ReactNode {
        if (this.state.hasError) {
            // Use custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <Container maxWidth="md" sx={{ py: 8 }}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            textAlign: 'center',
                            borderTop: 4,
                            borderColor: 'error.main',
                        }}
                    >
                        <ErrorOutlineIcon
                            sx={{ fontSize: 64, color: 'error.main', mb: 2 }}
                        />
                        <Typography variant="h4" gutterBottom fontWeight="bold">
                            Oops! Something went wrong
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            We're sorry for the inconvenience. An unexpected error occurred.
                        </Typography>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <Box
                                sx={{
                                    mt: 3,
                                    p: 2,
                                    bgcolor: 'grey.100',
                                    borderRadius: 1,
                                    textAlign: 'left',
                                    overflow: 'auto',
                                }}
                            >
                                <Typography variant="subtitle2" color="error" gutterBottom>
                                    Error Details (Development Only):
                                </Typography>
                                <Typography
                                    variant="body2"
                                    component="pre"
                                    sx={{ fontSize: '0.75rem', whiteSpace: 'pre-wrap' }}
                                >
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </Typography>
                            </Box>
                        )}

                        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleReset}
                            >
                                Try Again
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => window.location.href = '/'}
                            >
                                Go to Homepage
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            );
        }

        return this.props.children;
    }
}
