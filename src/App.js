import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
import './App.css';
import Layout from './components/NewLayout/Layout';



const App = () => {

  const queryClient = new QueryClient();
  
    return (
        <QueryClientProvider client = {queryClient}>
             <Layout/>
      </QueryClientProvider>
    )
  
}

export default App;