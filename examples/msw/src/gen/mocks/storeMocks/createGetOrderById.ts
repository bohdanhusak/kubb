import { faker } from '@faker-js/faker'
import type { GetOrderById200, GetOrderById400, GetOrderById404, GetOrderByIdPathParams, GetOrderByIdQueryResponse } from '../../models/GetOrderById'
import { createOrder } from '../createOrder'

export function createGetOrderByIdPathParams(override: NonNullable<Partial<GetOrderByIdPathParams>> = {}): NonNullable<GetOrderByIdPathParams> {
  return {
    ...{ orderId: faker.number.int() },
    ...override,
  }
}

/**
 * @description successful operation
 */
export function createGetOrderById200(override?: NonNullable<Partial<GetOrderById200>>): NonNullable<GetOrderById200> {
  return createOrder(override)
}

/**
 * @description Invalid ID supplied
 */
export function createGetOrderById400(): NonNullable<GetOrderById400> {
  return undefined
}

/**
 * @description Order not found
 */
export function createGetOrderById404(): NonNullable<GetOrderById404> {
  return undefined
}

/**
 * @description successful operation
 */
export function createGetOrderByIdQueryResponse(override?: NonNullable<Partial<GetOrderByIdQueryResponse>>): NonNullable<GetOrderByIdQueryResponse> {
  return createOrder(override)
}
