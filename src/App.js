// src/App.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const App = () => {
  return (
    <div>
      <h1>Generate PDF Example</h1>
      <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
