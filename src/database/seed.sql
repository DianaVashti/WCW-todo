INSERT INTO users(username, password) VALUES('user1', '123456');

INSERT INTO list(title, user_id) VALUES ('First List', 1);
INSERT INTO list(title, user_id) VALUES ('Second List', 1);
INSERT INTO list(title, user_id) VALUES ('Third List', 1);

INSERT INTO item(list_id, title, description, created_at) VALUES (1, 'First Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (1, 'Second Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (1, 'Third Item Title', 'Third Item Description', CURRENT_TIMESTAMP);

INSERT INTO item(list_id, title, description, created_at) VALUES (2, 'First Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (2, 'Second Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (2, 'Third Item Title', 'Third Item Description', CURRENT_TIMESTAMP);

INSERT INTO item(list_id, title, description, created_at) VALUES (3, 'First Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (3, 'Second Item Title', 'First Item Description', CURRENT_TIMESTAMP);
INSERT INTO item(list_id, title, description, created_at) VALUES (3, 'Third Item Title', 'Third Item Description', CURRENT_TIMESTAMP);
