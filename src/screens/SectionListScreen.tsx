import {View, Text, SectionList} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Captain Marvel',
      'Black Panther',
      'Black Widow',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

const SectionListScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>* {item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <HeaderTitle title={section.casa} />
        )}
        renderSectionFooter={({section}) => (
          <Text style={{fontWeight: 'bold', paddingTop: 10, fontSize: 16}}>
            Item Count: {section.data.length}
          </Text>
        )}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={`Sections Count: ${casas.length}`} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
