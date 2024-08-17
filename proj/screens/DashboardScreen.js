import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'rn_sqlite',
});

const DashboardScreen = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM users`,
        [],
        (sqlTxn, res) => {
          console.log('Users retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                name: item.name,
                age: item.age,
                gender: item.gender,
                phone: item.phone,
                email: item.email,
              });
            }

            setUsers(results);
          }
        },
        error => {
          console.log('Error on getting users ' + error.message);
        },
      );
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
     
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            margin: 10,
            backgroundColor: '#fff',
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name: {item.name}</Text>
            <Text style={{ fontSize: 18, marginVertical: 5 }}>Age: {item.age}</Text>
            <Text style={{ fontSize: 18, marginVertical: 5 }}>Gender: {item.gender}</Text>
            <Text style={{ fontSize: 18, marginVertical: 5 }}>Phone: {item.phone}</Text>
            <Text style={{ fontSize: 18, marginVertical: 5 }}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DashboardScreen;
