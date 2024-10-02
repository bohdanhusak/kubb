import { createDeletePetMutationResponse } from '../../../mocks/petController/createDeletePet.ts'
import { http } from 'msw'

export const deletePetHandler = http.delete('*/pet/:petId', function handler(info) {
  return new Response(JSON.stringify(createDeletePetMutationResponse()), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
})