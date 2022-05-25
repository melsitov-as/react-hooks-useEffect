import FilmInfo from "./film-info.jsx";

const App = () => {
    const [isVisibleFilmInfo, setVisibleFilmInfo] = React.useState(true);

    return (
        <div className="block">
            <button
                className="custom-button button-danger"
                onClick={() => setVisibleFilmInfo((prevState) => !prevState)}
            >
                {isVisibleFilmInfo ? `- Скрыть` : `+ Показать`}
            </button>

            {isVisibleFilmInfo && <FilmInfo />}            
        </div>
    )
}

export default App;

useEffect — это хук для выполнения побочных эффектов в функциональных компонентах. Что такое побочные эффекты мы уже выяснили на одном из первых шагов и знаем, где их реализовывать в классовых компонентах. С помощью useEffect мы сможем сделать тоже самое в функциональных компонентах. Получается, что useEffect позволяет нам решать те же задачи, которые мы раньше делали с помощью методов жизненного цикла. Если сказать точней, то с помощью одного хука мы сможем решить задачи, для которых раньше применяли componentDidMount, componentDidUpdate и componentWillUnmount. Звучит невероятно.

Чтобы продемонстрировать работу useEffect в полной мере, мы добавим ещё один компонент App. Сначала будет рендерится App, а затем, в зависимости от условий наш компонент FilmInfo. Мы идём на этот шаг с одной простой целью — показать как обрабатывать события componentWillUnmount с помощью useState.