import { View, Text, StyleSheet } from 'react-native';

interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
}

interface RepositoryItemProps {
  repo: Repository;
}

const formatThousands = (value: number): string => {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : `${value}`;
};

const RepositoryItem = ({ repo }: RepositoryItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{repo.fullName}</Text>
      <Text style={styles.description}>{repo.description}</Text>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>{repo.language}</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatThousands(repo.stargazersCount)}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatThousands(repo.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatThousands(repo.reviewCount)}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{formatThousands(repo.ratingAverage)}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 10,
  },
  languageContainer: {
    backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginBottom: 10,
  },
  language: {
    color: 'white',
    overflow: 'hidden',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#586069',
  },
});

export default RepositoryItem;