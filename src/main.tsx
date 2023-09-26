import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            retry: false
        }
    }
});
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);
