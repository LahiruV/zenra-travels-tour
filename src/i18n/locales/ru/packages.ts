export const packages = {
  title: 'Исследуйте наши пакеты',
  subtitle: 'Откройте для себя наши тщательно подобранные туристические пакеты для незабываемого путешествия по Шри-Ланке',
  items: {
    culturalHeritage: {
      title: "Тур по культурному наследию",
      description: "Исследуйте древние храмы, исторические места и традиционные деревни.",
      image: "https://images.unsplash.com/photo-1625467096769-fdd3ffac8c6e?q=80&w=800&auto=format&fit=crop",
      price: 1299,
      duration: "6 дней",
      groupSize: "Максимум 12 человек",
      startDate: "Доступно круглый год"
    },
    beachParadise: {
      title: "Пляжный рай",
      description: "Отдохните на нетронутых пляжах и насладитесь водными видами спорта.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
      price: 999,
      duration: "5 дней",
      groupSize: "Максимум 10 человек",
      startDate: "Доступно круглый год"
    },
    wildlifeSafari: {
      title: "Сафари-приключение",
      description: "Встреча со слонами, леопардами и экзотическими птицами в их естественной среде обитания.",
      image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=800&auto=format&fit=crop",
      price: 1499,
      duration: "7 дней",
      groupSize: "Максимум 8 человек",
      startDate: "Доступно круглый год"
    }
  },
  filters: {
    duration: {
      label: 'Продолжительность',
      all: 'Любая продолжительность',
      short: '1-3 дня',
      medium: '4-7 дней',
      long: '8+ дней'
    },
    price: {
      label: 'Ценовой диапазон',
      all: 'Все цены',
      budget: '$0 - $1,000',
      standard: '$1,000 - $2,000',
      luxury: '$2,000+'
    }
  },
  booking: {
    title: 'Забронировать поездку',
    form: {
      firstName: 'Имя',
      lastName: 'Фамилия',
      email: 'Электронная почта',
      phone: 'Телефон',
      travelDate: 'Дата поездки',
      adults: 'Количество взрослых',
      children: 'Количество детей',
      services: {
        title: 'Дополнительные услуги',
        meals: 'Включить питание',
        transport: 'Включить транспорт',
        accommodation: 'Включить проживание'
      },
      specialRequests: {
        label: 'Особые пожелания',
        placeholder: 'Необязательно: Любые диетические требования или особые условия'
      },
      submit: 'Забронировать',
      perPerson: '/чел.'
    }
  }
};