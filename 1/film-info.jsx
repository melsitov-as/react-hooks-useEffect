class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            film: {},
        }
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

Хук useEffect был создан для выполнения побочных (сайд) эффектов в функциональных компонентах. Что такое сайд эффекты в контексте react-приложения? Любое взаимодействие с внешним API (браузером, сетевыми запросами и так далее). При использовании классовых компонентов, мы могли реализовывать сайд эффекты в методах жизненного цикла. Например, если требуется выполнить сетевой запрос (получить данные с сервера) при монтировании компонента, то такой код мы могли написать в методе componentDidMount. В функциональных компонентах такой возможности не было, но теперь её можно получить с помощью хука useEffect.

Перед знакомством с useEffect попробуем решить простую задачу с побочными эффектами при помощи классовых компонентов. Реализуем компонент FilmInfo. Суть простая: компонент отрисует кнопку «Следующий фильм», при нажатии на которую требуется выполнить сетевой запрос и получить информацию о фильме с определённым идентификатором. Чтобы не усложнять интерфейс, идентификатор будем получать последовательно. Каждый клик по кнопке будет увеличивать значение счётчика на 1. Таким образом, при загрузке приложения мы должны загрузить информацию о фильме с идентификатором 1. При следующем клике информацию о фильме 2 и так далее.