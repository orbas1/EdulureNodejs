import { validationResult } from 'express-validator'
import { createCommunity, getCommunity, joinCommunity, listCommunities } from '../services/communityService.js'
import { searchAll } from '../services/meiliService.js'

export async function index (_req, res, next) {
  try {
    const data = await listCommunities()
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export async function show (req, res, next) {
  try {
    const community = await getCommunity(req.params.slug)
    if (!community) {
      return res.status(404).json({ message: 'Community not found' })
    }
    res.json(community)
  } catch (error) {
    next(error)
  }
}

export async function store (req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const payload = await createCommunity(req.body)
    res.status(201).json(payload)
  } catch (error) {
    next(error)
  }
}

export async function join (req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const membership = await joinCommunity({ communityId: req.body.communityId, userId: req.user.id })
    res.json(membership)
  } catch (error) {
    next(error)
  }
}

export async function search (req, res, next) {
  try {
    const { q } = req.query
    if (!q) {
      return res.status(400).json({ message: 'Missing query' })
    }
    const results = await searchAll(q)
    res.json(results)
  } catch (error) {
    next(error)
  }
}
