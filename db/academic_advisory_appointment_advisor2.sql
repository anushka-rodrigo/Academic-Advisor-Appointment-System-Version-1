-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: academic_advisory_appointment
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `advisor2`
--

DROP TABLE IF EXISTS `advisor2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advisor2` (
  `advisor_id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `Subject` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`advisor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisor2`
--

LOCK TABLES `advisor2` WRITE;
/*!40000 ALTER TABLE `advisor2` DISABLE KEYS */;
INSERT INTO `advisor2` VALUES (1,'Bruce','Wayne','Java OOP & Spring Boot Back-end Engineering','brucewayne@gmail.com','$2y$10$jFVZnezx86XrAORVZcy.XeUzmAYgG5DKFaDpyvasHAz034GdYEFVe'),(2,'Diana','Prince','Python for Data Science','dianaprince@gmail.com','$2y$10$v94OO6xCFekl85aWyVF7ye4uPNRh9UofcHSgajImToYmGcydzaTm.'),(3,'Clerk','Kent','Web Development with React & Node.js','clerkkent@gmail.com','$2y$10$Db8IjYrvpxDDo2bU1swAzeiS0nfcBnem9Z8N3/3fAp45Ox54EwZLq'),(4,'Natasha','Romanoff','Machine Learning Basics','natasharom@gmail.com','$2y$10$t0bhBhccCjVX1e1FUOedcOzTzIwuD0rUe9JXlBJdA5xHPCti9QhD.'),(5,'Peter','Parker','Database Design with MySQL','peterparker@gmail.com','$2y$10$0pQzizTRfl.utG0GdteOcOCqnw5AMkRNwExWjkcn1yp7.a4px6QQC'),(6,'Tony ','Stark','Cybersecurity Fundamentals','tonystark@gmail.com','$2y$10$efRRHgNkzFw1rj4eNbMqY.WBehTIS7VEVR9TIA7hd7vT2XovgZpae'),(7,'Mary','Jane','UI/UX Design Essentials','maryjane@gmail.com','$2y$10$8Z.z5AWhvuDonG.bUulk3OyN17LfvOHWA6VknAxF1p1yymxPwz0re'),(8,'Steve','Rogers','Cloud Computing with AWS','steverojers@gmail.com','$2y$10$OsYGFIqOiMS4rOM.18Zea.bJMgZb.5FrcleXm3CbKQ76aMpZp0lw6'),(9,'Ravindu','Deraniyagala','UI/UX Design Essentials','malshanderaniyagala@gmail.com','$2y$10$6f3DOFJfjVUOaXZUdUpt4eCmGG7PSaWcEcKgI3GReFC9S29nauMwi');
/*!40000 ALTER TABLE `advisor2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-19  9:43:35
