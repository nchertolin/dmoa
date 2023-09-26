import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {ArtworksService} from "../services/artworksService.ts";

const useArtworks = (page: number) => {
    const {isLoading, data} = useQuery(
        ['artworks', page],
        async () => await ArtworksService.getArtworks(page)
    );
    return {isLoading, data}
}

const useSearchArtworks = () => {
    const queryClient = useQueryClient();
    const {isLoading, mutateAsync: searchArtworks} = useMutation(
        async (data: string) => await ArtworksService.searchArtworks(data),
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['artworks', 1], data);
            }
        }
    );

    return {isLoading, searchArtworks};
};

const useArtwork = (id: number) => {
    const {isLoading, data} = useQuery(
        ['artwork', id],
        async () => await ArtworksService.getArtwork(id)
    );
    return {isLoading, data}
}

export {useArtworks, useSearchArtworks, useArtwork}
