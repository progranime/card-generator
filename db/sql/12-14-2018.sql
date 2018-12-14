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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `authority` */

insert  into `authority`(`id`,`email`,`authority_role_id`,`is_delete`) values 
(1,'jeremy.espinosa',1,0),
(2,'jessie.biros',1,0),
(3,'virn.abuda',2,0),
(5,'kelvin.barsana',1,1),
(7,'filipino.gonzales',1,0),
(8,'lito.belmonte',1,0),
(9,'abby.sanguyo',1,0);

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
  `location_id` int(11) DEFAULT NULL,
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
  KEY `location_id` (`location_id`),
  CONSTRAINT `card_ibfk_1` FOREIGN KEY (`product_division_id`) REFERENCES `product_division` (`id`) ON DELETE CASCADE,
  CONSTRAINT `card_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `card_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=latin1;

/*Data for the table `card` */

insert  into `card`(`id`,`name`,`picture`,`position`,`location_id`,`product_division_id`,`status_id`,`create_by`,`create_date`,`update_by`,`update_date`,`is_delete`) values 
(106,'Jeremy Espinosa','/images/dp/1543392229093-10-19-2018.jpg','sadasdsadsadsasadas',1,1,4,'jeremy.espinosa','2018-11-28','jeremy.espinosa','2018-12-13',1),
(107,'wew','/images/dp/1543396161886-eren.jpg','web',1,2,5,'jeremy.espinosa','2018-11-28','jeremy.espinosa','2018-12-14',0),
(108,'asd','/images/dp/1544604804559-vanessa.jpg','asd',3,2,1,'jeremy.espinosa','2018-12-12','jeremy.espinosa','2018-12-12',1),
(109,'Kelvin Barsana','/images/dp/1544687703530-kelvin.jpg','web',3,2,3,'kelvin.barsana','2018-12-13','jeremy.espinosa','2018-12-13',0);

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
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;

/*Data for the table `contact` */

insert  into `contact`(`id`,`card_id`,`cellphone`,`telephone`,`email`,`skype`) values 
(89,106,'9187872231','asd','jeremyespinosa1995@gmail.com','ad'),
(90,107,'12','43','jeremyespinosa1995@gmail.com','jeremy@skype.com'),
(91,108,'asd','ad','asd@gmail.com','a@skype.com.sds'),
(92,109,'123','231','kelvin.barsana@gmail.com','kelvin@skype.com');

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

/*Table structure for table `notification` */

DROP TABLE IF EXISTS `notification`;

CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recipient_email` varchar(255) DEFAULT NULL,
  `notification_type_id` int(11) DEFAULT NULL,
  `sender_email` varchar(255) DEFAULT NULL,
  `link` text,
  `is_read` int(1) DEFAULT '0',
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `notification_type_id` (`notification_type_id`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`notification_type_id`) REFERENCES `notification_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

/*Data for the table `notification` */

insert  into `notification`(`id`,`recipient_email`,`notification_type_id`,`sender_email`,`link`,`is_read`,`create_date`) values 
(13,'kelvin.barsana',1,'jeremy.espinosa',NULL,0,'2018-12-13 17:32:08'),
(14,'jeremy.espinosa',1,'jeremy.espinosa','/card/107/view',1,'2018-12-13 17:32:19'),
(15,'jeremy.espinosa',1,'jeremy.espinosa','/card/109/view',1,'2018-12-13 18:09:23'),
(16,'jeremy.espinosa',1,'jeremy.espinosa','/card/107/view',0,'2018-12-14 11:24:40');

/*Table structure for table `notification_type` */

DROP TABLE IF EXISTS `notification_type`;

CREATE TABLE `notification_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `template` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `notification_type` */

insert  into `notification_type`(`id`,`name`,`template`) values 
(1,'CARD_UPDATE','$sender_email updated your Business Card status.'),
(2,'CARD_DELETE','$sender_email deleted your Business Card status.'),
(3,'CARD_APPROVAL','$reciptient_email requesting your approval click <a href=\'#\'>here<a/>.');

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
  `sequence` int(11) DEFAULT NULL,
  `is_delete` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `status` */

insert  into `status`(`id`,`name`,`sequence`,`is_delete`) values 
(1,'pending',1,0),
(2,'need info',2,0),
(3,'for printing',3,0),
(4,'for shipment',4,0),
(5,'closed',5,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
