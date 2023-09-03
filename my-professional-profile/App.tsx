import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, View, FlatList, Linking } from 'react-native';

type TPersonalData = (string | { name: string, link: string })[]

export default function App() {
  const personalData: TPersonalData = [
    'Tenho 19 anos',
    'Sou estudante de Análise e Desenvolvimento de Sistemas',
    'Estou no 4º período do curso',
    {
      name: 'Clique aqui para acessar meu github',
      link: 'https://github.com/zaikoxander',
    },
  ]

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={styles.itemsCenter}>
        <Image
          source={{
            'uri': 'https://github.com/zaikoxander.png',
            width: 300,
            height: 300,
          }}
          alt='Alex Daniel photo'
          style={styles.photoBorderRadius}
        />
        <Text style={styles.profileName}>Alex Daniel</Text>
      </View>
      <View>
        <Text style={styles.fields}>
          Dados pessoais
        </Text>
        <FlatList
          data={personalData}
          renderItem={({ item }) => (
              typeof item !== 'string' ?
                <Text
                  style={{
                    ...styles.listItem,
                    ...styles.link,
                  }}
                  onPress={() => Linking.openURL(item.link)}
                >
                  {`\u2022 ${item.name}`}
                </Text>
                :
                <Text style={styles.listItem}>
                  {`\u2022 ${item}`}
                </Text>
            )
          }
        />
      </View>
      <View>
        <Text style={styles.fields}>
          Formação
        </Text>
        <FlatList
          data={[
            'Realizando curso superior de Análise e Desenvolvimento de Sistemas na Fatec de Praia Grande',
          ]}
          renderItem={({ item }) => <Text style={styles.listItem}>{`\u2022 ${item}`}</Text>}
        />
      </View>
      <View>
        <Text style={styles.fields}>Experiência</Text>
        <FlatList
          data={[
            'Estagiando como Desenvolvedor Full-stack na Zimobi',
          ]}
          renderItem={({ item }) => <Text style={styles.listItem}>{`\u2022 ${item}`}</Text>}
        />
      </View>
      <View>
        <Text style={styles.fields}>Projetos</Text>
        <FlatList
          data={[
            {
              name: 'Sistema de Login modelo',
              link: 'https://github.com/ZaikoXander/Login-System',
            },
            {
              name: 'Switch de temas usando TailwindCss modelo',
              link: 'https://github.com/ZaikoXander/tailwind-darkmode',
            },
            {
              name: 'Projeto de blockchain em Typescript',
              link: 'https://github.com/ZaikoXander/blockchain-ts',
            },
            {
              name: 'Projeto de um site de chat',
              link: 'https://github.com/ZaikoXander/XanderChat',
            },
          ]}
          renderItem={({ item }) => <Text style={{ ...styles.listItem, ...styles.link, }} onPress={() => Linking.openURL(item.link)} >{`\u2022 ${item.name}`}</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    width: 550,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 7.5,
    borderColor: 'silver',
    borderRadius: 3.75,
  },
  itemsCenter: {
    alignItems: 'center'
  },
  photoBorderRadius: {
    borderRadius: 50,
  },
  profileName: {
    fontSize: 40,
  },
  fields: {
    fontSize: 30,
  },
  listItem: {
    fontSize: 20,
    marginLeft: 10,
  },
  link: {
    color: 'blue',
  },
})
