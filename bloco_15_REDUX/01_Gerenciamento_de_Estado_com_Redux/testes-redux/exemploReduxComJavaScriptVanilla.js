const Redux = require('redux');

// A função abaixo é uma actionCreator, que nada mais é que uma função que retorna uma action. Lembremos que uma action é responsável por alterar o estado de uma aplicação.
const fazerLogin = (email) => ({
    type: "LOGIN",
    email});


// O estado incial de nossa aplicação
const ESTADO_INICIAL = {
    login: false,
    email: "",
}

// Uma store depende de uma função REDUCER para alterar seus dados. O REDUCER recebe como primeiro parâmetro um state. O ideal é que esteja em um arquivo separado, mas por fins de didática, deixaremos todos os componentes em um mesmo arquivo
const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                login: !state.login,
                email: action.email
            };
        default: // Lembre-se que devemos ter sempre um caso default, no Switch
            return state;
    }
};

// Aqui criamos uma pequena STORE. Iremos criar uma action para alterá-la
const store = Redux.createStore(reducer);

// A função dispatch() encaminha uma action para o Reducer, que é responsável por solicitar a alteraao do estado armazenado no store
store.dispatch(fazerLogin('edu@l7.com'));

// Com a função getState() recuperamos a informação do estado
console.log(store.getState());