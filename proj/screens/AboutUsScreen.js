import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const BookComponent = ({ imageSource, title, author, description, price, onPress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bookContainer}>
        <Image style={styles.bookImage} source={imageSource} />
        <View style={styles.bookDetails}>
          <Text style={styles.title}>{title}</Text>
          {isSelected && (
            <TouchableOpacity style={styles.closeButton} onPress={onPress}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>Price: {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const About = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      imageSource: require('../assets/Images/Cover2.jpg'),
      title: "EEI3266 - Information Systems & Management",
      author: "Miss. Sundas Fatima",
      description: "EEI3266 covers fundamental database management concepts for Year 1 students.Gain practical skills in managing databases across 4 units.",
      price: "850000"
    },
    {
      imageSource: require('../assets/Images/Mobile.jpg'),
      title: "EEI3269 - Introduction to Mobile Application Development",
      author: "Sir Umair Mujtaba",
      description: "EEI3269 offers optional Year 1 training in Mobile App Development within the Computer Science Honours degree. Gain 2 credits mastering mobile application essentials.",
      price: "1550.00"
    },
    {
      imageSource: require('../assets/Images/web.jpg'),
      title: "EEI3346 - WEB Development",
      author: "Miss Amina Tariq",
      description: "EEI3346 is a Year 1 mandatory course in Web App Development for Computer Science Honours. Learn front-end web development concepts across 5 units, earning 3 credits.",
      price: "9500.00"
    },
    {
      imageSource: require('../assets/Images/oop.png'),
      title: "EEI3262 - OOP",
      author: "Sir Waqar Khurshid",
      description: "EEI3262, a mandatory Year 1 course in OOP for Computer Science Honours, covers essential concepts across 5 units, earning 3 credits.",
      price: "7500.00"
    },
    {
      imageSource: require('../assets/Images/python intro crp.jpg'),
      title: "ESI7846 - Python",
      author: "Dr Nauman Ul Haq",
      description: "ESI7846 is a Year 1 mandatory course in Python for Computer Science Honours,covers essential concepts across 5 units, earning 3 credits.",
      price: "9800.00"
    },
    {
      imageSource: require('../assets/Images/LMS_cover.jpg'),
      title: "EEI3789 - Software Concepts",
      author: "Sir Ahsan Khan",
      description: "EEI3789, a mandatory Year 1 course in Software Concepts for Computer Science Honours, Gain practical skills in managing databases across 4 units.",
      price: "9500.00"
    },
  ];

  const handleBookPress = (book) => {
    setSelectedBook(selectedBook === book ? null : book);
  };

  const renderBookDetails = () => {
    if (!selectedBook) {
      return null;
    }

    return (
      <View style={styles.bookDetailsContainer}>
        <Text style={styles.detailText}>Title: {selectedBook.title}</Text>
        <Text style={styles.detailText}>Author: {selectedBook.author}</Text>
        <Text style={styles.detailText}>Description: {selectedBook.description}</Text>
        <Text style={styles.detailText}>Price: {selectedBook.price}</Text>
      </View>
    );
  };

  const renderBooks = () => {
    return books.map((book, index) => (
      <BookComponent
        key={index}
        {...book}
        isSelected={selectedBook === book}
        onPress={() => handleBookPress(book)}
      />
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderBookDetails()}
        <View style={styles.booksContainer}>
          {renderBooks()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  booksContainer: {
    alignItems: 'center',
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '100%',
  },
  bookImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  bookDetailsContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginVertical: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  closeButtonText: {
    color: '#FFFFFF',
  },
});

export default About;
