
# Сайт новостного агенства

## О проекте
1) Веб-приложение позволяет просматривать новости по различным категориям, производить поиск новостей и наполнять контентом новостной портал через систему управления контентом.
Так же в приложении есть возможность авторизации, которая нужна для входа в систему управления контентом, динамической загрузки контента, возможность добавления изображения(ий), текстовой информации с последующий загрузкой на сервер.
2) Приложение создано с использованием бибиблиотеки React.js, приложение адаптивно для размеров браузерного окна от 320px вплоть до 1920px.

## Новостной портал содержит следующие страницы:
+ `http://localhost:3000/login` - Страница для авторизации в систему управлением контента

Авторизованные пользователи имеют доступ к следующим страницам:
+ `http://localhost:3000/CMS/CreatePostPage` - Страница создания и редактирования новостей, доступна для авторизованных пользователей
+ `http://localhost:3000/CMS/AllPosts` - Страница просмотра всех новостей для администратора, доступна для авторизованных пользователей
+ `http://localhost:3000/homepage` - Домашняя страница
+ `http://localhost:3000/new/<id>` - Старница новости
+ `http://localhost:3000/allNews` - Страница просмотра всех новостей для посетителя портала

Неавторизованные пользователи имеют доступ к следующим страницам: 
+ `http://localhost:3000/homepage` - Домашняя страница
+ `http://localhost:3000/new/<id>` - Старница новости
+ `http://localhost:3000/allNews` - Страница просмотра всех новостей для посетителя портала

## Запуск веб-приложения новостной портал
* Необходимо установить и запустить сервер, вся инструкция по установке и запуску сервера находится по ссылке [Json-server](https://github.com/MBalemba/LabProject_Front2021_Server)
* Клонируйте репозиторий на свое устройство, для этого используйте команду `git clone https://github.com/MBalemba/LabProject_Front2021.git`
* В командной строке перейти в папку LabProject_Front2021 и запустить команду `npm install` для загрузки всех необходимых зависимостей и пакетов
* Команда `npm start` -  запустит проект
* Откройте [http://localhost:3000](http://localhost:3000) для просмотра приложения в браузере


## Демонстрация работы новостного портала

### _**Основная страница приложения**_
>![image](https://user-images.githubusercontent.com/68498352/111686781-8a050e80-883a-11eb-8663-e45ea2e7685e.png)


### **_Страница с новостью_**  
>![image](https://user-images.githubusercontent.com/68498352/111686865-a4d78300-883a-11eb-944f-55a89c8ff50c.png)

Выпадающее меню реализованно для выбора интересующей категории, не выбирая не одну из категорий и применяя фильтр будет осущевствлен просмотр по всем категориям. 
>![image](https://user-images.githubusercontent.com/68498352/111686968-c9335f80-883a-11eb-83f3-920d229156d6.png)


### Страница всех новостей
Данная страница открывается после применения фильтра, есть возможность поиска записи, поиск работает только на те категории, которые вы выбрали в выпадающем меню
>![image](https://user-images.githubusercontent.com/68498352/111687081-eec06900-883a-11eb-9726-5f2ae231481e.png)

---
### **_Страница логинизации_**
Для перехода на эту страницу введите в адресной строке вашего браузера [http://localhost:3000/login](http://localhost:3000/login)
>![image](https://user-images.githubusercontent.com/68498352/111687595-7e661780-883b-11eb-8a1e-b0eb5181f6c5.png)


>![image](https://user-images.githubusercontent.com/68498352/111687651-93db4180-883b-11eb-8531-95fdb8414caa.png)


>![image](https://user-images.githubusercontent.com/68498352/111599454-55b13400-87e1-11eb-80e9-d0243a41ed9b.png)

>![image](https://user-images.githubusercontent.com/68498352/111599531-69f53100-87e1-11eb-988f-8dd389bbfc2d.png)

### **_Страница создания записи_**
Открывается сразу после успешной логинизации, страница предназначена для создания записей и редактирования уже сущевствующих, при попытке перехода на адрес сраницы неавторизованными пользователями произойдет редирект на главную страницу.
>![image](https://user-images.githubusercontent.com/68498352/111689023-8f635880-883c-11eb-8513-bb9976aa3e0d.png)
>![image](https://user-images.githubusercontent.com/68498352/111689307-ebc67800-883c-11eb-8064-c6221297084d.png)
>![image](https://user-images.githubusercontent.com/68498352/111689649-5972a400-883d-11eb-8c38-f11c8b5aa117.png)
>![image](https://user-images.githubusercontent.com/68498352/111689777-845cf800-883d-11eb-97b7-1d6e28b74108.png)
>![image](https://user-images.githubusercontent.com/68498352/111689946-ac4c5b80-883d-11eb-852d-0a227b9c7610.png)
>![image](https://user-images.githubusercontent.com/68498352/111690034-c71ed000-883d-11eb-8a58-64cb9d4d161c.png)




### **_Страница для просмотра всех записей администратором_**
Включает возможность удаления карточек, их редактирования, просмотра содержимого новости, так же доступна функция поиска интересующей карточки и фильтрации
>![image](https://user-images.githubusercontent.com/68498352/111690141-e3227180-883d-11eb-92c7-15c62682b149.png)
![image](https://user-images.githubusercontent.com/68498352/111690561-66dc5e00-883e-11eb-8e66-988056de63e9.png)


 












