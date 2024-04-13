import type { Category } from './Category'
import type { Tag } from './Tag'

export const PetStatus = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const
export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus]
export type Pet = {
  /**
   * @type integer | undefined, int64
   */
  id?: number
  /**
   * @type string
   */
  name: string
  category?: Category
  /**
   * @type array
   */
  photoUrls: string[]
  /**
   * @type array | undefined
   */
  tags?: Tag[]
  /**
   * @description pet status in the store
   * @type string | undefined
   */
  status?: PetStatus
}
