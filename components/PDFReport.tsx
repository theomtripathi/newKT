import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fdf6f0', // Light peach background for warmth
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d9534f', // Coral color for the header
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff5eb', // Soft cream background for sections
    borderWidth: 1,
    borderColor: '#f0a07e', // Light coral border
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d9534f', // Coral color for section titles
  },
  text: {
    marginBottom: 5,
    color: '#5d4037', // Warm brown for text
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 5,
    color: '#6d4c41', // Chocolate brown for list items
  },
});

// Create Document Component
interface ResultsType {
  results: {
    KrishnaScore: number;
    KrishnaScoreDescription: string;
    issuesIdentified: string[];
    quickActions: { text: string }[];
  };
}

export const PDFReport: React.FC<ResultsType> = ({ results }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <Text style={styles.header}>Your Personalised Report</Text>

      {/* Krishna Score Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Krishna Score</Text>
        <Text style={styles.text}>Krishna Score: {results.KrishnaScore}</Text>
      </View>

      {/* Krishna Score Description Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Krishna Score Description</Text>
        <Text style={styles.text}>{results.KrishnaScoreDescription}</Text>
      </View>

      {/* Issues Identified Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Issues Identified</Text>
        {results.issuesIdentified.map((issue: string) => (
          <Text key={issue} style={styles.listItem}>{`- ${issue}`}</Text>
        ))}
      </View>

      {/* Quick Actions Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Actions You Can Take</Text>
        {results.quickActions.map((action: any) => (
          <Text key={action.text} style={styles.listItem}>{`- ${action.text}`}</Text>
        ))}
      </View>
    </Page>
  </Document>
);
