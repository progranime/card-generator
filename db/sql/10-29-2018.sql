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
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `division_id` (`product_division_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`product_division_id`) REFERENCES `product_division` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

/*Data for the table `card` */

insert  into `card`(`id`,`name`,`picture`,`position`,`location`,`product_division_id`,`create_by`,`create_date`,`update_by`,`update_date`,`is_delete`) values 
(13,'Jeremy Espinosa',NULL,'Web Specialist','Pasig',1,'jeremy.espinosa',NULL,NULL,NULL,0),
(14,'Test User',NULL,'Full Stack','Quezon',2,'test.user',NULL,NULL,NULL,0),
(18,'test1',NULL,'pos1','loca1',2,NULL,NULL,NULL,NULL,0),
(19,'test2',NULL,'pos2','loca2',3,NULL,NULL,NULL,NULL,0),
(23,'Eren yeager','data:image/jpeg;base64,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','Attack Titan','Wall Rose',2,NULL,NULL,NULL,NULL,0);

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `contact` */

insert  into `contact`(`id`,`card_id`,`cellphone`,`telephone`,`email`,`skype`) values 
(1,13,'123456','6401234','jeremy.espinosa@gmail.com','123456'),
(2,14,'654321','99922','test.user@gmail.com','909090'),
(4,18,'123','456','jeremy.espinosa@gmail.com','jeremy@skype.com'),
(5,19,'cell2','tel2','test2@gmail.com','test2@skype.com'),
(7,23,'12345','54231','eren@gmail.com','eren@skype.com');

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
(1,'crea',1,0),
(2,'ente',2,0),
(3,'life',3,0),
(4,'generic',4,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
