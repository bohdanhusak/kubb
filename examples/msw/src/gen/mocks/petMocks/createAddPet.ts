import { faker } from '@faker-js/faker'

import { createAddPetRequest } from '../createAddPetRequest'
import { createPet } from '../createPet'
import { AddPet405 } from '../../models/AddPet'
import { AddPetMutationRequest } from '../../models/AddPet'
import { AddPetMutationResponse } from '../../models/AddPet'

export function createAddPet405(): AddPet405 {
  return { code: faker.number.float({}), message: faker.string.alpha() }
}

/**
 * @description Create a new pet in the store
 */

export function createAddPetMutationRequest(): AddPetMutationRequest {
  return createAddPetRequest()
}

/**
 * @description Successful operation
 */

export function createAddPetMutationResponse(): AddPetMutationResponse {
  return createPet()
}