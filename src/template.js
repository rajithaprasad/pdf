import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register the EBGaramond font locally
Font.register({
  family: 'EBGaramond',
  src: 'src/fonts/EBGaramond-Bold.ttf',  // Adjust this path if needed
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily: 'EBGaramond', // Now using the registered font
    padding: 30,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  contactInfo: {
    fontSize: 11,
    marginTop: 5,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 10,
    marginBottom: 5,
  },
});

const Template = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View>
          <Text style={styles.name}>{data.PersonalInfo?.Name}</Text>
          <Text style={styles.contactInfo}>{data.PersonalInfo?.Email}</Text>
          <Text style={styles.contactInfo}>{data.PersonalInfo?.Phone}</Text>
        </View>

        {/* Objective Section */}
        {data.Objective && (
          <View>
            <Text style={styles.sectionHeader}>Objective</Text>
            <Text>{data.Objective}</Text>
          </View>
        )}

        {/* Experience Section */}
        {data.Experience && (
          <View>
            <Text style={styles.sectionHeader}>Experience</Text>
            {data.Experience.map((exp, index) => (
              <View key={index}>
                <Text>{exp.Company} - {exp.StartDate} to {exp.EndDate}</Text>
                <Text>{exp.Title}</Text>
                <Text>{exp.Description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {data.Education && (
          <View>
            <Text style={styles.sectionHeader}>Education</Text>
            {data.Education.map((edu, index) => (
              <View key={index}>
                <Text>{edu.School}</Text>
                <Text>{edu.Degree} in {edu.FieldOfStudy}</Text>
                <Text>{edu.GraduationDate}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects Section */}
        {data.Projects && (
          <View>
            <Text style={styles.sectionHeader}>Projects</Text>
            {data.Projects.map((project, index) => (
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
        {data.Skills && (
          <View>
            <Text style={styles.sectionHeader}>Skills</Text>
            {Object.entries(data.Skills).map(([category, skills], index) => (
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
        {data.OptionalSection?.Certifications && (
          <View>
            <Text style={styles.sectionHeader}>Certifications</Text>
            {data.OptionalSection.Certifications.map((cert, index) => (
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
};

export default Template;
