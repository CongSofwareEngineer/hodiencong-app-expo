interface EnvironmentVariables {
  readonly EXPO_PUBLIC_KEY_ENCODE_STORAGE: string
  readonly EXPO_PUBLIC_EXPO_NOTIFICATION_PROJECT_ID: string
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
