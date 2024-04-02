let form = document.createElement('div');

form.innerHTML = `
    <style>
        .output {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
        }
    </style>
    <form class="output" autocomplete="off">
        <h3>Фамилия</h3>
        <input oninput="checkInputIsCyrillic(this, false)" type="text" placeholder="Введите здесь...">
        
        <h3>Имя и отчество</h3>
        <input oninput="checkInputIsCyrillic(this, true)" type="text" placeholder="Введите здесь...">
        
        <h3>Логин</h3>
        <input oninput="checkInputIsLatin(this)" type="text" placeholder="Введите здесь...">
        
        <button type="button">Отправить</button>
    </form>
`;

document.body.append(form);

form = document.getElementsByClassName('output')[0];
form.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const textLastName = form.getElementsByTagName('input')[0];
        const textFirstName = form.getElementsByTagName('input')[1];
        const textLogin = form.getElementsByTagName('input')[2];

        console.log(
            `${textLogin.value},${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}CZN86,${textFirstName.value},${textLastName.value},${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}CZN86,${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}186czn,1`);
        textLastName.value = '';
        textFirstName.value = '';
        textLogin.value = '';
    }
});

function checkInputIsLatin(input) {
    const value = input.value.trim();
    if (value.length === 0) {
        alert('Поле не может быть пустым.');
        input.value = '';
    } else if (!/^[a-zA-Z]+$/.test(value)) {
        alert('В поле Логин используйте только латиницу без пробелов и спецсимволов.');
        input.value = '';
    }
}

function checkInputIsCyrillic(input, allowSpaces) {
    const pattern = allowSpaces ? /^[а-яё]+((\s+)|$)/i : /^[а-яё]+$/i;
    if (pattern.test(input.value) === false) {
        alert('Введите текст на кириллице.');
        input.value = '';
    }
}