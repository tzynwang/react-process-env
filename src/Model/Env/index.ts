import {
  define,
  create,
  type,
  coerce,
  nonempty,
  string,
  integer,
  boolean
} from 'superstruct'
import isURL from './../../Tool/isURL'

class Env {
  projectName!: string

  projectSince!: number

  projectReleased!: boolean

  projectAPI!: string | null

  constructor() {
    this.validatedEnv()
    this.setValidatedEnv()
  }

  validatedEnv() {
    const raw = { ...process.env }
    
    const url = () => define<string>('url', (value) => isURL(value))
    const schema = type({
      REACT_APP_PROJECT_NAME: nonempty(string()),
      REACT_APP_PROJECT_SINCE: coerce(integer(), nonempty(string()), (val) =>
        parseInt(val, 10)
      ),
      REACT_APP_PROJECT_RELEASE: coerce(boolean(), nonempty(string()), (val) =>
        val.toLowerCase() === 'true' ? true : false
      ),
      REACT_APP_API: coerce(url(), nonempty(string()), (val) => isURL(val) ? val : null)
    })

    return create(raw, schema)
  }

  setValidatedEnv() {
    const validated = this.validatedEnv()
    this.projectName = validated.REACT_APP_PROJECT_NAME
    this.projectSince = validated.REACT_APP_PROJECT_SINCE
    this.projectReleased = validated.REACT_APP_PROJECT_RELEASE
    this.projectAPI = validated.REACT_APP_API
  }
}

export default Env
