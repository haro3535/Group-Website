/*
import React from 'react';
import './About.css'; 
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div className="about-container">
            <div className="text-container">
                <h1>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ['<strong>BoheSA Hakkında</strong>']
                        }}
                    />
                </h1>
                <p>BoheSA olarak, yazılım dünyasında tutkuyla yaşayan altı kişilik bir ekibiz. Her birimiz aynı bölümde öğrenci olarak başladığımız bu serüvenimize  teknolojiyle sınırları zorlamak için bir araya geldik.</p>
                <p>Kullanıcı odaklı yaklaşımımız ve yenilikçi çözümler üretme tutkumuzla her projede teknolojinin gücünü keşfetmeye devam ediyoruz. Derin teknik bilgimiz ve birlikte çalışma gücümüzle her zaman önde olmayı hedefliyoruz. BoheSA olarak, geleceği yazılımın gücüyle şekillendiriyor ve teknolojinin getirdiği potansiyeli en üst düzeyde kullanmayı amaçlıyoruz.</p>
                <p>Herhangi bir projede veya teknolojiyle ilgili keşif yaparken yardıma ihtiyacınız olursa bize her zaman ulaşabilirsiniz!</p>
            </div>
            <div className="image-container">
                <img src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" alt="Açıklama" />
            </div>
        </div>
    );
}
    */
import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div className="about-container">
            <div className="text-container">
            <h1>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ['<strong>Hoşgeldiniz, Biz Bohesayız</strong>']
                        }}
                    />
                </h1>
                <div className="paragraphs">
                    <p>BoheSA olarak, yazılım dünyasında tutkuyla yaşayan altı kişilik bir ekibiz. Her birimiz aynı bölümde öğrenci olarak başladığımız bu serüvenimize  teknolojiyle sınırları zorlamak için bir araya geldik.Kullanıcı odaklı yaklaşımımız ve yenilikçi çözümler üretme tutkumuzla her projede teknolojinin gücünü keşfetmeye devam ediyoruz.</p>
                    <p>Derin teknik bilgimiz ve birlikte çalışma gücümüzle her zaman önde olmayı hedefliyoruz. BoheSA olarak, geleceği yazılımın gücüyle şekillendiriyor ve teknolojinin getirdiği potansiyeli en üst düzeyde kullanmayı amaçlıyoruz.Herhangi bir projede veya teknolojiyle ilgili keşif yaparken yardıma ihtiyacınız olursa bize her zaman ulaşabilirsiniz!</p>
                </div>
            </div>
            <div className="image-container">
                <div className="image-box">
                    <img src="https://cdn-icons-png.freepik.com/256/9158/9158121.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid" alt="Ekiple Tanışın" />
                    <p>Ekiple Tanışın</p>
                </div>
                <div className="image-box">
                    <img src="https://cdn-icons-png.freepik.com/256/901/901049.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid" alt="Çalışmalarımızı Görüntüleyin" />
                    <p>Çalışmalarımızı Görüntüleyin</p>
                </div>
                <div className="image-box">
                    <img src="https://cdn-icons-png.freepik.com/256/7913/7913444.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid" alt="İletişime Geçin" />
                    <p>İletişime Geçin</p>
                </div>
            </div>
        </div>
    );
}
