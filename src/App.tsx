import React, { useState, useEffect } from 'react'

interface EnvObject {
  key: string
  value: string | number | boolean | undefined
  type: string
}

function App(): React.ReactElement {
  const [displayEnv, setDisplayEnv] = useState<EnvObject[]>([])

  useEffect(() => {
    console.log(process.env)
    setDisplayEnv(
      Object.entries(process.env).map((env) => ({
        key: env[0],
        value: env[1],
        type: typeof env[1]
      }))
    )
  }, [])

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
