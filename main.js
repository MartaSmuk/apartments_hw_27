/**
 1. Створити клас Людина.

Властивості:
імʼя;
стать.
Методи:
конструктор, який приймає два параметри: імʼя та стать.

2. Створити клас Квартира.
Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

3. Створити клас Будинок.

Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;

додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.
 */

//Створити клас Людина.
class Human {
    constructor(name, sex ) {
        this.name = name;
        this.sex = sex;
    }
}

//Створити клас Квартира.
class Apartment {
    residents = [];
    addResident(resident) {
        this.residents.push(resident);
    }
}

//Створити клас Будинок.
class House {
    apartments = [];
    constructor(maxApts) {
        this.maxApts = maxApts;
    }
    addApartment(apt) {
        if(this.apartments.length < this.maxApts) {
            this.apartments.push(apt);
        } else {
            console.log("The limit of possible number of apartments is over")
        }
    }
}

//декілька екземплярів класу Людина;
const Serge = new Human("Serge", "male");
const Ljuba = new Human("Ljuba", "female");
const Ihor = new Human("Ihor", "male");
const Maria = new Human("Maria", "female");

//декілька екземплярів класу Квартира;
const twoRoomsApt = new Apartment();
const oneRoomApt = new Apartment();
const threeRoomsApt = new Apartment();
const fourRoomsApt = new Apartment();
const fiveRoomsApt = new Apartment();

//екземпляр класу Будинок;
const ourHouse = new House(4);

//додадити екземпляри класу Людина до екземплярів класу Квартира;
twoRoomsApt.addResident(Serge);
twoRoomsApt.addResident(Ihor);

fourRoomsApt.addResident(Ljuba);
fourRoomsApt.addResident(Maria);


//додадити екземпляри класу Квартира до екземплярів класу Будинок.
ourHouse.addApartment(twoRoomsApt);
ourHouse.addApartment(fourRoomsApt);
ourHouse.addApartment(oneRoomApt);
ourHouse.addApartment(threeRoomsApt);
ourHouse.addApartment(fiveRoomsApt);
console.log(ourHouse);
