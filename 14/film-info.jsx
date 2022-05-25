const FilmInfo = () => {
    const [id, setId] = React.useState(1);
    const [film, setFilm] = React.useState({});
    
    React.useEffect(() => {         
       let isNeedUpdate = true;

        fetch(`https://5.react.pages.academy/wtw/films/${id}`)
           .then((response) => response.json())
           .then((film) => isNeedUpdate && setFilm(film))

      return () => isNeedUpdate = false;
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

Мы полностью вернули функциональность компонента и при этом неплохо сэкономили на коде. Нам не потребовалось определять дополнительные обработчики, и вся функциональность разместилась в пределах одной функции. Неплохой результат, но есть одна проблема. Проблема не связанная напрямую с useEffect, а связанная с выполнением запросов к серверу, то есть коде с побочными эффектами. Какая же есть проблема?

Попробуйте быстро покликать на кнопку «Следующий фильм». Может возникнуть ситуация, когда название будет не соответствовать фильму с идентификатором, который отображается в соответствующем поле. Это происходит из гонки запросов. Каждое нажатие на кнопку приводит к выполнению нового запроса. Таким образом, может возникнуть ситуация, когда мы долистаем до фильма с идентификатором 5, а будет выполнен только запрос для идентификатора 2. Избежать подобных проблем можно несколькими способами. Первый: применение debounce. С этим подходом вы знакомы из курса «JavaScript. Разработка веб-интерфейсов». Второй способ более прост — ограничить обновления стейта. В примере мы воспользовались вторым вариантом.

Завели дополнительную переменную isNeedUpdate. При создании эффекта, значение переменной true, то есть обновлять состояние необходимо. Добавляем соответствующее условие перед setFilm. Затем обновим функцию, которую возвращает эффект. В ней присвоим переменной isNeedUpdate противоположное значение. Таким образом, данные с сервера в любом случае будут загружены (отмена запросов это отдельный вопрос), но состояние лишний раз обновляться не будет.