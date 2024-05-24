import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/setting/')({
  component: () => <div>Hello /setting/!</div>
})