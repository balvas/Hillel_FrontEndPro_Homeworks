const userProfile = {
    userBirthDate: '',
    userCity: '',
    userFavoriteSport: ''
};

userProfile.userBirthDate = +prompt('Введіть свій рік народження', '');
userProfile.userCity = prompt('Введіть назву Вашого міста', '');
userProfile.userFavoriteSport = prompt('Введіть улюблений вид спорту', '');
let messageCity = '';
let messageFavoriteSport = '';

if (!userProfile.userCity) {
    messageCity = '';
} else {
switch (userProfile.userCity) {
    case 'Київ':
    case 'Киев':
    case 'Kyiv':
        messageCity = 'Ти живеш у столиці України';
        break;
    case 'Вашингтон':
        messageCity = 'Ти живеш у столиці США';
        break;
    case 'Лондон':
        messageCity = 'Ти живеш у столиці Великобританії';
        break;
    default:
        messageCity = 'Ти живеш у місті ' + userProfile.userCity;
}
}
const currentYear = new Date().getFullYear();
let userAge = '';
if (userProfile.userBirthDate != 0) {
userAge = currentYear - userProfile.userBirthDate;
} else {
    userAge = 'неможливо вирахувати';
}
switch (userProfile.userFavoriteSport) {
    case 'бокс':
        messageFavoriteSport = 'Круто! Хочеш прославити Україну як брати Кличко?';
        break;
    case 'футбол':
        messageFavoriteSport = 'Круто! Хочеш встати на один щабель із Лобановським та Шевченко?';
        break;
    case 'Формула 1':
    case 'Формула1':
    case 'Fornula 1':
    case 'Fornula1':
    case 'F1':
        messageFavoriteSport = 'Круто! Хочеш стати новою світовою зіркою як Шумахер або Хемілтон?';
        break;
}

let emptyProps = [];
emptyCheking();
function emptyCheking() {

    if (!userProfile.userBirthDate) {
        emptyProps.push(`дату народження`);
    }
    if (!userProfile.userCity) {
        emptyProps.push(`назву міста`);
    }
    if (!userProfile.userFavoriteSport) {
        emptyProps.push(`улюблений спорт`);
    }

    if (emptyProps.length !=0) {
        alert(`Шкода, що Ви не захотіли ввести ${emptyProps.join(", ")}`);
    }
    }


if (userAge != currentYear || userProfile.userCity.length || userProfile.userFavoriteSport.length) {
    alert(`Твій вік - ${userAge}\r\n${messageCity}\r\n${messageFavoriteSport}`);
} 
