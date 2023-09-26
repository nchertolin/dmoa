import $url from "../api/api";

const END_POINT: string = '/artworks';
const LIMIT: number = 21;

const ArtworksService = {
    async getArtworks(page: number) {
        const response = await $url.get(END_POINT,
            {
                params: {page, limit: LIMIT}
            });
        return response.data;
    },

    async searchArtworks(searchQuery: string) {
        const response = await $url.get(`${END_POINT}/search`,
            {
                params: {q: searchQuery}
            });
        return response.data;
    },

    async getArtwork(id: number) {
        const response = await $url.get(`${END_POINT}/${id}`);
        return response.data.data;
    }
}


export {ArtworksService}
