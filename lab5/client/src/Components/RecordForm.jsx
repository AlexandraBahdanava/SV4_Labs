import React, { useEffect, useState } from 'react';
import { getAll } from '../api/recordApi';

const RecordForm = () => {
  const [userRecords, setUserRecords] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
        try {
          const response = await getAll();
  console.log(response.data);
          setUserRecords(response.data);
        } catch (error) {
          console.error("Error fetching auction data:", error);
        }
      };   
    }, []);

  return (
    <div style={{
        color: 'rgba(229, 124, 157, 0.852)'
    }}>
      <h2 >Ваши записи</h2>
      {userRecords.length === 0 ? (
        <p>У вас нет записей.</p>
      ) : (
        userRecords.map((record) => (
          <div key={record.id}>
             <h3>{record.title}</h3>
      <p>Статус: {record.status}</p>
      <p>Дата записи: {record.creation_date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecordForm;
