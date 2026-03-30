import { ShieldCheck, Scale, Lock, Landmark, FileText, CheckCircle2 } from "lucide-react";

export function TrustBanner() {
  const features = [
    {
      icon: <Landmark className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Безопасные расчеты",
      desc: "Открытие аккредитивов, эскроу-счетов и ячеек в ведущих банках РФ. Полный контроль движения средств до получения выписки ЕГРН."
    },
    {
      icon: <Scale className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Глубокий Legal Check",
      desc: "Юридическая проверка объекта по 21 пункту: от истории переходов права до скрытых обременений и банкротства физических лиц."
    },
    {
      icon: <Lock className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Конфиденциальность",
      desc: "Закрытые показы и off-market сделки. Строгий NDA. Ваши капиталы и личные данные остаются абсолютно невидимыми для рынка."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Сопровождение под ключ",
      desc: "Берем на себя всю бюрократию: от сбора справок для опеки до контроля регистрации в Росреестре. Вы только подписываете договор."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Прозрачная коммуникация",
      desc: "Личный брокер на связи 24/7. Никаких скрытых комиссий, навязанных услуг и «серых» схем. Стоимость услуг фиксируется на берегу."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />,
      title: "Сложные сценарии",
      desc: "Расселение коммерции, срочный выкуп, сделки с обременениями, работа с материнским капиталом в премиум сегменте и межрегиональные обмены."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-accent mb-4 block">Архитектура Доверия</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] max-w-2xl leading-[1.1]">
            Почему нам доверяют<br/>сложные капиталы.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#F8F8F8] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-[#1A1A1A]">{feature.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
