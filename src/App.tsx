import React, { useState, useEffect } from 'react'
import useEnv from './Hook/useEnv'

interface EnvObject {
  key: string
  value: string | number | boolean
  type: string
}

function App(): React.ReactElement {
  const [displayEnv, setDisplayEnv] = useState<EnvObject[]>([])
  const env = useEnv()

  useEffect(() => {
    setDisplayEnv(
      Object.entries(env).map((e) => ({
        key: e[0],
        value: e[1],
        type: typeof e[1]
      }))
    )
  }, [env])

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
