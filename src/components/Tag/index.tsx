import { Text, View } from 'react-native'
import { HoldItem } from 'react-native-hold-menu'

import { styles } from './styles'

type Props = {
  title: string
  onRemove: () => void
}

export function Tag({ title, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <HoldItem
        items={[
          { text: title, isTitle: true },
          {
            text: 'Apagar',
            isDestructive: true,
            onPress: () => onRemove()
          }
        ]}
      >
        <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </View>
  )
}
