import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_authenticated/(inspections)/inspections',
)({
  component: () => <div>Hello /(inspections)/inspections!</div>,
})
