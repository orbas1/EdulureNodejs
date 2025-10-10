import { Router } from 'express'
import { body } from 'express-validator'
import { index, join, search, show, store } from '../controllers/communityController.js'
import authenticate from '../middleware/authMiddleware.js'

const router = Router()

router.get('/', index)
router.get('/search', search)
router.get('/:slug', show)
router.post(
  '/',
  authenticate,
  [body('title').isString().notEmpty(), body('slug').isString().notEmpty()],
  store
)
router.post('/join', authenticate, [body('communityId').isUUID()], join)

export default router
