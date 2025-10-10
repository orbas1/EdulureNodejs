CREATE DATABASE IF NOT EXISTS edulure CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE edulure;

CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) PRIMARY KEY,
  email VARCHAR(191) NOT NULL UNIQUE,
  password_hash VARCHAR(191) NOT NULL,
  role ENUM('user','instructor','admin') DEFAULT 'user',
  two_factor_email TINYINT(1) DEFAULT 0,
  two_factor_google TINYINT(1) DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profiles (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  first_name VARCHAR(191),
  last_name VARCHAR(191),
  headline VARCHAR(191),
  bio TEXT,
  avatar_url VARCHAR(255),
  location VARCHAR(191),
  intent JSON,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS communities (
  id CHAR(36) PRIMARY KEY,
  title VARCHAR(191) NOT NULL,
  slug VARCHAR(191) NOT NULL UNIQUE,
  description TEXT,
  image_url VARCHAR(255),
  visibility ENUM('public','private') DEFAULT 'public',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS memberships (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  community_id CHAR(36) NOT NULL,
  role ENUM('member','admin','moderator') DEFAULT 'member',
  status ENUM('active','pending','banned') DEFAULT 'active',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (community_id) REFERENCES communities(id)
);

CREATE TABLE IF NOT EXISTS posts (
  id CHAR(36) PRIMARY KEY,
  community_id CHAR(36) NOT NULL,
  author_id CHAR(36) NOT NULL,
  content TEXT NOT NULL,
  media_url VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (community_id) REFERENCES communities(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);
