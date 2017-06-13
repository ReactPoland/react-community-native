<<<<<<< HEAD
const articles = {
    getArticels () {
        const url = `https://react-community-stage.herokuapp.com/api/article/loadArticles`;
        const loadArticles = fetch(url).then((res) => res.json().then((data) => {
            return data.message;
        }));
        return loadArticles;
    }
};
=======
var articles = {
  getRovers(){
    var url = `https://react-community-stage.herokuapp.com/api/article/loadArticles`
    const testValue = fetch(url).then((res) => res.json().then((data) =>
    {
        return data.message
    }))
    return testValue
  }
}

>>>>>>> master
export default articles;
