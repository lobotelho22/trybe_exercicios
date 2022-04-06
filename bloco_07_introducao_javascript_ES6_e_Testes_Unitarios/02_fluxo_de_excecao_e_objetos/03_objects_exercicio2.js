//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
      const arraySkill = Object.keys(student);
      for (let i = 0; i < arraySkill.length; i += 1) {
          const message = `${arraySkill[i]}: ${student[arraySkill[i]]}`;
          console.log(message);
      }
  }

  listSkills(student1);
  console.log('');
  listSkills(student2);