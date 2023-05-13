const axios = require('axios');

let url = 'https://api.github.com/users/google/repos?per_page=10&sort=stars&direction=desc'

axios.get('https://api.github.com/users/google/repos?per_page=10&sort=stars&direction=desc')
  .then(response => {
    console.log('Los 10 repositorios más populares de Google son:');
    response.data.forEach(repo => {
      console.log(`${repo.name} - ${repo.stargazers_count} estrellas`);
    });
  })
  .catch(error => {
    console.log('Ha ocurrido un error al obtener los repositorios:', error.message);
  });
