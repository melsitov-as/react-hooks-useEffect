const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});
    
    React.useEffect(() => {         
        
        fetch(`https://5.react.pages.academy/wtw/films/${id}`)
           .then((response) => response.json())
           .then((film) => setFilm(film))

        return () => console.log(`componentWillUnmount`);
   }, [id]);
    
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

Мы рассмотрели детали работы хука useEffect и теперь можем полностью перенести решение изначальной задачи в функциональный компонент. Напомним, что основная цель приложения — получить с сервера информацию об очередном фильме. Возьмём код для взаимодействия с сервером и перенесём его в функцию, которую регистрируем с помощью useEffect. При переносе кода важно не забыть заменить вызов setState на функцию обновления объекта с фильмом —— setFilm

Попробуйте несколько раз нажать на кнопку «Следующий фильм» и убедитесь, что всё работает как и раньше. При загрузке появляется информация о первом фильме, а очередном нажатии на кнопку загружаются сведения о следующем. Даже сейчас видно, что код, компонента стал проще. Вместо несколько методов жизненного цикла мы воспользовались одной функцией.