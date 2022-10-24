import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  local: 'uz',
  fallbackLocale: 'uz',

  message: {
    ru: {
      about: 'о нас',
      document: 'Документ',
      title: 'Автошкола',
      subtitle: ' Экзаменационный центр для сдачи экзаменов на получения национальных водительских прав',
      headerBtn: 'Узнать больше',
      video: 'Смотреть видео',
      money: 'Минимизировать случаи коррупции за счет исключения человеческого фактора на всех этапах сдачи экзамена на получение водительских прав',
      rocket: 'Повышение качества и эффективности подготовки водителей, снижение аварийности на дорогах',
      message: 'Повышение уровня объективности при оценке навыков вождения автомобиля',
      students: 'Для каждого ученика составляется индивидуальное расписание по обучению вождению в удобное время, включая выходные дни.Все инструктора ежедневно проходят медицинский осмотр. Полная дезинфекция автомобиля. Мы соблюдаем стандарты ведения безопасной деятельности.',
      car: 'Устройство и техническое обслуживание автомобиля. Основы безаварийного вождения. Навыки первой медицинской помощи. Аспекты юридических взаимоотношений на дороге.',
      gibdd: ' Предоставляем пакет документов для ГИБДД. Сопровождение при сдаче экзамена, включая любое количество пересдач.',
      aboutText: 'На праве субъекта предпринимательства, В Республике Узбекистан получило право оказания государственной услуги по проведению теоретических и практических экзаменов на получение водительского удостоверения. Для реализации данной государственной услуги на высоком уровне на территории города Сырдарья создан современный экзаменационный центр - «SIRDARYO IMTIXON MARKAZI». Экзаменационный центр создан с соотвествием государственным требованиям для проведения и оценки теоретических и практических экзаменов полностью в автоматизированном режиме. Основные цели создания центра: • Повышение качества подготовки водителей; • Снижение дорожно транспортных происшествий на дорогах; • Исключение коррупционной составляющей на всех этапах прохождения экзамена; • Повышение уровня объективности в оценке водительского мастерства; • Обеспечение прозрачности экзаменационного процесса, как для самих кандидатов, так и для контролирующих органов.',
      howToDriveTitle: 'Обучение вождению',
      howToDriveSubtitle: 'Обратившись к нам, Вы можете быть уверены в том, что мы сможем подстроить график обучения под Ваш ритм жизни. Наши преподаватели демонстрируют высокую компетенцию при обучении начинающих водителей, не только прививая навыки и умения, дающие уверенность в любой дорожной ситуации, но и помогая преодолеть страхи и стресс, связанные с интенсивным городским автомобильным движением.',
      contacts: 'Контакты',
      time: 'Часы работы c 9:00 - 18:00 Обед с 13:00 - 14:00',
      adress: 'Aдрес МИРЗААБАДСКИЙ район (Сырдарьинской области М. УЛУГБЕК МФИ',
      socialLinks: 'Мы в социальных сетях'
    },

    uz: {
      title: 'avtoshkola',
      subtitle: 'Ekzamenasionniy tsentr dlya sdachi ekzamenov na polucheniya nasionalnix voditelskix prav',
      headerBtn: 'uznat bolshe',
      video: 'smotret video',
      money: 'minimizirovat sluchai korrupsii za schet isklyucheniya chelovecheskogo faktora na vsex etapax sdachi ekzamena na Poluchenie voditelskix prav',
      rocket: 'Povishenie kachestva i effektivnosti podgotovki voditeley, snijenie avariynosti na dorogax',
      message: `Povishenie urovnya ob'ektivnosti pri otsenke Navikov vojdeniya avtomobilya`,
      students: `har bir talaba uchun qulay vaqtda, shu jumladan dam olish kunlari haydashni o'rgatish uchun individual jadval tuziladi.Barcha o'qituvchilar har kuni tibbiy ko'rikdan o'tadilar. Avtomobilni to'liq dezinfektsiya qilish. Biz xavfsiz faoliyatni amalga oshirish standartlariga rioya qilamiz`,
      car: `avtomobil qurilmasi va texnik xizmat ko'rsatish. Muammosiz haydash asoslari. Birinchi yordam ko'nikmalari. Yo'lda huquqiy munosabatlarning jihatlari`,
      gibdd: `yo'l harakati politsiyasi uchun hujjatlar to'plamini taqdim etamiz. Imtihonni topshirishda, shu jumladan har qanday miqdordagi qayta topshirishda hamrohlik qilish.`,
      aboutText: `tadbirkorlik sub'ekti huquqi asosida O'zbekiston Respublikasida haydovchilik guvohnomasini olish uchun nazariy va amaliy imtihonlarni o'tkazish bo'yicha davlat xizmatini ko'rsatish huquqi berildi. Ushbu davlat xizmatini yuqori darajada amalga oshirish uchun Sirdaryo shahrida zamonaviy imtihon markazi - "SIRDARYO IMTIXON MARKAZI"tashkil etildi. Imtihon markazi nazariy va amaliy imtihonlarni to'liq avtomatlashtirilgan rejimda o'tkazish va baholash uchun davlat talablariga muvofiq tashkil etilgan. Markazni tashkil etishning asosiy maqsadlari: * haydovchilarni tayyorlash sifatini oshirish; • yo'llarda yo'l-transport hodisalarini kamaytirish; • imtihonning barcha bosqichlarida korruptsiya tarkibiy qismini chiqarib tashlash; • haydovchilik mahoratini baholashda xolislik darajasini oshirish; * nomzodlarning o'zlari uchun ham, nazorat organlari uchun ham imtihon jarayonining shaffofligini ta'minlash.`,
      howToDriveTitle: `haydashni o'rganish`,
      howToDriveSubtitle: `bizga murojaat qilib, biz sizning hayot ritmingizga o'quv jadvalini moslashtira olishimizga amin bo'lishingiz mumkin. Bizning o'qituvchilarimiz yangi haydovchilarni o'qitishda yuqori malakalarni namoyish etadilar, bu nafaqat har qanday yo'l sharoitida ishonch hosil qiladigan ko'nikma va malakalarni singdiribgina qolmay, balki shaharning og'ir transport harakati bilan bog'liq qo'rquv va stressni engishga yordam beradi.`,
      contacts: `kontaktlar`,
      time: 'ish vaqti 9: 00 dan 18:00 gacha tushlik 13: 00 dan 14: 00 gacha',
      adress: `manzil Mirzaobod tumani (Sirdaryo viloyati M. Ulug'bek MFI`,
      socialLinks: `biz ijtimoiy tarmoqlardamiz`
    }
  }
})