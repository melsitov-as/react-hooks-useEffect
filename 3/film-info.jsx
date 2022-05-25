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

Чтобы увидеть работу обработчика componentDidUpdate добавим обновление состояния у компонента. Для этого реализуем обработчик события клика для кнопки «Следующий фильм…». При клике будем увеличивать значение счётчика — id. После этого попробуйте понажимать на кнопку «Следующий фильм…». При нажатии обновляется состояние, поэтому в консоли вы увидите сообщение componentDidUpdate.