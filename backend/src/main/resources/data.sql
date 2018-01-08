INSERT INTO user (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1);
INSERT INTO user (ID, USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED) VALUES (2, 'bartoszcoyote', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'Bartosz', 'CosTam', 'BartoszCoyote@gmail.com',1);

INSERT INTO authority (ID, NAME) VALUES (1, 'ROLE_USER');
INSERT INTO authority (ID, NAME) VALUES (2, 'ROLE_ADMIN');

INSERT INTO user_authority (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO user_authority (USER_ID, AUTHORITY_ID) VALUES (1, 2);
INSERT INTO user_authority (USER_ID, AUTHORITY_ID) VALUES (2, 1);


INSERT INTO `project` (id,NAME) VALUES (1,"Inbox");
INSERT INTO `project` (id,NAME) VALUES (2,"Trash");