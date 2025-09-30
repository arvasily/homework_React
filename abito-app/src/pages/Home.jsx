import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants"

export const Home = () => {
    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-prymary search-btn">
                                <img className="search-btn__icon" src="/image/search.svg" alt="search" />
                                <span className="search-btn__text">Search</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="conteiner-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="conteiner-side">
                                <h3 className="conteiner-side__title">Сервисы и услуги</h3>
                                <div className="conteiner-side-box">
                                    <div className="conteiner-side__list">
                                        <div className="conteiner-side__list-item">
                                            <img className="conteiner-side__list-item--img" src="/image/truck.svg" alt="" />
                                            <h5 className="conteiner-side__list-item--title">Доставка</h5>
                                            <p className="conteiner-side__list-item--text">
                                                Проверка при получении и возможность бесплатно вернуть товар
                                            </p>
                                        </div>
                                        <div className="conteiner-side__list-item">
                                            <img className="conteiner-side__list-item--img" src="/image/sedan.svg" alt="" />
                                            <h5 className="conteiner-side__list-item--title">Автотека</h5>
                                            <p className="conteiner-side__list-item--text">
                                                Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>
                                        <div className="conteiner-side__list-item">
                                            <img className="conteiner-side__list-item--img" src="/image/love.svg" alt="" />
                                            <h5 className="conteiner-side__list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="conteiner-side__list-item--text">
                                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                            </p>
                                        </div>
                                    </div>
                                    <div className="conteiner-side__footer">
                                        <p className="conteiner-side__footer-item">
                                            © ООО «Абито», 2011–2021
                                        </p>
                                        <a href="#!" className="conteiner-side__footer-item">
                                            Полaитика конфиденциальности
                                        </a>
                                        <a href="#!" className="conteiner-side__footer-item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}