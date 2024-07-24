
import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div className='w-100 flex justify-center items-center'> 
            <div className="w-3/4 h-100 flex flex-col items-center">
            <div className="text-container items-center">
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
        </div>
    );
}
