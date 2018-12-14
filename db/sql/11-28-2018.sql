/*
SQLyog Ultimate v12.14 (64 bit)
MySQL - 10.1.25-MariaDB : Database - cardgenerator
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cardgenerator` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `cardgenerator`;

/*Table structure for table `authority` */

DROP TABLE IF EXISTS `authority`;

CREATE TABLE `authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `authority_role_id` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `authority_role_id` (`authority_role_id`),
  CONSTRAINT `authority_ibfk_1` FOREIGN KEY (`authority_role_id`) REFERENCES `authority_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `authority` */

insert  into `authority`(`id`,`email`,`authority_role_id`,`is_delete`) values 
(1,'jeremy.espinosa',1,0),
(2,'jessie.biros',2,0),
(3,'virn.abuda',1,0),
(4,'sample.email',1,0),
(5,'kelvin.barsana',1,1);

/*Table structure for table `authority_role` */

DROP TABLE IF EXISTS `authority_role`;

CREATE TABLE `authority_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `authority_role` */

insert  into `authority_role`(`id`,`name`) values 
(1,'admin'),
(2,'printer');

/*Table structure for table `brand` */

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sequence` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `brand` */

insert  into `brand`(`id`,`name`,`sequence`,`is_delete`) values 
(1,'midas',1,0),
(2,'klarkteknik',2,0),
(3,'labgruppen',3,0),
(4,'lake',4,0),
(5,'tannoy',5,0),
(6,'turbosound',6,0),
(7,'tcelectronic',7,0),
(8,'tchelicon',8,0),
(9,'behringer',9,0),
(10,'bugera',10,0),
(11,'coolaudio',11,0),
(12,'auratone',12,0);

/*Table structure for table `brand_list` */

DROP TABLE IF EXISTS `brand_list`;

CREATE TABLE `brand_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_list_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `brand_list_id` (`brand_list_id`),
  CONSTRAINT `brand_list_ibfk_1` FOREIGN KEY (`brand_list_id`) REFERENCES `product_division` (`brand_list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `brand_list` */

insert  into `brand_list`(`id`,`brand_list_id`,`name`,`is_delete`) values 
(1,1,'behringer',0),
(2,1,'tcelectronic',0),
(3,1,'tchelicon',0),
(4,1,'tannoy',0),
(5,1,'bugera',0),
(6,2,'midas',0),
(7,2,'klarkteknik',0),
(8,2,'labgruppen',0),
(9,2,'lake',0),
(10,2,'tannoy',0),
(11,2,'turbosound',0),
(12,3,'tannoy',0);

/*Table structure for table `card` */

DROP TABLE IF EXISTS `card`;

CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` longtext,
  `position` varchar(255) NOT NULL,
  `location` text,
  `product_division_id` int(11) NOT NULL,
  `status_id` int(11) DEFAULT '1',
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `division_id` (`product_division_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`product_division_id`) REFERENCES `product_division` (`id`) ON DELETE CASCADE,
  CONSTRAINT `card_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=latin1;

/*Data for the table `card` */

insert  into `card`(`id`,`name`,`picture`,`position`,`location`,`product_division_id`,`status_id`,`create_by`,`create_date`,`update_by`,`update_date`,`is_delete`) values 
(87,'Angelo Pulido','/images/dp/1543284619832-angelo.jpg','Hypermedia Web Transformation Champion','Manila',1,5,'jeremy.espinosa','2018-11-27','jeremy.espinosa','2018-11-28',0),
(88,'Ariel Ignas Jr.','/images/dp/1543284670057-ariel.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(89,'Dale Mansueto','/images/dp/1543284709943-dale.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27','jeremy.espinosa',NULL,0),
(90,'Jc Sy','/images/dp/1543284751063-jc.jpg','Hypermedia Web Transformation Champion','Manila',2,4,'jeremy.espinosa','2018-11-27','jeremy.espinosa','2018-11-28',0),
(91,'Jeremy Espinosa','/images/dp/1543285191788-jeremy.jpg','Hypermedia Web Transformation Champion','Manila',3,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(92,'Jessie Biros','/images/dp/1543285233431-jessie.jpg','Hypermedia Web Transformation Leader','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(93,'Johnny Camagong','/images/dp/1543285277798-johnny.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27','jeremy.espinosa','2018-11-27',0),
(94,'Kelvin Barsana','/images/dp/1543285326628-kelvin.jpg','Hypermedia Web Transformation Champion','Manila',3,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(95,'Kevin Saquing','/images/dp/1543285364279-kevin.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(96,'Maine Suba','/images/dp/1543285397350-maine.jpg','Hypermedia Web Transformation Champion','Manila',3,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(97,'Marjorie Brul','/images/dp/1543285434323-marj.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(98,'Paulo Arcegono','/images/dp/1543285472945-paulo.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(99,'Riel Allam','/images/dp/1543285503940-riel.jpg','Hypermedia Web Transformation Champion','Manila',1,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(100,'Vanessa Caviteno','/images/dp/1543285551436-vanessa.jpg','Hypermedia Web Transformation Champion','Manila',3,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(101,'Virn Abuda','/images/dp/1543285591543-virn.jpg','Hypermedia Web Transformation Champion','Manila',3,1,'jeremy.espinosa','2018-11-27',NULL,NULL,0),
(103,'Momo Espinosa updated','/images/dp/1543299490837-momo.jpg','Web Specialist','Manila',4,5,'jeremy.espinosa','2018-11-27','jeremy.espinosa','2018-11-28',0);

/*Table structure for table `contact` */

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_id` int(11) NOT NULL,
  `cellphone` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `skype` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `card_id` (`card_id`),
  CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `card` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;

