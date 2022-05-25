const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});
    
    React.useEffect(() => {
        console.log(`Hello from useEffect`);
        return () => console.log(`componentWillUnmount`);
   });
    
    return (         
        <section className="block">
               <div>
                   <button
                       onClick={() => {setId((prevId) => prevId + 1)}}
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


export default FilmInfo;

Всё выглядит несложно, но пока непонятно как отличить componentDidMount от componentDidUpdate. Пока отодвинем этот вопрос в сторону. Лучше посмотрим, как нам выполнить действие, которое будет выполняться при удалении компонента. То есть добиться поведения, аналогичного методу жизненного цикла componentWillUnmount.

Эта задача решается довольно просто. Функция, которую мы регистрируем с помощью useEffect в качестве результата должна возвращать новую функцию. Именно эта функция будет выполнена при удалении компонента. Получается, что в этой функции может быть весь тот код, который в классовых компонентах располагался в componentWillUnmount.

Попробуйте нажать на кнопку «Скрыть». Компонент FilmInfo будет отмонтирован и в консоли вы увидите сообщение «componentWillUnmount». Сработала функция, которую вернула функция, зарегистрированная с помощью useEffect.