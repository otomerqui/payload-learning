import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'services',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const service = result.docs[0]

  if (!service) {
    notFound()
  }

  return (
    <main className="container py-16 max-w-4xl">
      {service.heroImage &&
        typeof service.heroImage !== 'string' && (
          <Media
            resource={service.heroImage}
            className="rounded-xl overflow-hidden mb-8"
          />
        )}

      <h1 className="text-5xl font-bold mb-6">
        {service.title}
      </h1>

      {service.excerpt && (
        <p className="text-xl text-muted-foreground mb-10">
          {service.excerpt}
        </p>
      )}

      {service.content && (
        <RichText
          data={service.content}
          className="mt-8"
        />
      )}
    </main>
  )
}