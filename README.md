
# Сайт новостного агенства

## О проекте
Веб-приложение позволяет просматривать новости по различным категориям, производить поиск новостей и наполнять контентом новостной портал через систему управления контентом.
Так же в приложении есть возможность авторизации, которая нужна для входа в систему управления контентом, динамической загрузки, возможность добавления изображения(ий), текстовой информации с последующий загрузкой на сервер (JSON SERVER)

## Новостной портал содержит следующие страницы:
`http://localhost:3000/login` - Страница для авторизации в систему управлением контента
`http://localhost:3000/homepage` - Домашняя страница
`http://localhost:3000/new/<id>` - Старница записи с определенным id
`http://localhost:3000/allNews` - Страница, которая отображает все новости по выбранным каегориям

## Запуск веб-приложения новостной портал
* Необходимо установить и запустить сервер, вся инструкция по установке и запуску сервера находится по ссылке [Json-server](https://github.com/MBalemba/LabProject_Front2021_Server)
* Клонируйте репозиторий на свое устройство, для этого используйте команду `git clone https://github.com/MBalemba/LabProject_Front2021.git`
* В командной строке перейти в папку LabProject_Front2021 и запустить команду `npm install` для загрузки всех необходимых зависимостей и пакетов
* Команда `npm start` -  запустит проект
* Откройте [http://localhost:3000/login](http://localhost:3000/login) для просмотра приложения в браузере


### Использование

+ Основная страница приложения 
![image](https://user-images.githubusercontent.com/68498352/111598816-a83e2080-87e0-11eb-9080-0b7e996c44ff.png)
+ Страница с новостью 
![image](https://user-images.githubusercontent.com/68498352/111598865-b55b0f80-87e0-11eb-86b2-cbb85681377e.png)
+ Выпадающее меню для выбора интересующей категории, не выбирая не одну из категорий и применяя фильтр будет осущевствлен просмотр по всем категориям - 
![image](https://user-images.githubusercontent.com/68498352/111595822-9313c280-87dd-11eb-84bc-d59b750ba527.png)
+ Страница, которая открывается после применения фильтра, есть возможность поиска записи, поиск работает только на те категории, которые вы выбрали в выпадающем меню -
![image](https://user-images.githubusercontent.com/68498352/111598996-dc194600-87e0-11eb-9a90-cf4f5d205546.png)
+ Для перехода в систему управлением контента введите в адресной строке [http://localhost:3000/login](http://localhost:3000)
http://localhost:3000/login - адрес, который позволяет войти на страницу логинизации
![image](https://user-images.githubusercontent.com/68498352/111599178-0ff46b80-87e1-11eb-8405-8e43dfc22961.png)
![image](https://user-images.githubusercontent.com/68498352/111599302-31555780-87e1-11eb-9045-a3919d6253ea.png)
![image](https://user-images.githubusercontent.com/68498352/111599454-55b13400-87e1-11eb-80e9-d0243a41ed9b.png)
![image](https://user-images.githubusercontent.com/68498352/111599531-69f53100-87e1-11eb-988f-8dd389bbfc2d.png)

+ Страница создания записи, открывается сразу после успешной логинизации
![image](https://user-images.githubusercontent.com/68498352/111599637-8ee9a400-87e1-11eb-8586-b6d9cc2dde40.png)
+ Страница для просмотра всех записей, включает возможность удаления карточек, их редактирования, просмотра содержимого новости, так же доступна функция поиска интересующей карточки и фильтрация 
![image](https://user-images.githubusercontent.com/68498352/111600241-44b4f280-87e2-11eb-94d5-e2468fbfb4af.png)
 















