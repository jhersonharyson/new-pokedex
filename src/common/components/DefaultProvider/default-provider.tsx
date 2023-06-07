import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IDefaultProvider } from "./@types/default-provider.interface";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } });

export const DefaultProvider = ({ children }: IDefaultProvider) => {

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}