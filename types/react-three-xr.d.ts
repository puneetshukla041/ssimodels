// Fixes XR and ARButton type issues
declare module '@react-three/xr' {
  import { ReactNode } from 'react'

  export const ARButton: React.FC<any>
  export const XR: React.FC<{ children: ReactNode }>
}
