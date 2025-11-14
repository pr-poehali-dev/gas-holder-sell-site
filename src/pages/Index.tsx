import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVolume, setSelectedVolume] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const gasCylinders = [
    { volume: '2700 л', price: 285000, houses: '100-150 м²', image: '🔵' },
    { volume: '4850 л', price: 385000, houses: '150-200 м²', image: '🟢' },
    { volume: '6400 л', price: 485000, houses: '200-300 м²', image: '🟡' },
    { volume: '9150 л', price: 625000, houses: '300+ м²', image: '🔴' },
  ];

  const advantages = [
    { icon: 'Zap', title: 'Автономность', desc: 'Независимость от центральных сетей' },
    { icon: 'DollarSign', title: 'Экономия', desc: 'До 40% дешевле магистрального газа' },
    { icon: 'Shield', title: 'Безопасность', desc: 'Современные системы защиты' },
    { icon: 'Clock', title: 'Быстрая установка', desc: 'От 1 до 3 дней под ключ' },
  ];

  const steps = [
    { number: '1', title: 'Заявка', desc: 'Оставьте заявку или позвоните нам' },
    { number: '2', title: 'Расчёт', desc: 'Выезд специалиста и расчёт стоимости' },
    { number: '3', title: 'Монтаж', desc: 'Установка газгольдера за 1-3 дня' },
    { number: '4', title: 'Запуск', desc: 'Проверка и запуск системы' },
  ];

  const calculatePrice = () => {
    const cylinder = gasCylinders.find(c => c.volume === selectedVolume);
    if (cylinder) {
      setCalculatedPrice(cylinder.price + 50000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b-4 border-lego-dark sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-lego-red">ГАЗГОЛЬДЕР.МСК</h1>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-lego-red transition-colors font-semibold">Каталог</a>
            <a href="#calculator" className="hover:text-lego-blue transition-colors font-semibold">Калькулятор</a>
            <a href="#process" className="hover:text-lego-yellow transition-colors font-semibold">Установка</a>
            <a href="#contacts" className="hover:text-lego-green transition-colors font-semibold">Контакты</a>
          </div>
          <Button className="lego-btn bg-lego-blue border-lego-dark text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-lego-dark">
            Газгольдеры для дома
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Автономное газоснабжение по Москве и МО под ключ
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="lego-btn bg-lego-blue border-lego-dark text-white text-lg px-8 py-6">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" className="lego-btn bg-white border-lego-dark text-lego-dark text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="lego-block bg-white border-lego-blue p-6 text-center animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-16 bg-lego-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={adv.icon as any} size={32} className="text-lego-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-lego-dark">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-lego-dark">Каталог газгольдеров</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gasCylinders.map((item, idx) => (
              <Card key={idx} className="lego-block bg-lego-light border-lego-red overflow-hidden">
                <div className="bg-gradient-to-br from-lego-blue/20 to-lego-green/20 p-8 text-center">
                  <div className="text-8xl mb-4">{item.image}</div>
                  <h3 className="text-3xl font-bold text-lego-dark">{item.volume}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-2">Для домов: {item.houses}</p>
                  <p className="text-3xl font-bold text-lego-red mb-4">
                    {item.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <Button className="lego-btn w-full bg-lego-blue border-lego-dark text-white">
                    Выбрать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="lego-block bg-white border-lego-yellow p-8">
            <h2 className="text-3xl font-bold mb-6 text-lego-dark text-center">Калькулятор стоимости</h2>
            <div className="space-y-4">
              <div>
                <Label className="text-lg font-semibold mb-2 block">Площадь дома (м²)</Label>
                <Input type="number" placeholder="Введите площадь" className="border-2 border-lego-dark" />
              </div>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Объём газгольдера</Label>
                <select 
                  className="w-full p-3 border-2 border-lego-dark rounded-md"
                  value={selectedVolume}
                  onChange={(e) => setSelectedVolume(e.target.value)}
                >
                  <option value="">Выберите объём</option>
                  {gasCylinders.map(c => (
                    <option key={c.volume} value={c.volume}>{c.volume}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Расстояние от МКАД (км)</Label>
                <Input type="number" placeholder="Введите расстояние" className="border-2 border-lego-dark" />
              </div>
              <Button 
                onClick={calculatePrice}
                className="lego-btn w-full bg-lego-green border-lego-dark text-white text-lg py-6"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать
              </Button>
              {calculatedPrice && (
                <div className="mt-6 p-6 bg-lego-green/10 border-4 border-lego-green rounded-lg text-center animate-scale-in">
                  <p className="text-lg mb-2">Примерная стоимость установки:</p>
                  <p className="text-4xl font-bold text-lego-green">
                    {calculatedPrice.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section id="process" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-lego-dark">Процесс установки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <Card key={idx} className="lego-block bg-lego-light border-lego-blue p-6 text-center">
                <div className="w-20 h-20 bg-lego-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-lego-dark">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="lego-block bg-white border-lego-green p-8">
            <h2 className="text-3xl font-bold mb-6 text-lego-dark text-center">Оставить заявку</h2>
            <form className="space-y-4">
              <div>
                <Label className="text-lg font-semibold mb-2 block">Ваше имя</Label>
                <Input placeholder="Иван Иванов" className="border-2 border-lego-dark" />
              </div>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Телефон</Label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="border-2 border-lego-dark" />
              </div>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Адрес участка</Label>
                <Input placeholder="Московская область" className="border-2 border-lego-dark" />
              </div>
              <div>
                <Label className="text-lg font-semibold mb-2 block">Комментарий</Label>
                <Textarea placeholder="Расскажите о вашем проекте" className="border-2 border-lego-dark" rows={4} />
              </div>
              <Button className="lego-btn w-full bg-lego-blue border-lego-dark text-white text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t-2 border-lego-dark">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Icon name="Phone" size={24} className="text-lego-red" />
                <a href="tel:+74951234567" className="text-2xl font-bold text-lego-dark hover:text-lego-red transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Mail" size={20} className="text-lego-blue" />
                <a href="mailto:info@gazgolder.msk" className="text-lg text-lego-dark hover:text-lego-blue transition-colors">
                  info@gazgolder.msk
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-lego-dark text-white py-8 px-4 border-t-4 border-lego-red">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">ГАЗГОЛЬДЕР.МСК</p>
          <p className="text-gray-400">Автономное газоснабжение © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;