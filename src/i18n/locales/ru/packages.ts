export const packages = {
  title: 'Исследуйте наши пакеты',
  subtitle: 'Откройте для себя наши тщательно подобранные туристические пакеты для незабываемого путешествия по Шри-Ланке',
  items: {
    culturalHeritage: {
      title: "Тур по культурному наследию",
      description: "Исследуйте древние храмы, исторические места и традиционные деревни.",
      image: "https://images.pexels.com/photos/19759365/pexels-photo-19759365/free-photo-of-buddha-statues-at-gangaramaya-temple-in-colombo-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1299,
      duration: "6 дней",
      groupSize: "Максимум 12 человек",
      startDate: "Доступно круглый год"
    },
    beachParadise: {
      title: "Пляжный рай",
      description: "Отдохните на нетронутых пляжах и насладитесь водными видами спорта.",
      image: "https://images.pexels.com/photos/5549239/pexels-photo-5549239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 999,
      duration: "5 дней",
      groupSize: "Максимум 10 человек",
      startDate: "Доступно круглый год"
    },
    wildlifeSafari: {
      title: "Сафари-приключение",
      description: "Встреча со слонами, леопардами и экзотическими птицами в их естественной среде обитания.",
      image: "https://images.pexels.com/photos/17281950/pexels-photo-17281950/free-photo-of-elephants-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1499,
      duration: "7 Days",
      groupSize: "Max 8 people",
      startDate: "Available year-round"
    }
  },
  filters: {
    duration: {
      label: 'Duration',
      all: 'All Durations',
      short: '1-3 Days',
      medium: '4-7 Days',
      long: '8+ Days'
    },
    price: {
      label: 'Price Range',
      all: 'All Prices',
      budget: '$0 - $1,000',
      standard: '$1,000 - $2,000',
      luxury: '$2,000+'
    }
  },
  booking: {
    title: 'Book Your Trip',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      travelDate: 'Travel Date',
      adults: 'Number of Adults',
      children: 'Number of Children',
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