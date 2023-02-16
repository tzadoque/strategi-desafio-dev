import { Outlet } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const query_client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query_client}>
      <AppRoutes />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
