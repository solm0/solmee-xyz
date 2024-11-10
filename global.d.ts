export {};

declare global {
  interface Window {
    closeModalAndGoBack: (id: string) => void;
  }
}