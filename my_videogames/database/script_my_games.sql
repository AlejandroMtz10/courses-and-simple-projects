create database if not exists videogames;

use videogames;

create table clasifications_esrb(
	id_clasification int auto_increment primary key,
    symbol varchar(10) not null,
    clasification varchar(50) not null,
    description varchar(255) not null
);
create table consoles(
	id_console int auto_increment primary key,
    console varchar(100) not null
);

create table videogames(
	id_videogame int auto_increment primary key,
    id_clasification int not null,
    id_console int not null,
    videogame varchar(100) not null,
    price decimal(10,2) not null,
    history_completed decimal(10,2) not null,
    game_completed boolean not null,
    foreign key (id_clasification) references clasifications_esrb (id_clasification),
    foreign key (id_console) references consoles(id_console)
);