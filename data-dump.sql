-- MySQL dump 10.13  Distrib 5.7.29, for osx10.15 (x86_64)
--
-- Host: localhost    Database: recipe_mvp
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `recipeList`
--

DROP TABLE IF EXISTS `recipeList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipeList` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(200) NOT NULL,
  `food_description` varchar(300) NOT NULL,
  `type` varchar(10) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `ingredients` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipeList`
--

LOCK TABLES `recipeList` WRITE;
/*!40000 ALTER TABLE `recipeList` DISABLE KEYS */;
INSERT INTO `recipeList` VALUES (4,'breakfast wrap','you can have this any day','all day',8,'[\"eggs\",\"bacon\",\"whole grain tortilla\",\"advocado\",\"sharp cheddar cheese\",\"salt and pepper\",\"hot sauce (chalula)\"]'),(13,'Carbonara','100% would make again','Dinner',8,'[\"sphaghetti\",\"parmesan\",\"eggs\",\"extra-virgin olive oil\",\"1lb of bacon\"]'),(14,'Affogato','coffee with ice cream','dessert',6,'[\"vanilla ice cream (Häagen-Dazs preferred)\",\"coffee of choice\"]'),(15,'Peanut Butter and Jelly Sandwich','its a sandwich','All-day',3,'[\"peanut butter\",\"jelly ( grape preferred)\",\"bread\"]');
/*!40000 ALTER TABLE `recipeList` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-08 22:10:30
