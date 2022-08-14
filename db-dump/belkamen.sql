CREATE DATABASE  IF NOT EXISTS `belkamen` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `belkamen`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: belkamen
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_page`
--

DROP TABLE IF EXISTS `about_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `pagesId` int DEFAULT NULL,
  `logo` varchar(255) NOT NULL,
  `services` text NOT NULL,
  `subTitle` varchar(255) NOT NULL,
  `subDescription` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_7ca0e2a80c7c469be6c4b38e5c` (`pagesId`),
  CONSTRAINT `FK_7ca0e2a80c7c469be6c4b38e5ca` FOREIGN KEY (`pagesId`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_page`
--

LOCK TABLES `about_page` WRITE;
/*!40000 ALTER TABLE `about_page` DISABLE KEYS */;
INSERT INTO `about_page` VALUES (1,'О нас','<p> Наша фирма БелКамень имеет огромный опыт по изготовлению и установке памятников с благоустройством. Мы уверены в своем качестве и поэтому даем гарантию на изделия из гранита 10 лет. У нас работают высококвалифицированные сотрудники и профессионалы своего дела. На каждом этапе работ мы производим контроль качества. На всех этапах работ поддерживаем связь с заказчиком и высылаем фотоотчеты. Мы устанавливаем памятники в Минске, Минской области и по всей территории Республики Беларусь. Также предоставляем беспроцентную рассрочку до 12 месяцев.</p>',1,'../logo/logo.webp','Установка памятников,Благоустройства могил,Фундамент памятников,Установка оград','В чем плюс заказа у нас?','<div> <strong>«БелКамень»</strong> – компания-эксперт по благоустройству мест захоронения под ключ.<span>Каждому заказчику мы предлагаем:</span><ul><li>Купить вертикальные памятники по адекватной цене. У нас собственное производство и налаженные поставки материалов и сырья, что позволяет устанавливать доступные расценки на все изделия.</li><li>Приобрести все необходимые элементы благоустройства для могилы в рассрочку без переплат на срок до 12 месяцев. Рассрочка доступна при оформлении заказа на любую сумму.</li><li>Фотоотчеты на всех этапах работы над памятником или другим изделием. Это позволит заранее увидеть, как он будет выглядеть, а также избежать недочетов</li></ul>.</div>');
/*!40000 ALTER TABLE `about_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block_main_page_advantages`
--

DROP TABLE IF EXISTS `block_main_page_advantages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_main_page_advantages` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subTitle` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `mainPageId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_b2c149c0cb43bc00a8d9e25fc9` (`mainPageId`),
  CONSTRAINT `FK_b2c149c0cb43bc00a8d9e25fc97` FOREIGN KEY (`mainPageId`) REFERENCES `main_page` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_main_page_advantages`
--

LOCK TABLES `block_main_page_advantages` WRITE;
/*!40000 ALTER TABLE `block_main_page_advantages` DISABLE KEYS */;
INSERT INTO `block_main_page_advantages` VALUES ('2c885484-c6af-4264-b8eb-5bdd6182c172','Гарантируем высокое качество','Для нас важен индивидуальный подход к каждому клиенту. Мы глубоко вникаем в каждый проект и успешно реализуем любые задумки.','Работаем “под ключ”: берем все заботы по оформлению захоронения. Вам нужно только выбрать элементы будущего мемориального комплекса,Мы - прямые производители, поэтому продаем наши изделия без наценок и по очень низким ценам во всей Беларуси,При изготовлении памятников мы использует только качественные материалы и высокотехнологичное оборудование,Когда изделие будет готово, мы сохраним его на складе до установки. Работаем по всей Беларуси, осуществляем монтаж и установку памятника на любом кладбище',1);
/*!40000 ALTER TABLE `block_main_page_advantages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block_main_page_consultation`
--

DROP TABLE IF EXISTS `block_main_page_consultation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_main_page_consultation` (
  `title` varchar(255) NOT NULL,
  `subTitle` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `mainPageId` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_8a0dbb8f63ba971f6f3a46c87d` (`mainPageId`),
  CONSTRAINT `FK_8a0dbb8f63ba971f6f3a46c87d1` FOREIGN KEY (`mainPageId`) REFERENCES `main_page` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_main_page_consultation`
--

LOCK TABLES `block_main_page_consultation` WRITE;
/*!40000 ALTER TABLE `block_main_page_consultation` DISABLE KEYS */;
INSERT INTO `block_main_page_consultation` VALUES ('Мы проконсультируем вас по всем вопросам','Не знаете, что делать?','Оставьте свои контактные данные, наш специалист свяжется с вами и ответит на все ваши вопросы!',1,1);
/*!40000 ALTER TABLE `block_main_page_consultation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block_main_page_gallery`
--

DROP TABLE IF EXISTS `block_main_page_gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_main_page_gallery` (
  `title` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `mainPageId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_7b4c975c42257dd9ff49f0e5ea` (`mainPageId`),
  CONSTRAINT `FK_7b4c975c42257dd9ff49f0e5eae` FOREIGN KEY (`mainPageId`) REFERENCES `main_page` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_main_page_gallery`
--

LOCK TABLES `block_main_page_gallery` WRITE;
/*!40000 ALTER TABLE `block_main_page_gallery` DISABLE KEYS */;
INSERT INTO `block_main_page_gallery` VALUES ('Галерея','uploads/gallery/photo_2022-08-12_14-07-14.webp,uploads/gallery/photo_2022-08-12_14-07-25.webp,uploads/gallery/photo_2022-08-12_14-07-39.webp,uploads/gallery/photo_2022-08-12_14-07-43.webp',1,1);
/*!40000 ALTER TABLE `block_main_page_gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `mainPageId` int DEFAULT NULL,
  `description` text NOT NULL,
  `freeDescription` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_35e9ac9226a85f50b63be42c6e7` (`mainPageId`),
  CONSTRAINT `FK_35e9ac9226a85f50b63be42c6e7` FOREIGN KEY (`mainPageId`) REFERENCES `main_page` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'Стандарт',2000,1,'Памятник,Оформление,Тротуарная плитка','Выезд для замеров,Хранение до установки'),(2,'Премиум',3500,1,'Эксклюзивный памятник,Элитные украшения,Биссерный блок и плитка керамогранит','Выезд для замеров,Хранение до установки'),(3,'Вип',5000,1,'Мемориальный комплекс,Элементы декора,Изготовление ограды,Ленточный фундамент и плитка гранитная','Выезд для замеров,Хранение до установки');
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalog_page`
--

DROP TABLE IF EXISTS `catalog_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `pagesId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_a85c140f1dc2d60cd59abaff77` (`pagesId`),
  CONSTRAINT `FK_a85c140f1dc2d60cd59abaff772` FOREIGN KEY (`pagesId`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog_page`
--

LOCK TABLES `catalog_page` WRITE;
/*!40000 ALTER TABLE `catalog_page` DISABLE KEYS */;
INSERT INTO `catalog_page` VALUES (1,'Каталог',1);
/*!40000 ALTER TABLE `catalog_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `pageId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_63fb12e50ccad5d7a46526814b4` (`pageId`),
  CONSTRAINT `FK_63fb12e50ccad5d7a46526814b4` FOREIGN KEY (`pageId`) REFERENCES `catalog_page` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Памятники',1),(2,'Ограды',1),(3,'Гравировка',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts_page`
--

DROP TABLE IF EXISTS `contacts_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `pagesId` int DEFAULT NULL,
  `phone` text NOT NULL,
  `timeWork` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_d94d88c4f64cf22fffcc9f86a3` (`pagesId`),
  CONSTRAINT `FK_d94d88c4f64cf22fffcc9f86a3a` FOREIGN KEY (`pagesId`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts_page`
--

LOCK TABLES `contacts_page` WRITE;
/*!40000 ALTER TABLE `contacts_page` DISABLE KEYS */;
INSERT INTO `contacts_page` VALUES (1,'Наши контакты','','ул. Казинца, д. 11, корпус В','Minsk',1,'+ 375 29 234 94 20,+ 375 44 700 24 38','Пн - Пт: 10:00-19:00,Сб: : 10:00-15:00,Вс: выходной');
/*!40000 ALTER TABLE `contacts_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_page`
--

DROP TABLE IF EXISTS `main_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_page` (
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `specificsWork` text NOT NULL,
  `titleIndividualPlanWork` text NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `pagesId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_f4744ef9cd761df877c078b94e` (`pagesId`),
  CONSTRAINT `FK_f4744ef9cd761df877c078b94e2` FOREIGN KEY (`pagesId`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_page`
--

LOCK TABLES `main_page` WRITE;
/*!40000 ALTER TABLE `main_page` DISABLE KEYS */;
INSERT INTO `main_page` VALUES ('Памятники и изделия из гранита','Благоустройства, захоронения, установка памятников и оград','Работаем внимательно и професионально,Фото и видео отчет на участке,Индивидуальный подход к каждому заказу,Доступные цены, гибкая система скидок','Рассрочка 0%,Гарантия 10 лет,Собственное производство',1,1);
/*!40000 ALTER TABLE `main_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstCategory` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (1,'Главная, Каталог, О нас, Контакты','../logo/logo.webp');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(255) NOT NULL,
  `catalogId` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bbd105a2a1df6db30e7d89f15cc` (`catalogId`),
  CONSTRAINT `FK_bbd105a2a1df6db30e7d89f15cc` FOREIGN KEY (`catalogId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'granitcomplex',1,'Гранитные комплесы'),(2,'dublememorials',1,'Двойные'),(3,'color',1,'Цветные'),(4,'granitfances',2,'Гранитные ограды');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_entity`
--

DROP TABLE IF EXISTS `product_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_entity` (
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `oldPrice` int NOT NULL DEFAULT '0',
  `category` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `catalogId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bc1e45e343b13b4f773e8e05b8d` (`catalogId`),
  CONSTRAINT `FK_bc1e45e343b13b4f773e8e05b8d` FOREIGN KEY (`catalogId`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_entity`
--

LOCK TABLES `product_entity` WRITE;
/*!40000 ALTER TABLE `product_entity` DISABLE KEYS */;
INSERT INTO `product_entity` VALUES ('test2','password_test2','description_test2',2300,0,'granitcomplex',20,1),('test2','password_test2','description_test2',2300,0,'granitcomplex',21,1),('test2','password_test2','description_test2',2300,0,'dublememorials',22,2),('test2','password_test2','description_test2',2300,0,'granitcomplex',23,1),('test2','password_test2','description_test2',2300,0,'granitcomplex',24,1),('test2','password_test2','description_test2',2300,0,'granitcomplex',25,1),('test2','password_test2','description_test2',2300,0,'granitcomplex',26,1);
/*!40000 ALTER TABLE `product_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `passwordhash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test','$2a$10$4xVowzeUtlOWqEcfu/JS1uGkBe/YlHQQMCXJ2pierO3RdhxdDZz36');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-14 12:53:00
