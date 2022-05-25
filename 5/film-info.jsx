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

        const prevId = prevState.id;
        const {id} = this.state;

        if (id !== prevId) {
            fetch(`https://5.react.pages.academy/wtw/films/${id}`)
            .then((response) => response.json())
            .then((film) => this.setState({film}))    
        }      
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

Данные с сервера приходят, но если нажать на кнопку, то информация об очередном фильме не загружается. Чтобы решить эту проблему можно пойти двумя путями. Первый самый тривиальный — обновить код обработчика клика по кнопке, но сразу скажем, что это плохой вариант. Правильней воспользоваться componentDidUpdate. Метод жизненного цикла сработает сразу после обновления состояния (id) и можно будет выполнить очередной запрос.

Обратите внимание на условие сравнения идентификатора в методе componentDidUpdate. Если его не сделать, то произойдёт зацикливание ренедера, так как вызов setState внутри componentDidUpdate приведёт к обновлению состояния, соответственно метод ComponentDidUpdate будет выполнен вновь, а в нём опять вызов setState.

На этом разработка функциональности завершена. Компонент работает и при нажатии на кнопку «Следующий шаг» мы получаем информацию об очередном фильме. Ещё раз взгляните на код и посмотрите сколько всего нам пришлось написать. Да, есть участки, которые можно оптимизировать, но факт остаётся фактом: для решения задачи потребовалась комбинация из нескольких методов жизненного цикла. Попробуем теперь пересмотреть этот компонент и конвертировать его в функциональный.