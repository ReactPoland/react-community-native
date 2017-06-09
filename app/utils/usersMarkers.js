const usersMarkers = {
    getMarkers () {
        const url = `https://react-community-stage.herokuapp.com/api/map/loadMarkers/`;
        const loadMarkers = fetch(url).then((res) => res.json().then((data) => {
            return data.message;
        }));
        return loadMarkers;
    }
};
export default usersMarkers;
