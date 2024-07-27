import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div id="aboutPart" className='w-full flex justify-center items-center py-10'> 
            <div className="w-3/4 h-100 flex flex-col items-center">
                <div className="text-container items-center">
                    <h1>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ['<strong>Hoşgeldiniz, Biz BOHESA\'yız</strong>']
                            }}
                        />
                    </h1>
                    <div className="paragraphs">
                        <p>BOHESA olarak, yazılım dünyasında tutkuyla yaşayan altı kişilik bir ekibiz. Her birimiz aynı bölümde öğrenci olarak başladığımız bu serüvenimize  teknolojiyle sınırları zorlamak için bir araya geldik.Kullanıcı odaklı yaklaşımımız ve yenilikçi çözümler üretme tutkumuzla her projede teknolojinin gücünü keşfetmeye devam ediyoruz.</p>
                        <p>Derin teknik bilgimiz ve birlikte çalışma gücümüzle her zaman önde olmayı hedefliyoruz. BOHESA olarak, geleceği yazılımın gücüyle şekillendiriyor ve teknolojinin getirdiği potansiyeli en üst düzeyde kullanmayı amaçlıyoruz.Herhangi bir projede veya teknolojiyle ilgili keşif yaparken yardıma ihtiyacınız olursa bize her zaman ulaşabilirsiniz!</p>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-box">
                        <img src="https://cdn-icons-png.flaticon.com/128/17017/17017788.png" alt="Ekiple Tanışın" />
                        <p>Ekiple Tanışın</p>
                    </div>
                    <div className="image-box">
                        <img src="https://cdn-icons-png.flaticon.com/128/10242/10242221.png" alt="Çalışmalarımızı Görüntüleyin" />
                        <p>Çalışmalarımızı Görüntüleyin</p>
                    </div>
                    <div className="image-box">
                        <img src="https://cdn-icons-png.flaticon.com/128/17399/17399740.png" alt="İletişime Geçin" />
                        <p>İletişime Geçin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
