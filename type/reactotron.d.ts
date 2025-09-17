declare global {
  // Allow console.tron for Reactotron in development
  namespace Console {
    interface Console {
      tron?: any
    }
  }
}
export {}