/*Data for the table `contact` */

insert  into `contact`(`id`,`card_id`,`cellphone`,`telephone`,`email`,`skype`) values 
(70,87,'7475523','09185791232','angelo.pulido@music-group.com','angelo.pulido@music-group.com'),
(71,88,'0918232232','7674321-+','ariel.ignas@music-group.com','ariel.ignas@music-group.com'),
(72,89,'09092321345','7673421','dale.mansueto@musictribe.com','dale.mansueto@musictribe.com'),
(73,90,'0909435313','76734822','c.sy@musictribe.com','c.sy@musictribe.com'),
(74,91,'09187787223','8785342','jeremy.espinosa@music-group.com','jeremy.espinosa@music-group.com'),
(75,92,'0989234214','7673421','jessie.biros@music-group.com','jessie.biros@music-group.com'),
(76,93,'0909543421','8783431','Johnny.Camagong@music-group.com','Johnny.Camagong@music-group.com'),
(77,94,'09094352351','7673421','kelvin.barsana@music-group.com','kelvin.barsana@music-group.com'),
(78,95,'09095463531','7678931','kevin.saquing@music-group.com','kevin.saquing@music-group.com'),
(79,96,'0990453241','7873412','maine.suba@music-group.com','maine.suba@music-group.com'),
(80,97,'0909437621','7678989','marjorie.brul@musictribe.com','marjorie.brul@musictribe.com'),
(81,98,'09096531456','7678935','paulo.arcegono@music-group.com','paulo.arcegono@music-group.com'),
(82,99,'0909346314','7682352','riel.allam@musictribe.com','riel.allam@musictribe.com'),
(83,100,'0909436342','7878931','vanessa.caviteno@music-group.com','vanessa.caviteno@music-group.com'),
(84,101,'0909340135','8789031','virn.abuda@music-group.com','virn.abuda@music-group.com'),
(86,103,'213','321','momo@gmail.com','momo@skype.com');

/*Table structure for table `location` */

DROP TABLE IF EXISTS `location`;

CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `location` */

insert  into `location`(`id`,`name`) values 
(1,'Canada, Victoria'),
(2,'China, Shenzhen'),
(3,'China, Zhongshan'),
(4,'Denmark, Risskov'),
(5,'Germany, Willich'),
(6,'Japan, Tokyo'),
(7,'Malaysia, Penang'),
(8,'Philippines, Manila'),
(9,'Scotlang, North Lanarkshire'),
(10,'Singapore'),
(11,'Sweden, Kungsbacka'),
(12,'UK, Kidderminster'),
(13,'UK, Manchester'),
(14,'USA, Las Vegas'),
(15,'USA, Los Angeles');

/*Table structure for table `product_division` */

DROP TABLE IF EXISTS `product_division`;

CREATE TABLE `product_division` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `brand_list_id` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `brand_list_id` (`brand_list_id`),
  CONSTRAINT `product_division_ibfk_1` FOREIGN KEY (`brand_list_id`) REFERENCES `product_division` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `product_division` */

insert  into `product_division`(`id`,`name`,`brand_list_id`,`is_delete`) values 
(1,'creation',1,0),
(2,'enterprise',2,0),
(3,'life',3,0),
(4,'generic',4,0);

/*Table structure for table `status` */

DROP TABLE IF EXISTS `status`;

CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `status` */

insert  into `status`(`id`,`name`,`is_delete`) values 
(1,'pending',0),
(2,'need info',0),
(3,'for printing',0),
(4,'for shipment',0),
(5,'closed',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
