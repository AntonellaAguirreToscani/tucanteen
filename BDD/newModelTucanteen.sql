create database tuCanteen;
use tucanteen;


-- Table e01_type_user

create table e01_type_user(
	type_user_id integer not null auto_increment,
    
    type_description varchar(45) not null,
    
    constraint PK_e01_type_user PRIMARY KEY (type_user_id)
);

-- Table e01_user

create table e01_user(
	user_id integer not null auto_increment,
    
    user_name varchar(45) not null,
    
    user_password varchar(45) not null,
    
    first_name varchar (45) not null,
    
    last_name varchar (45) not null,
    
    type_user_id integer not null,
    
    CONSTRAINT PK_e01_user PRIMARY KEY (user_id),
    
    constraint FK_e01_user foreign key (type_user_id) references e01_type_user(type_user_id)
);


create table e01_order(
	order_id integer not null auto_increment,
    
    order_date date not null,
    
    order_time time not null,
    
    delivery_time time not null,
    
    total int not null,
    
    state varchar(45),
    
    user_id integer not null,
    
    constraint pk_e01_order primary key(order_id),
    constraint fk_e01_order foreign key(user_id) references e01_user(user_id)
);

create table e01_detail_order(
	order_id int not null,
    
    product_id int not null,
    
    constraint fk_order_id foreign key(order_id) references e01_order(order_id),
    constraint fk_product_id foreign key(product_id) references e01_product(product_id)
);

create table e01_product(
	product_id integer not null auto_increment,
    
    product_name varchar(45) not null,
    
    product_description varchar(45) not null, 
    
    price float not null,
    
    photo blob not null,
    
    type_product_id int not null,
    
    constraint pk_e01_order primary key(product_id),
    constraint fk_e01_type_product foreign key(type_product_id) references e01_type_product(type_product_id)
);

create table e01_type_product(
	type_product_id int not null auto_increment,
    
    category varchar(45) not null,
    
    constraint pk_type_product primary key(type_product_id)
);
