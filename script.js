let form = document.createElement('div');

form.innerHTML = `
    <style>
        .output {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
        }
    </style>
    <form class="output">
        <h3>Введите фамилию</h3>
        <input type="text" placeholder="Введите фамилию здесь...">
        
        <h3>Введите имя</h3>
        <input type="text" placeholder="Введите имя здесь...">
        
        <h3>Введите логин</h3>
        <input type="text" placeholder="Введите логин здесь...">
        
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
            `${textLogin.value.trim()},${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}CZN86,${textFirstName.value},${textLastName.value},${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}CZN86,${textLogin.value[0]}${textLogin.value.slice(-2).toLowerCase()}186czn,1`);
        textLastName.value = '';
        textFirstName.value = '';
        textLogin.value = '';
    }
});