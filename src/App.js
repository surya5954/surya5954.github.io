import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
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
      </QueryClientProvider>
    )
  
}

export default App;