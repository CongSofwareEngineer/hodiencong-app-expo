interface EnvironmentVariables {
  readonly EXPO_PUBLIC_KEY_ENCODE_STORAGE: string
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables { }
}