import { schemas } from '../../../plugin-oas/mocks/schemas.ts'

import * as parserZod from './index.ts'

describe('zod parse', () => {
  test.each(schemas.basic)('$name', ({ name, schema }) => {
    const text = parserZod.parse({ parent: undefined, current: schema, siblings: [schema] }, { name })
    expect(text).toMatchSnapshot()
  })
})