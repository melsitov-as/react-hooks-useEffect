import FilmInfo from "./film-info.jsx";

const KEY_ESCAPE = `Escape`;

const App = () => {
    const [isVisibleFilmInfo, setVisibleFilmInfo] = React.useState(true);
    React.useEffect(() => {
        console.log(`useEffect from App`);
        
        const onKeyDownEsc = (evt) => {
             console.log(`keydown fire`);             
             if (evt.key === KEY_ESCAPE) {
                 evt.preventDefault();
                 setVisibleFilmInfo((prevState) => !prevState);
             }
         }
         
        document.addEventListener(`keydown`, onKeyDownEsc);
        return () => {
            console.log(`Remove event keydown`);
            document.removeEventListener(`keydown`, onKeyDownEsc)
        };

    }, [isVisibleFilmInfo])

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

Попробуем проверить всё вышесказанное с регистрацией обработчика keydown. В компоненте App опишем эффект, который будет добавлять обработчик события keydown на документ. В функции, которая является результатом эффекта будем снимать обработчик.