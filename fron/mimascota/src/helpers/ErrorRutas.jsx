import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (error) => {
            console.error('Error capturado en ErrorBoundary:', error);
            setHasError(true);
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        // Renderiza un componente de error personalizado
        return <h1>Algo salió mal.</h1>;
    }

    return children;
};

export default ErrorBoundary;