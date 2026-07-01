import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { ServiceCard } from '@/components/ServiceCard'

export default async function ServicesPage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const services = await payload.find({
    collection: 'services',
    sort: 'order',
  })

  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.docs.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </main>
  )
}