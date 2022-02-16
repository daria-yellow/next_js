import Image from "next/image";

const Homepage = () => {

    return (
        <>
        <div >
            <Image src={require('../styles/icons/Image_educatin.svg')} id="image_education"></Image>
            <div className="first_block">
                <h1>Новая уникальная программа обучения</h1>
                <p id="text_first_small">Забудьте о существовании школы раз и навсегда</p>
                <div className="buttons_first">
                    <input id="test" className="buttons" type="submit" value="Пройти тест"></input>
                    <input id="learn_more" className="buttons" type="submit" value="Узнать больше"></input>
                </div>
            </div>
        </div>
    
    
        <div className="cards" id="card">
            <div className="card">
                <div className="circle">
                    <Image src={require('../styles/icons/Student.svg')}></Image>
                </div>
                <div className="card_content">
                    <p className="card_text_big">Занятия онлайн</p>
                    <p>Больше не нужно тратить драгоценное время на дорогу</p>
                </div>
            </div>
    
            <div className="card">
                <div className="circle">
                    <Image src={require('../styles/icons/Books.svg')}></Image>
                </div>
                <div className="card_content">
                    <p className="card_text_big">Индивидуальность</p>
                    <p>Каждый студент прикрепляется к персональному ментору</p>
                </div>
            </div>
    
            <div className="card">
                <div className="circle">
                    <Image src={require('../styles/icons/Certificate.svg')}></Image>
                </div>
                <div className="card_content">
                    <p className="card_text_big">Сертификат</p>
                    <p>В конце обучения вы получаете именной сертификат</p>
                </div>
            </div>
    
            <div className="card">
                <div className="circle">
                    <Image src={require('../styles/icons/Money.svg')}></Image>
                </div>
                <div className="card_content">
                    <p className="card_text_big">Стоимость</p>
                    <p>При покупке курса можно получить скидку 50 процентов</p>
                </div>
            </div>
    
        </div>
    
    
    
        <div className="third_block" id="third_block">
            <div className="third_text">
                <h2>Как это работает?</h2>
                <p>При покупке курса Вы получаете доступ в личный кабинет,
                    а так же контакты наставника в удобных для Вас социальных сетях.
                    Вы можете посещать любые групповые занятия, которые входят в пакет,
                    после чего наставник проверяет домашние задания и ставит оценку.</p>
            </div>
            
            <div className="third_content">
                <div id="girl">
                    <Image src={require('../styles/icons/Image_girl.svg')}></Image>
                </div>
                <div className="third_content_text">
                    <h3 id="third_content_text_big">Стандартный обьем на месяц</h3>
                    <div className="buttons_main">
                        <input className="buttons" id="hours" type="submit" value="100 часов"></input>
                        <input className="buttons" id="lessons" type="submit" value="До 7 дисциплин"></input>
                    </div>
                    <h4>Вы получаете:</h4>
                    <p className="par3">Лучшие преподаватели страны подготовят лекции с новейшим материалом,
                        без книг 20-летней давности</p>
                    <h4>Гарантия качества</h4>
                    <p className="par3">Мы гарантируем, что закончив наш курс
                        Вы сможете сдать ЗНО на 170+ баллов. В ином случае мы
                        возвращаем полную стоимость курса.
                        Так же курс можно заморозить на срок до 1 месяца
                        (более длительные сроки требуют отдельного рассмотрения).</p>
                </div>
            </div>
    
        </div>
    
    
        <div className="package" id="fourth_block">
            <div className="rectangle">
                <p>1500 UAH</p>
                <h3>Месячный пакет</h3>
                <ul className="card_text">
                    <li className="list"><p className="p1">Возможность заморозить курс</p></li>
                    <li className="list"><p className="p1">Персональный наставник</p></li>
                    <li className="list"><p className="p1">Скидка на покупку других курсов до 5 процентов</p></li>
                </ul>
                <input className="buttons" id="first_card_button" type="submit" value="Записаться"></input>
            </div>
    
            <div className="rectangle" id="middle_card">
                <p  className="white_text">9000 UAH</p>
                <h2  className="white_text">Годовой пакет</h2>
                <ul className="card_text" id="white_card">
                    <li className="list"><p className="white_text">Экономия 50 процентов</p></li>
                    <li className="list"><p className="white_text">Возможность заморозить курс</p></li>
                    <li className="list"><p className="white_text">Персональный наставник</p></li>
                    <li className="list"><p className="white_text">Скидка на покупку других курсов до 20 процентов</p></li>
                </ul>
                <input className="buttons" id="middle_button" type="submit" value="Записаться"></input>
            </div>
    
            <div className="rectangle">
                <p>4000 UAH</p>
                <h3>Полугодовой пакет</h3>
                <ul className="card_text">
                    <li className="list"><p className="p1">Экономия 35 процентов</p></li>
                    <li className="list"><p className="p1">Возможность заморозить курс</p></li>
                    <li className="list"><p className="p1">Персональный наставник</p></li>
                    <li className="list"><p className="p1">Скидка на покупку других курсов до 15 процентов</p></li>
                </ul>
                <input className="buttons" id="third_card_button" type="submit" value="Записаться"></input>
            </div>
        </div>
    
    
        <div className="fifth_block" id="fifth_block">
            <h2>Оставьте заявку и мы вам перезвоним</h2>
            <div className="par5">
                <p className="p2">После заполнения анкеты ожидайте звонок  в течении
                часа и наши специалисты помогут вам подобрать
                оптимальную программу обучения.</p>
            </div>
            <div>
                <div>
                    <input id="name" type="text" name="username" placeholder = "Имя"></input>
                </div>
                <div  className="input">
                    <input id="email" type="text" name="email" placeholder = "Почта"></input>
                </div>
                <div className="input">
                    <input id="number" type="number" name="age" max="113" min="10" placeholder = "Возраст"></input>
                </div>
            </div>
    
            <div className="container">
                <div className="select-box">
                    <div className="options-container">
    
                        <div className="option">
                            <input type="radio" className="radio" id="first" name="category"/>
                            <label htmlFor="first">Месячный пакет</label>
                        </div>
    
                        <div className="option">
                            <input type="radio" className="radio" id="second" name="category"/>
                            <label htmlFor="second">Полугодовой пакет</label>
                        </div>
    
                        <div className="option">
                            <input type="radio" className="radio" id="third" name="category"/>
                            <label htmlFor="third">Годовой пакет</label>
                        </div>
                    </div>
    
                    <div className="selected">
                        Выберите тариф
                    </div>
                </div>
            </div>
            <script src="./script.js"></script>
    
            <div>
                <input className="buttons" id="call" type="submit" value="Отправить"></input>
            </div>
    
        </div>
    </>
    )
}

export default Homepage;