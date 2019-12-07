CREATE TABLE user
(
    id       BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    name     VARCHAR(50) NOT NULL,
    email    VARCHAR(50) NOT NULL,
    password VARCHAR(150) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE permission
(
    id          BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(100) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE user_permission
(
    user_id       BIGINT(20),
    permission_id BIGINT(20),
    PRIMARY KEY (user_id, permission_id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (permission_id) REFERENCES permission (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

insert into user (name, email, password) values ('Administrador', 'admin@algamoney.com', "admin");
insert into user (name, email, password) values ('Maria Silva', 'maria@algamoney.com', "maria");

insert into permission (description) values ("ROLE_CREATE_CATEGORY");
insert into permission (description) values ("ROLE_SEARCH_CATEGORY");

insert into permission (description) values ("ROLE_CREATE_PERSON");
insert into permission (description) values ("ROLE_REMOVE_PERSON");
insert into permission (description) values ("ROLE_SEARCH_PERSON");

insert into permission (description) values ("ROLE_CREATE_LAUNCH");
insert into permission (description) values ("ROLE_REMOVE_LAUNCH");
insert into permission (description) values ("ROLE_SEARCH_LAUNCH");

# admin
insert into user_permission (user_id, permission_id) VALUES (1,1);
insert into user_permission (user_id, permission_id) VALUES (1,2);
insert into user_permission (user_id, permission_id) VALUES (1,3);
insert into user_permission (user_id, permission_id) VALUES (1,4);
insert into user_permission (user_id, permission_id) VALUES (1,5);
insert into user_permission (user_id, permission_id) VALUES (1,6);
insert into user_permission (user_id, permission_id) VALUES (1,7);
insert into user_permission (user_id, permission_id) VALUES (1,8);

#maria
insert into user_permission (user_id, permission_id) VALUES (2,2);
insert into user_permission (user_id, permission_id) VALUES (2,5);
insert into user_permission (user_id, permission_id) VALUES (2,8);
