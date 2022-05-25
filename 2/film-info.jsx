class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            film: {},
        }
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
}


export default FilmInfo;

Для начала давайте определимся, а где в компоненте писать код для выполнения сетевого запроса? Сделать это в методе render — плохая идея. В конструкторе тоже не вариант. Правильный ответ: воспользоваться методами жизненного цикла. Давайте вспомним некоторые из них: componentDidMount, componentDidUpdate, componentWillUnmount. Для наглядности пока реализуем заглушки для методов и добавим вывод информации в консоль.