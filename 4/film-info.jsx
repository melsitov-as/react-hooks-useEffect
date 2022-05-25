class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            film: {},
        }

        this.nextFilmClickHandle = this.nextFilmClickHandle.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");

        const {id} = this.state;
        fetch(`https://5.react.pages.academy/wtw/films/${id}`)
            .then((response) => response.json())
            .then((film) => this.setState({film}))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const {id, film} = this.state;
        
        return (
            <section className="block">
                <div>
                    <button
                        onClick={this.nextFilmClickHandle}
                        className="custom-button"
                    >
                    Следующий фильм…
                    </button>                    
                    <h3>Идентификатор фильма: {id}</h3>
                </div>
                
                {film.name && <h1>{film.name}</h1>}
            </section>
        )
    }

    nextFilmClickHandle() {
        this.setState((prevState) => {
            return {id: prevState.id + 1};
        });
    }
}


export default FilmInfo;

Теперь давайте взглянем на этом код ещё раз и прикинем, а где же нам написать код для получения данных с сервера? Если данные требуется получить сразу после монтирования компонента, то метод componentDidMount для этого прекрасно подойдёт. Попробуем это сделать. Для получения данных воспользуемся fetch. После получения данных обновим состояние и запишем информацию о фильме.