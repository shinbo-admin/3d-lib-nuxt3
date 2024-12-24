import { useTheme } from 'vuetify'

export function useColor() {
  const theme = useTheme()
  return theme.global.current.value.colors
}
