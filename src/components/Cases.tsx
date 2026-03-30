"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Cases() {
  const cases = [
    {
      task: "Срочный выкуп с обременением",
      risk: "Объект находился в залоге у банка, плюс висел долг ФССП на 15 млн руб. Собственнику грозили торги через 2 недели.",
      execution: "Выкупили долг ФССП за 2 дня. Параллельно провели юридическую очистку реестров и сняли банковский залог. Расчеты проводились траншами через 3 аккредитива.",
      result: "Клиент сохранил 45 млн руб. капитала, избежав торгов. Сделка закрыта за 9 рабочих дней.",
      metric: "9 дней",
      metricLabel: "срок сделки"
    },
    {
      task: "Скрытый off-market",
      risk: "Собственник (Politically Exposed Person) запретил публиковать фото и адрес пентхауса. Риск 0% трафика с открытых площадок Циан/Авито.",
      execution: "Упаковали объект в закрытый инвест-меморандум. Провели 4 презентации по собственной базе family offices. Без размещения в интернете.",
      result: "Найден покупатель за 2 недели без единой утечки данных. Продажа на 8% выше ожиданий продавца.",
      metric: "+8%",
      metricLabel: "к цене сделки"
    },
    {
      task: "Сложная цепь + Расселение",
      risk: "Требовалось продать 3 квартиры в старом фонде с неузаконенными перепланировками и опекой, чтобы купить один особняк.",
      execution: "Синхронизировали работу 4 банков. Одновременно узаконили перепланировки и получили разрешения органов опеки. Сделка прошла в 1 день.",
      result: "Вся цепочка (4 объекта) зарегистрирована день в день без разрыва сроков. Клиенты заехали в особняк.",
      metric: "4 объекта",
      metricLabel: "в 1 сделке"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#C1A080] mb-4 block">Реальная практика</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] max-w-2xl leading-[1.1]">
              Мы не продаем стены. Мы решаем задачи капитала.
            </h2>
          </div>
          <a href="#contacts" className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#1A1A1A] hover:text-[#C1A080] transition-colors whitespace-nowrap">
            Все кейсы <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((deal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-[#F8F8F8] p-8 border border-gray-100 flex flex-col group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200">
                <h3 className="font-serif text-2xl text-[#1A1A1A]">{deal.task}</h3>
                <div className="text-right shrink-0 ml-4">
                  <span className="block text-2xl text-[#C1A080] font-medium tracking-tighter">{deal.metric}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">{deal.metricLabel}</span>
                </div>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                <div>
                  <span className="text-xs uppercase tracking-widest text-red-400 font-medium block mb-2">Риски ситуации</span>
                  <p className="text-gray-600 font-light text-sm">{deal.risk}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#1A1A1A] font-medium block mb-2">Что было сделано</span>
                  <p className="text-gray-600 font-light text-sm">{deal.execution}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-widest text-green-600 font-medium block mb-2">Итог</span>
                  <p className="text-[#1A1A1A] font-medium text-sm">{deal.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
