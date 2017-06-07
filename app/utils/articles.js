const articles = {
    getArticels () {
        const url = `https://react-community-stage.herokuapp.com/api/article/loadArticles`;
        const testValue = fetch(url).then((res) => res.json().then((data) => {
            return data.message;
        }));
        return testValue;
    }
};
export default articles;
