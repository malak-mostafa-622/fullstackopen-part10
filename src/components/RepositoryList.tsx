import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 3,
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 53749,
    ratingAverage: 100,
    reviewCount: 2,
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 72889,
    ratingAverage: 73,
    reviewCount: 5,
  },
];

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});

export default RepositoryList;