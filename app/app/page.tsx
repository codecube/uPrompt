import dynamic from 'next/dynamic'

const TemplateBlockBuilder = dynamic(() => import('@/components/TemplateBlockBuilder'), { ssr: false })

export default function AppPage() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <TemplateBlockBuilder />
    </div>
  )
}

