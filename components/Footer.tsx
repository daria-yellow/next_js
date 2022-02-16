import Image from "next/image";

const Footer = () => {
    return (
        
        <div className="footer">
            <div>
                <div className="social">
                    <div id="left_text_footer">
                        <p className="p1">Подписывайтесь на нас в социцальных сетях и следите за обновлениями</p>
                    </div>
                    <div>
                        <Image className="icons_footer" src={require('../styles/icons/Twitter.svg')}></Image>
                        <Image className="icons_footer" src={require('../styles/icons/YouTube.svg')}></Image>
                        <Image className="icons_footer" src={require('../styles/icons/VK.svg')}></Image>
                        <Image className="icons_footer" src={require('../styles/icons/Facebook.svg')}></Image>
                    </div>
                </div>
                <div className="imgfooter" >
                    <Image src={require('../styles/icons/footer.svg')}></Image>
                </div>
                <div className="phone">
                    <p className="p1">+38 (050) 234 24 21</p>
                </div>
            </div>

            <div className="end">
                <p className="p2" id="conf">Политика конфиденциальности</p>
                <p className="p2" id="agreemtn">Соглашение на обработку данных</p>
            </div>
        </div>
        
    )

}

export default Footer;