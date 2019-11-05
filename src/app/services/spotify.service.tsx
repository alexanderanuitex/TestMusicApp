import axiosInstance from '../shared/interceptors/axios.interceptor';

export class SpotifyService {
    public getPlaylists(): Promise<any> {
        return axiosInstance.get('https://api.spotify.com/v1/browse/featured-playlists')
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public getTracksFromPlaylist(link: string): Promise<any> {
        
        return axiosInstance.get(link)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    public getCurrentTrack(link: string): Promise<any> {
        return axiosInstance.get(link)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}


export default new SpotifyService();