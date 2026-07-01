import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { ServiceCard } from '@/components/ServiceCard'

export default async function FeaturedServices() {
  const payload = await getPayload({
    config: configPromise,
  })

  const services = await payload.find({
    collection: 'services',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'order',
  })

  if (!services.docs.length) {
    return null
  }

  return (
    <section className="container py-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          Our Services
        </h2>

        <p className="text-muted-foreground mt-3">
          Discover how we help businesses grow through AI and modern web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.docs.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  )
}