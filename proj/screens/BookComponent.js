import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const BookComponent = ({ book, onDelete }) => {
  const { bookNumber, title, author, description, price } = book;

  return (
    <View style={styles.bookContainer}>
      <Text style={styles.bookNumber}>{bookNumber}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity onPress={() => onDelete(book)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddBook = ({ onAdd }) => {
  const [bookDetails, setBookDetails] = useState({
    bookNumber: '',
    author: '',
    title: '',
  });
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    if (bookDetails.bookNumber && bookDetails.author && bookDetails.title) {
      onAdd(bookDetails);
      setBookDetails({
        bookNumber: '',
        author: '',
        title: '',
      });
      setMessage('Book added successfully.');
    } else {
      setMessage('Please fill in all the fields.');
    }
  };

  return (
    <View style={styles.addBookContainer}>
      <TextInput
        style={styles.input}
        placeholder="Book Reference Number"
        onChangeText={(text) => setBookDetails({ ...bookDetails, bookNumber: text })}
        value={bookDetails.bookNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Author Name"
        onChangeText={(text) => setBookDetails({ ...bookDetails, author: text })}
        value={bookDetails.author}
      />
      <TextInput
        style={styles.input}
        placeholder="Book Title"
        onChangeText={(text) => setBookDetails({ ...bookDetails, title: text })}
        value={bookDetails.title}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const About = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
    setMessage('Book added successfully.');
  };

  const handleDeleteBook = (bookToDelete) => {
    const updatedBooks = books.filter((book) => book.bookNumber !== bookToDelete.bookNumber);
    setBooks(updatedBooks);
    setMessage('Book deleted successfully.');
  };

  const filteredBooks = books.filter((book) =>
    book.bookNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <AddBook onAdd={handleAddBook} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search books by number"
          onChangeText={(text) => setSearchTerm(text)}
        />
        <View style={styles.booksContainer}>
          {filteredBooks.map((book, index) => (
            <BookComponent key={index} book={book} onDelete={handleDeleteBook} />
          ))}
        </View>
        {message !== '' && <Text style={styles.message}>{message}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Existing styles remain the same, add the following:
  bookContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default About;
