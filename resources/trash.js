
componentDidMount = async () => {
    const resp = await fetch("./resources/scifi.json")
    if(resp.ok){
        const books = await resp.json()
    }
        this.setState({
            books: books
        })
    }