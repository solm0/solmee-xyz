export {};

declare global {
  interface Window {
    closeModalAndGoBack: (id: string) => void;
  }
}

export {};

declare global {
  interface Window {
    setHoveredNode: (nodeId: string | null) => void;
  }
}
// global.d.ts
export {};

declare global {
  interface Window {
    openModal: () => void;
  }
}