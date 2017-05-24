var articles = {
  const articlesArray
  getRovers(){
    var url = `https://react-community-stage.herokuapp.com/api/article/loadArticles`
    const testValue = fetch(url).then((res) => res.json().then((data) =>
    {
      console.log( data.message)
    }))
    return testValue
  }
}

export default articles;
