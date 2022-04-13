// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const createAustralianPeopleList = (person) => {
    const { name, bornIn, nationality } = person;
    if (bornIn > 1900 && bornIn < 2001 && nationality === 'Australian'){
        return name;
    }};

  const filterPeople = (people) => {
    const australianPeople = people.filter(createAustralianPeopleList);
    console.log(australianPeople);
  };

  filterPeople(people);
