import React, { useState, useEffect, useMemo } from 'react'
import Env from './Model/Env'

interface EnvObject {
  key: string
  value: string | number | boolean
  type: string
}

function App(): React.ReactElement {
  const [displayEnv, setDisplayEnv] = useState<EnvObject[]>([])
  const memoEnv = useMemo(() => new Env(), [])

  useEffect(() => {
    setDisplayEnv(
      Object.entries(memoEnv).map((env) => ({
        key: env[0],
        value: env[1],
        type: typeof env[1]
      }))
    )
  }, [memoEnv])

  return (
    <div>
      <ul>
        {displayEnv.map((env) => (
          <li key={env.key}>
            <div>
              {env.key}: <code>{env.value}</code>
            </div>
            <div>
              type: <code className={env.type}>{env.type}</code>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
