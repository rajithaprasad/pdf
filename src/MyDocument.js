// src/MyDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeSchema } from './resumeData'; // Import the resume data

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 30,
  },
  section: {
    marginBottom: 10,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 12,
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bulletPoint: {
    marginLeft: 10,
  },
});

// Create the document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View>
        <Text style={styles.name}>{ResumeSchema.PersonalInfo?.Name}</Text>
        <Text style={styles.contactInfo}>{ResumeSchema.PersonalInfo?.Email}</Text>
        <Text style={styles.contactInfo}>{ResumeSchema.PersonalInfo?.Phone}</Text>
      </View>

      {/* Objective Section */}
      {ResumeSchema.Objective && (
        <View>
          <Text style={styles.sectionHeader}>Objective</Text>
          <Text>{ResumeSchema.Objective}</Text>
        </View>
      )}

      {/* Experience Section */}
      {ResumeSchema.Experience && (
        <View>
          <Text style={styles.sectionHeader}>Experience</Text>
          {ResumeSchema.Experience.map((exp, index) => (
            <View key={index}>
              <Text>{exp.Company} - {exp.StartDate} to {exp.EndDate}</Text>
              <Text>{exp.Title}</Text>
              <Text>{exp.Description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Education Section */}
      {ResumeSchema.Education && (
        <View>
          <Text style={styles.sectionHeader}>Education</Text>
          {ResumeSchema.Education.map((edu, index) => (
            <View key={index}>
              <Text>{edu.School}</Text>
              <Text>{edu.Degree} in {edu.FieldOfStudy}</Text>
              <Text>{edu.GraduationDate}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects Section */}
      {ResumeSchema.Projects && (
        <View>
          <Text style={styles.sectionHeader}>Projects</Text>
          {ResumeSchema.Projects.map((project, index) => (
            <View key={index}>
              <Text>{project.Title} - {project.Date}</Text>
              <Text>{project.Description}</Text>
              {project.Link && (
                <Text>{project.Link}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Skills Section */}
      {ResumeSchema.Skills && (
        <View>
          <Text style={styles.sectionHeader}>Skills</Text>
          {Object.entries(ResumeSchema.Skills).map(([category, skills], index) => (
            <View key={index}>
              <Text>{category}</Text>
              {skills.map((skill, idx) => (
                <Text key={idx} style={styles.bulletPoint}>• {skill}</Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Certifications Section */}
      {ResumeSchema.OptionalSection?.Certifications && (
        <View>
          <Text style={styles.sectionHeader}>Certifications</Text>
          {ResumeSchema.OptionalSection.Certifications.map((cert, index) => (
            <View key={index}>
              <Text>{cert.Name} - {cert.Date}</Text>
              <Text>{cert.Details}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default MyDocument;
