import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Corrected import
import './App.css';
import Layout from './components/NewLayout/Layout';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider


const App = () => {

  const queryClient = new QueryClient();
  
    return (
        <QueryClientProvider client = {queryClient}>
          <ThemeProvider> {/* Wrap Layout with ThemeProvider */}
             <Layout/>
          </ThemeProvider>
          {/* Conditionally render ReactQueryDevtools */}
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    )
  
}

export default App;