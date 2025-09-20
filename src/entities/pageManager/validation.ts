import type { Platform } from './types'

import { PLATFORMS } from './types'

export const isValidPlatform = (platform?: unknown): platform is Platform =>
  platform === null ||
  (typeof platform === 'string' && (Object.values(PLATFORMS) as Array<string>).includes(platform))
