import { useMemo } from 'react'
import Env from './../Model/Env'

export default function useEnv(): Env {
  return useMemo(() => new Env(), [])
}
